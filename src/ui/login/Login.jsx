import { useState, useEffect, useRef } from "react";
import {
  useNavigate,
  Link,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { showToast } from "../../utils/Toast";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";

const API_URL = import.meta.env.VITE_API_URL;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();
  const { language } = useLanguage();
  const isEN = language === "en";

  // ✅ preserve both pathname + query string
  const fromPath = location.state?.from?.pathname || "/dashboard";
  const fromSearch = location.state?.from?.search || "";
  const from = `${fromPath}${fromSearch}`;

  const [searchParams] = useSearchParams();
  const isVerified = searchParams.get("verified") === "true";
  const hasShownToast = useRef(false);

  // Show verified toast once
  useEffect(() => {
    if (isVerified && !hasShownToast.current) {
      showToast(
        isEN
          ? "Your email has been verified. You can now log in."
          : "メールが確認されました。ログインできます。",
        "success"
      );
      hasShownToast.current = true;
      localStorage.removeItem("pending_email");
    }
  }, [isVerified, isEN]);

  // Auto redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        showToast(
          data.error || (isEN ? "Login failed" : "ログインに失敗しました。"),
          "error"
        );
        setIsSubmitting(false);
        return;
      }

      login(data.token); // save token
      showToast(isEN ? "Login successful!" : "ログイン成功！", "success");

      // ✅ go back to original route with query params intact
      navigate(from, { replace: true });
    } catch (err) {
      console.error("Login error:", err);
      showToast(
        isEN
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
      <div className="w-full max-w-lg p-8 bg-white border border-gray-200 shadow-2xl md:p-10 rounded-3xl dark:bg-stone-800 dark:border-gray-700">
        {/* Header */}
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            {isEN ? "Sign in to our platform" : "プラットフォームにサインイン"}
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              {isEN ? "Your email" : "メールアドレス"}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={isEN ? "Enter your email" : "メールアドレスを入力"}
              required
              disabled={isSubmitting}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 text-sm transition-all duration-200 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              {isEN ? "Your password" : "パスワード"}
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder={isEN ? "Enter your password" : "パスワードを入力"}
              required
              disabled={isSubmitting}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 text-sm transition-all duration-200 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div className="flex items-center justify-end text-sm">
            <Link
              to="/forgot-password"
              className="font-medium transition-all duration-300 ease-in-out text-emerald-600 hover:text-emerald-700 hover:underline dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              {isEN ? "Lost password?" : "パスワードをお忘れですか？"}
            </Link>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl text-sm px-5 py-3.5 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting
              ? isEN
                ? "Logging in..."
                : "ログイン中..."
              : isEN
              ? "Login to your account"
              : "アカウントにログイン"}
          </button>

          <div className="text-sm text-center text-gray-600 dark:text-stone-300">
            {isEN ? "Not registered?" : "登録がまだの方は？"}{" "}
            <Link
              to="/signup"
              className="font-semibold text-emerald-600 hover:text-emerald-700 hover:underline dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              {isEN ? "Create account" : "アカウントを作成"}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
