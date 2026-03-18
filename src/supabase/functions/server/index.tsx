import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { createClient } from "jsr:@supabase/supabase-js@2";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Helper to get Supabase client
const getSupabase = () => createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false
    }
  }
);

// Health check endpoint
app.get("/make-server-a645badf/health", (c) => {
  return c.json({ status: "ok" });
});

// Signup Route (for Admin)
app.post("/make-server-a645badf/signup", async (c) => {
  try {
    const { email, password } = await c.req.json();
    if (!email || !password) {
      return c.json({ error: "Email and password are required" }, 400);
    }

    const supabase = getSupabase();
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true
    });

    if (error) {
      console.error("Signup error:", error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ user: data.user });
  } catch (e) {
    console.error("Signup exception:", e);
    return c.json({ error: "Internal Server Error" }, 500);
  }
});

// Setup Default Admin Route
app.post("/make-server-a645badf/setup-admin", async (c) => {
  const supabase = getSupabase();
  const email = "info@onesedge.co.jp";
  const password = "1106tktknext2020";

  // Check API Key availability
  if (!Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')) {
    console.error("Missing SUPABASE_SERVICE_ROLE_KEY");
    return c.json({ error: "Server config error: Missing Service Role Key" }, 500);
  }

  try {
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { name: 'Admin User' }
    });

    if (error) {
      console.error("Setup admin error:", error);
      
      // If user already exists, FORCE UPDATE the password so the user can login
      if (error.message?.includes("already been registered")) {
         // Find the user to get ID
         const { data: listData, error: listError } = await supabase.auth.admin.listUsers();
         
         if (listError) {
           return c.json({ error: "Failed to list users: " + listError.message }, 400);
         }

         const existingUser = listData.users.find(u => u.email === email);
         
         if (existingUser) {
           const { error: updateError } = await supabase.auth.admin.updateUserById(
             existingUser.id,
             { password: password, email_confirm: true }
           );
           
           if (updateError) {
             return c.json({ error: "Failed to update existing user: " + updateError.message }, 400);
           }
           
           return c.json({ success: true, message: "User updated", email, password });
         }
      }
      
      return c.json({ error: error.message }, 400);
    }

    return c.json({ success: true, email, password });
  } catch (e: any) {
    console.error("Setup exception:", e);
    return c.json({ error: "Internal Server Error: " + e.toString() }, 500);
  }
});

// Submit Inquiry
app.post("/make-server-a645badf/inquiries", async (c) => {
  try {
    const body = await c.req.json();
    const id = crypto.randomUUID();
    const timestamp = new Date().toISOString();
    
    const inquiry = {
      id,
      ...body,
      date: timestamp,
      status: 'unread'
    };
    
    // Save to KV Store
    console.log("Saving inquiry to KV store...");
    let dbSaveError = null;
    try {
      await kv.set(`inquiry_${timestamp}_${id}`, inquiry);
      console.log("Inquiry saved to KV store");
    } catch (kvError: any) {
      console.error("KV Store Error:", kvError);
      dbSaveError = kvError.message || kvError.toString();
    }
    
    // Send Email via Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY')?.trim();
    const notificationEmail = "info@onesedge.co.jp";
    // Sender address must be verified in Resend to send to external addresses
    const fromEmail = Deno.env.get('RESEND_FROM_EMAIL')?.trim() || "onboarding@resend.dev";
    
    if (resendApiKey) {
      console.log(`Attempting to send email via Resend to ${notificationEmail} from ${fromEmail}...`);
      try {
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            from: fromEmail,
            to: notificationEmail,
            subject: `【One's edge】お問い合わせ: ${body.subject || '件名なし'}`,
            html: `
              <h2>新しいお問い合わせを受信しました</h2>
              <p><strong>日時:</strong> ${new Date(timestamp).toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' })}</p>
              <hr />
              <p><strong>お名前:</strong> ${body.name}</p>
              <p><strong>会社名:</strong> ${body.company || '-'}</p>
              <p><strong>メールアドレス:</strong> ${body.email}</p>
              <p><strong>件名:</strong> ${body.subject || '-'}</p>
              <p><strong>メッセージ:</strong></p>
              <pre style="font-family: sans-serif; white-space: pre-wrap; background: #f5f5f5; padding: 10px; border-radius: 4px;">${body.message}</pre>
            `
          })
        });
        
        if (!emailResponse.ok) {
          const errorText = await emailResponse.text();
          console.error("Resend Error:", errorText);
          dbSaveError = (dbSaveError ? dbSaveError + " & " : "") + "Email Error: " + errorText;
        } else {
          console.log("Email sent successfully via Resend");
        }
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
      }
    } else {
      console.log("Skipping email: RESEND_API_KEY or NOTIFICATION_EMAIL not set");
    }
    
    console.log("Inquiry received:", inquiry);
    
    if (dbSaveError) {
      return c.json({ success: true, id, warning: "Saved to email only. DB Error: " + dbSaveError });
    }

    return c.json({ success: true, id });
  } catch (e: any) {
    console.error("Inquiry error:", e);
    // Return detailed error for debugging
    return c.json({ error: "Failed to save inquiry: " + (e.message || e.toString()) }, 500);
  }
});

