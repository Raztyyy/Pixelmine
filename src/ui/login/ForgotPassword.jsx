import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { showToast } from "../../utils/Toast";
import { useLanguage } from "../../context/LanguageContext";

const API_URL = import.meta.env.VITE_API_URL;

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_URL}/api/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        showToast(
          data.error ||
            (language === "en"
              ? "Failed to send reset link"
              : "リセットリンクの送信に失敗しました。"),
          "error"
        );
        setIsSubmitting(false);
        return;
      }

      showToast(
        data.message ||
          (language === "en"
            ? "Reset link sent! Check your email."
            : "リセットリンクを送信しました。メールをご確認ください。"),
        "success"
      );

      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error("Forgot password error:", err);
      showToast(
        language === "en"
          ? "Server error. Please try again."
          : "サーバーエラーが発生しました。もう一度お試しください。",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4 bg-gray-100 dark:bg-stone-900">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow dark:bg-stone-800">
        {/* Header */}
        <div className="pb-2 mb-4 border-b">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-stone-50">
            {language === "en" ? "Find your account" : "アカウントを探す"}
          </h3>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          {language === "en"
            ? "Enter your email to receive a password reset link."
            : "パスワードリセットリンクを受け取るには、メールアドレスを入力してください。"}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={
                language === "en" ? "Enter your email" : "メールアドレスを入力"
              }
              required
              disabled={isSubmitting}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 mt-1 border rounded-lg text-sm bg-gray-50"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/80 text-white font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 ease-in-out"
          >
            {isSubmitting
              ? language === "en"
                ? "Sending..."
                : "送信中..."
              : language === "en"
              ? "Send Reset Link"
              : "リセットリンクを送信"}
          </button>

          <div className="text-sm text-center text-gray-500 dark:text-stone-50">
            {language === "en"
              ? "Remember your password? "
              : "パスワードを覚えていますか？ "}
            <Link
              to="/login"
              className="text-primary hover:underline dark:text-green-400"
            >
              {language === "en" ? "Back to login" : "ログインに戻る"}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
