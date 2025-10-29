import { useState, useEffect, useRef } from "react";
import {
  useNavigate,
  Link,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { showToast } from "../../utils/Toast";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext"; // <-- added

const API_URL = import.meta.env.VITE_API_URL;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();
  const { language } = useLanguage(); // <-- added
  const isEN = language === "en"; // <-- added

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
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4 bg-gray-100 dark:bg-stone-900">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow dark:bg-stone-800">
        {/* Header */}
        <div className="pb-2 mb-4 border-b">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-stone-50">
            {isEN ? "Sign in to our platform" : "プラットフォームにサインイン"}
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-stone-50"
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
              className="w-full p-2.5 mt-1 border rounded-lg text-sm bg-gray-50"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-stone-50"
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
              className="w-full p-2.5 mt-1 border rounded-lg text-sm bg-gray-50"
            />
          </div>

          <div className="flex items-center justify-end text-sm">
            <Link
              to="/forgot-password"
              className="transition-all duration-300 ease-in-out text-primary dark:text-green-400 hover:underline"
            >
              {isEN ? "Lost password?" : "パスワードをお忘れですか？"}
            </Link>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/80 text-white font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 ease-in-out"
          >
            {isSubmitting
              ? isEN
                ? "Logging in..."
                : "ログイン中..."
              : isEN
              ? "Login to your account"
              : "アカウントにログイン"}
          </button>

          <div className="text-sm text-center text-gray-500 dark:text-stone-50">
            {isEN ? "Not registered?" : "登録がまだの方は？"}{" "}
            <Link
              to="/signup"
              className="text-primary hover:underline dark:text-green-400"
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
