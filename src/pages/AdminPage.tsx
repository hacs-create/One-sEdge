import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "../components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Lock, LogIn, Search, RefreshCw, Mail, ExternalLink, Trash2, CheckCircle, UserPlus, Undo2, Archive } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { supabase } from "../utils/supabase/client";
import { projectId, publicAnonKey } from "../utils/supabase/info";

export function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [lastError, setLastError] = useState<string | null>(null);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<any>(null);
  const [showDeleted, setShowDeleted] = useState(false);

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setIsAuthenticated(true);
        fetchInquiries();
      }
    });
  }, []);

  const fetchInquiries = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a645badf/inquiries`, {
        headers: {
          'Authorization': `Bearer ${session.access_token}`
        }
      });
      const data = await response.json();
      if (data.inquiries) {
        setInquiries(data.inquiries);
      } else {
        toast.error("データの取得に失敗しました");
      }
    } catch (e) {
      console.error(e);
      toast.error("通信エラーが発生しました");
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLoginMode) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        
        setIsAuthenticated(true);
        toast.success("ログインしました");
        fetchInquiries();
      } else {
        // Signup via Server (to bypass email confirmation if needed)
        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a645badf/signup`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error || "登録に失敗しました");
        }
        
        toast.success("アカウントを作成しました。ログインしてください。");
        setIsLoginMode(true);
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      toast.error(error.message || "認証エラーが発生しました");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSetupAdmin = async () => {
    setIsLoading(true);
    try {
      setLastError(null);
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a645badf/setup-admin`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });
      
      const data = await response.json().catch(() => null);
      
      if (!response.ok) {
        throw new Error((data && data.error) || `Error ${response.status}: 初期設定に失敗しました`);
      }
      
      toast.success("初期アカウントを作成しました");
      setEmail(data.email || "info@onesedge.co.jp");
      setPassword(data.password || "1106tktknext2020");
      setIsLoginMode(true);
    } catch (error: any) {
      console.error("Setup error:", error);
      setLastError(error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setInquiries([]);
    setEmail("");
    setPassword("");
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a645badf/inquiries/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${session.access_token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        toast.success('ステータスを更新しました');
        fetchInquiries();
        if (selectedInquiry?.id === id) {
          setSelectedInquiry({ ...selectedInquiry, status: newStatus });
        }
      } else {
        toast.error('ステータスの更新に失敗しました');
      }
    } catch (e) {
      console.error(e);
      toast.error('通信エラーが発生しました');
    }
  };

  const handleDelete = async (id: string) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a645badf/inquiries/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${session.access_token}`
        }
      });

      if (response.ok) {
        toast.success('削除しました');
        fetchInquiries();
        setSelectedInquiry(null);
      } else {
        toast.error('削除に失敗しました');
      }
    } catch (e) {
      console.error(e);
      toast.error('通信エラーが発生しました');
    }
  };

  const handleRestore = async (id: string) => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-a645badf/inquiries/${id}/restore`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session.access_token}`
        }
      });

      if (response.ok) {
        toast.success('復元しました');
        fetchInquiries();
        setSelectedInquiry(null);
      } else {
        toast.error('復元に失敗しました');
      }
    } catch (e) {
      console.error(e);
      toast.error('通信エラーが発生しました');
    }
  };

  const activeInquiries = inquiries.filter(i => !i.deleted);
  const deletedInquiries = inquiries.filter(i => i.deleted);
  const displayInquiries = showDeleted ? deletedInquiries : activeInquiries;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full border border-stone-200"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-100 rounded-full mb-4">
              <Lock className="w-8 h-8 text-stone-600" />
            </div>
            <h1 className="text-2xl font-bold text-stone-800">
              {isLoginMode ? "管理者ログイン" : "管理者アカウント作成"}
            </h1>
            <p className="text-stone-500 mt-2">
              {isLoginMode ? "メールアドレスとパスワードを入力してください" : "新しい管理者アカウントを登録します"}
            </p>
          </div>
          
          <form onSubmit={handleAuth} className="space-y-6">
            <div className="space-y-4">
              <Input
                type="email"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 text-lg"
                required
              />
              <Input
                type="password"
                placeholder="パスワード"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 text-lg"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full h-12 bg-stone-900 hover:bg-stone-800 text-white"
              disabled={isLoading}
            >
              {isLoading ? (
                <RefreshCw className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {isLoginMode ? "ログイン" : "登録する"}
                  {isLoginMode ? <LogIn className="w-5 h-5 ml-2" /> : <UserPlus className="w-5 h-5 ml-2" />}
                </>
              )}
            </Button>
          </form>
          
          <div className="mt-6 flex flex-col gap-3 text-center">
            <button
              type="button"
              onClick={() => setIsLoginMode(!isLoginMode)}
              className="text-sm text-stone-500 hover:text-stone-800 underline underline-offset-4"
            >
              {isLoginMode ? "アカウントをお持ちでない方はこちら" : "ログイン画面に戻る"}
            </button>
            
            <button
              type="button"
              onClick={handleSetupAdmin}
              disabled={isLoading}
              className="text-xs text-stone-400 hover:text-[#22c55e] transition-colors"
            >
              初期設定（管理者アカウントを自動生成）
            </button>
            
            {lastError && (
              <div className="p-3 mt-2 bg-red-50 border border-red-200 rounded text-left">
                <p className="text-xs font-bold text-red-800 mb-1">エラー詳細:</p>
                <p className="text-xs text-red-600 break-all font-mono">{lastError}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              お問い合わせ管理
            </h1>
            <p className="text-stone-500 mt-1">
              受信したお問い合わせの一覧と詳細確認
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="bg-white" onClick={fetchInquiries}>
              <RefreshCw className="w-4 h-4 mr-2" />
              更新
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              ログアウト
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
          <div className="p-4 border-b border-stone-200 flex items-center gap-4 bg-stone-50/50 flex-wrap">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-400 w-4 h-4" />
              <Input 
                placeholder="検索..." 
                className="pl-9 bg-white"
              />
            </div>
            <Button
              variant={showDeleted ? "default" : "outline"}
              onClick={() => setShowDeleted(!showDeleted)}
              className={showDeleted ? "bg-stone-900" : "bg-white"}
            >
              <Archive className="w-4 h-4 mr-2" />
              {showDeleted ? `削除済み (${deletedInquiries.length})` : `アクティブ (${activeInquiries.length})`}
            </Button>
            <div className="text-sm text-stone-500">
              全 {displayInquiries.length} 件
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-stone-50 hover:bg-stone-50">
                  <TableHead className="min-w-[100px]">ステータス</TableHead>
                  <TableHead className="min-w-[150px]">日時</TableHead>
                  <TableHead className="min-w-[150px]">お名前 / 会社名</TableHead>
                  <TableHead className="min-w-[200px]">件名</TableHead>
                  <TableHead className="text-right">アクション</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inquiries.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={5} className="text-center py-12 text-stone-500">
                      お問い合わせはまだありません
                    </TableCell>
                  </TableRow>
                ) : (
                  displayInquiries.map((inquiry) => (
                    <TableRow key={inquiry.id} className="hover:bg-stone-50/50 cursor-pointer" onClick={() => setSelectedInquiry(inquiry)}>
                      <TableCell>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                          ${inquiry.status === 'unread' ? 'bg-red-100 text-red-800' : 
                            inquiry.status === 'replied' ? 'bg-green-100 text-green-800' : 
                            'bg-stone-100 text-stone-800'}`}>
                          {inquiry.status === 'unread' ? '未読' : 
                           inquiry.status === 'replied' ? '対応済' : '既読'}
                        </span>
                      </TableCell>
                      <TableCell className="text-stone-600 text-sm">
                        {new Date(inquiry.date).toLocaleString('ja-JP')}
                      </TableCell>
                      <TableCell>
                        <div className="font-medium text-stone-900">{inquiry.name}</div>
                        {inquiry.company && (
                          <div className="text-xs text-stone-500 mt-0.5">{inquiry.company}</div>
                        )}
                        <div className="text-xs text-stone-400 mt-0.5">{inquiry.email}</div>
                      </TableCell>
                      <TableCell className="text-stone-700 font-medium truncate max-w-[200px]">
                        {inquiry.subject || "件名なし"}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2" onClick={(e) => e.stopPropagation()}>
                          {showDeleted ? (
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-8 w-8 text-green-600 hover:text-green-700 hover:bg-green-50"
                              onClick={() => handleRestore(inquiry.id)}
                            >
                              <Undo2 className="w-4 h-4" />
                            </Button>
                          ) : (
                            <>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 text-stone-400 hover:text-stone-900"
                                onClick={() => window.open(`mailto:${inquiry.email}`, '_blank')}
                              >
                                <Mail className="w-4 h-4" />
                              </Button>
                              <Button
                                size="icon"
                                variant="ghost"
                                className="h-8 w-8 text-red-400 hover:text-red-700 hover:bg-red-50"
                                onClick={() => handleDelete(inquiry.id)}
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        <Dialog open={!!selectedInquiry} onOpenChange={(open) => !open && setSelectedInquiry(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
            <DialogHeader>
              <DialogTitle className="text-xl font-serif">お問い合わせ詳細</DialogTitle>
              <DialogDescription>
                {selectedInquiry && new Date(selectedInquiry.date).toLocaleString('ja-JP')}
              </DialogDescription>
            </DialogHeader>
            
            {selectedInquiry && (
              <div className="space-y-6 mt-4">
                <div>
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wider">ステータス</label>
                  <Select value={selectedInquiry.status} onValueChange={(value) => handleStatusChange(selectedInquiry.id, value)} disabled={selectedInquiry.deleted}>
                    <SelectTrigger className="w-full mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="unread">未読</SelectItem>
                      <SelectItem value="read">既読</SelectItem>
                      <SelectItem value="replied">対応済</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-wider">お名前</label>
                    <p className="text-stone-900 mt-1">{selectedInquiry.name}</p>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-stone-500 uppercase tracking-wider">会社名</label>
                    <p className="text-stone-900 mt-1">{selectedInquiry.company || "-"}</p>
                  </div>
                </div>
                
                <div>
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wider">メールアドレス</label>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-stone-900">{selectedInquiry.email}</p>
                    <a href={`mailto:${selectedInquiry.email}`} className="text-stone-400 hover:text-stone-900">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wider">件名</label>
                  <p className="text-stone-900 mt-1 font-medium">{selectedInquiry.subject || "件名なし"}</p>
                </div>

                <div>
                  <label className="text-xs font-bold text-stone-500 uppercase tracking-wider">メッセージ</label>
                  <div className="mt-2 p-4 bg-stone-50 rounded-lg border border-stone-100 text-stone-800 whitespace-pre-wrap leading-relaxed">
                    {selectedInquiry.message}
                  </div>
                </div>

                {selectedInquiry.deleted && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-center gap-2">
                    <Archive className="w-4 h-4 text-amber-600" />
                    <p className="text-sm text-amber-800">
                      このお問い合わせは削除されています（{new Date(selectedInquiry.deletedAt).toLocaleString('ja-JP')}）
                    </p>
                  </div>
                )}
              </div>
            )}

            <DialogFooter className="mt-6 gap-2">
              {selectedInquiry?.deleted ? (
                <Button
                  onClick={() => handleRestore(selectedInquiry.id)}
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Undo2 className="w-4 h-4 mr-2" />
                  復元する
                </Button>
              ) : (
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(selectedInquiry.id)}
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  削除する
                </Button>
              )}
              <Button variant="outline" onClick={() => setSelectedInquiry(null)}>
                閉じる
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}