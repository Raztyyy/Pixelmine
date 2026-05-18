import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/pro-solid-svg-icons";
import { Link, useFetcher, useNavigate } from "react-router-dom";
import { showToast } from "../../utils/Toast";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";

function Signup({ switchToLogin }) {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { language } = useLanguage();
  const isEN = language === "en";

  // ✅ Added only necessary states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ✅ Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const { data } = fetcher;
    if (data?.message) {
      showToast(data.message, data.type || "success");

      if (data.type === "success" && data.email) {
        localStorage.setItem("pending_email", data.email);
        setTimeout(() => navigate("/verify-email"), 1500);
      }
    }
  }, [fetcher.data, navigate]);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4 py-12 bg-gradient-to-b from-emerald-50 to-white dark:from-stone-900 dark:to-stone-800">
      <div className="w-full max-w-2xl p-8 bg-white border border-gray-200 shadow-2xl md:p-12 rounded-3xl dark:bg-stone-800 dark:border-gray-700">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
            {isEN ? "Create your account" : "アカウントを作成"}
          </h1>
        </div>

        <fetcher.Form method="post" action="/signup" className="space-y-6">
          {/* First & Last Name */}
          <div>
            <label className="block mb-3 text-sm font-semibold text-gray-700 dark:text-stone-50">
              {isEN ? "Contact Person Name" : "担当者名"}
            </label>

            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-stone-50"
                >
                  {isEN ? "First Name" : "名"}
                </label>

                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  disabled={isSubmitting}
                  className="w-full p-3 text-sm transition-all duration-200 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-stone-50"
                >
                  {isEN ? "Last Name" : "姓"}
                </label>

                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  disabled={isSubmitting}
                  className="w-full p-3 text-sm transition-all duration-200 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>
            </div>
          </div>

          {/* Contact Number */}
          <div>
            <label
              htmlFor="contactPersonNumber"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              {isEN ? "Contact Person Number" : "担当者の電話番号"}
            </label>

            <input
              type="tel"
              id="contactPersonNumber"
              name="contactPersonNumber"
              required
              disabled={isSubmitting}
              className="w-full p-3 text-sm transition-all duration-200 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Company Info */}
          <div>
            <label
              htmlFor="companyName"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              {isEN ? "Company Name" : "会社名"}
            </label>

            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              disabled={isSubmitting}
              className="w-full p-3 text-sm transition-all duration-200 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label
              htmlFor="companyAddress"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              {isEN ? "Company Address" : "会社住所"}
            </label>

            <input
              type="text"
              id="companyAddress"
              name="companyAddress"
              required
              disabled={isSubmitting}
              className="w-full p-3 text-sm transition-all duration-200 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              {isEN ? "Email" : "メールアドレス"}
            </label>

            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={isSubmitting}
              className="w-full p-3 text-sm transition-all duration-200 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              {isEN ? "Password" : "パスワード"}
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                disabled={isSubmitting}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pr-12 text-sm transition-all duration-200 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              />

              {password && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              {isEN ? "Confirm Password" : "パスワードの確認"}
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                required
                disabled={isSubmitting}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 pr-12 text-sm transition-all duration-200 border border-gray-300 rounded-xl bg-gray-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              />

              {confirmPassword && (
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute text-gray-500 -translate-y-1/2 right-3 top-1/2 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                >
                  <FontAwesomeIcon
                    icon={showConfirmPassword ? faEyeSlash : faEye}
                  />
                </button>
              )}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl text-sm px-5 py-3.5 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isSubmitting
              ? isEN
                ? "Creating..."
                : "作成中..."
              : isEN
              ? "Create Account"
              : "アカウントを作成"}
          </button>

          {/* Switch to Login */}
          <div className="text-sm text-center text-gray-600 dark:text-stone-300">
            {isEN
              ? "Already have an account?"
              : "すでにアカウントをお持ちですか？"}{" "}
            <Link
              to="/login"
              className="font-semibold text-emerald-600 hover:text-emerald-700 hover:underline dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              {isEN ? "Login here" : "こちらからログイン"}
            </Link>
          </div>
        </fetcher.Form>
      </div>
    </div>
  );
}

export default Signup;
