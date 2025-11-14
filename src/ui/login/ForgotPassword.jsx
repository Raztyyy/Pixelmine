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
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4 py-12 bg-gradient-to-b from-emerald-50 to-white dark:from-stone-900 dark:to-stone-800">
      <div className="w-full max-w-md p-8 bg-white border border-gray-200 shadow-2xl md:p-10 rounded-3xl dark:bg-stone-800 dark:border-gray-700">
        {/* Header */}
        <div className="mb-6 text-center">
          <h3 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            {language === "en" ? "Find your account" : "アカウントを探す"}
          </h3>
        </div>

        <p className="mb-6 text-base leading-relaxed text-center text-gray-600 dark:text-gray-400">
          {language === "en"
            ? "Enter your email to receive a password reset link."
            : "パスワードリセットリンクを受け取るには、メールアドレスを入力してください。"}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              {language === "en" ? "Email Address" : "メールアドレス"}
            </label>
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
              className="w-full p-3 text-sm transition-all duration-200 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl text-sm px-5 py-3.5 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting
              ? language === "en"
                ? "Sending..."
                : "送信中..."
              : language === "en"
              ? "Send Reset Link"
              : "リセットリンクを送信"}
          </button>

          <div className="text-sm text-center text-gray-600 dark:text-stone-300">
            {language === "en"
              ? "Remember your password? "
              : "パスワードを覚えていますか？ "}
            <Link
              to="/login"
              className="font-semibold text-emerald-600 hover:text-emerald-700 hover:underline dark:text-emerald-400 dark:hover:text-emerald-300"
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