// Get Inquiries (Protected)
app.get("/make-server-a645badf/inquiries", async (c) => {
  try {
    const authHeader = c.req.header('Authorization');
    if (!authHeader) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const token = authHeader.split(' ')[1];
    const supabase = getSupabase();
    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    // Fetch all inquiries
    const inquiries = await kv.getByPrefix("inquiry_");
    
    // Sort by date (newest first)
    inquiries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    return c.json({ inquiries });
  } catch (e) {
    console.error("Fetch inquiries error:", e);
    return c.json({ error: "Failed to fetch inquiries" }, 500);
  }
});

// Update Inquiry Status (Protected)
app.put("/make-server-a645badf/inquiries/:id", async (c) => {
  try {
    const id = c.req.param('id');
    const { status } = await c.req.json();
    
    const authHeader = c.req.header('Authorization');
    if (!authHeader) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const token = authHeader.split(' ')[1];
    const supabase = getSupabase();
    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    // We need to find the key for this ID to update it.
    // Since KV store keys are `inquiry_${timestamp}_${id}`, we might need to search or store the key in the object.
    // For now, let's iterate to find the key (not efficient but works for small scale).
    const allInquiries = await kv.getByPrefix("inquiry_");
    const targetInquiry = allInquiries.find((i: any) => i.id === id);
    
    if (!targetInquiry) {
      return c.json({ error: "Inquiry not found" }, 404);
    }
    
    // Construct key again (assuming we stored enough info, or we can return key in getByPrefix if we modify kv_store but we can't)
    // Wait, getByPrefix returns values. I don't have the key.
    // I should have stored the key in the value? Or just reconstruct it if I have the timestamp.
    // `inquiry_${timestamp}_${id}`. I have timestamp in `date`.
    
    const key = `inquiry_${targetInquiry.date}_${id}`;
    
    const updatedInquiry = { ...targetInquiry, status };
    await kv.set(key, updatedInquiry);
    
    return c.json({ success: true });
  } catch (e) {
    console.error("Update inquiry error:", e);
    return c.json({ error: "Failed to update inquiry" }, 500);
  }
});

// Delete Inquiry (Protected - Soft Delete)
app.delete("/make-server-a645badf/inquiries/:id", async (c) => {
  try {
    const id = c.req.param('id');
    
    const authHeader = c.req.header('Authorization');
    if (!authHeader) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const token = authHeader.split(' ')[1];
    const supabase = getSupabase();
    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const allInquiries = await kv.getByPrefix("inquiry_");
    const targetInquiry = allInquiries.find((i: any) => i.id === id);
    
    if (!targetInquiry) {
      return c.json({ error: "Inquiry not found" }, 404);
    }
    
    const key = `inquiry_${targetInquiry.date}_${id}`;
    const deletedInquiry = { ...targetInquiry, deleted: true, deletedAt: new Date().toISOString() };
    await kv.set(key, deletedInquiry);
    
    return c.json({ success: true });
  } catch (e) {
    console.error("Delete inquiry error:", e);
    return c.json({ error: "Failed to delete inquiry" }, 500);
  }
});

// Restore Inquiry (Protected)
app.post("/make-server-a645badf/inquiries/:id/restore", async (c) => {
  try {
    const id = c.req.param('id');
    
    const authHeader = c.req.header('Authorization');
    if (!authHeader) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const token = authHeader.split(' ')[1];
    const supabase = getSupabase();
    const { data: { user }, error } = await supabase.auth.getUser(token);
    
    if (error || !user) {
      return c.json({ error: "Unauthorized" }, 401);
    }
    
    const allInquiries = await kv.getByPrefix("inquiry_");
    const targetInquiry = allInquiries.find((i: any) => i.id === id);
    
    if (!targetInquiry) {
      return c.json({ error: "Inquiry not found" }, 404);
    }
    
    const key = `inquiry_${targetInquiry.date}_${id}`;
    const { deleted, deletedAt, ...restoredInquiry } = targetInquiry;
    await kv.set(key, restoredInquiry);
    
    return c.json({ success: true });
  } catch (e) {
    console.error("Restore inquiry error:", e);
    return c.json({ error: "Failed to restore inquiry" }, 500);
  }
});

Deno.serve(app.fetch);