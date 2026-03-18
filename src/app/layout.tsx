import type { Metadata } from "next";
import { ClientHeader } from "../components/ClientHeader";
import { Footer } from "../components/Footer";
import { Toaster } from "../components/ui/sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "合同会社 One's edge",
  description: "通信商材営業代理/代行業務、アウトソーシング事業、固定通信回線移動通信式サービスを展開する合同会社One's edgeのコーポレートサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body 
        className="min-h-screen bg-white antialiased" 
        style={{ fontFamily: "'Manrope', 'Noto Sans JP', sans-serif" }}
      >
        <ClientHeader />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
