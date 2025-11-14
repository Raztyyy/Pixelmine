import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/pro-solid-svg-icons";
import { showToast } from "../../utils/Toast";
import { useLanguage } from "../../context/LanguageContext";

function VerifyEmail() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const { language } = useLanguage();
  const isEN = language === "en";

  // Load email from localStorage on mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("pending_email");
    setEmail(storedEmail || "");
  }, []);

  // Countdown effect
  useEffect(() => {
    if (cooldown === 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleResend = async (e) => {
    e.preventDefault();
    if (!email) {
      showToast(
        isEN ? "Email not available." : "メールが見つかりません。",
        "error"
      );
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(
        "https://pixelmine.org:3001/api/resend-verification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      const data = await res.json();
      if (!res.ok)
        throw new Error(
          data.error ||
            (isEN
              ? "Failed to resend email."
              : "メールの再送信に失敗しました。")
        );
      showToast(
        data.message ||
          (isEN ? "Verification email resent." : "確認メールを再送しました。"),
        "success"
      );
      setCooldown(30);
    } catch (err) {
      showToast(
        err.message ||
          (isEN ? "Something went wrong." : "問題が発生しました。"),
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4 py-16 bg-gradient-to-b from-emerald-50 to-white dark:from-stone-900 dark:to-stone-800">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl p-10 mt-5 bg-white border border-gray-200 shadow-2xl md:p-12 dark:bg-stone-800 dark:border-gray-700 rounded-3xl">
        {/* Icon */}
        <div className="flex items-center justify-center w-20 h-20 mb-6 shadow-xl rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600">
          <FontAwesomeIcon icon={faEnvelope} className="text-white size-10" />
        </div>

        {/* Heading */}
        <h1 className="mb-4 text-3xl font-bold text-center text-gray-900 md:text-4xl dark:text-white">
          {isEN ? "You're almost there!" : "もう少しで完了です！"}
        </h1>

        {/* Description */}
        <p className="mb-6 text-base leading-relaxed text-center text-gray-700 md:text-lg dark:text-stone-300">
          {isEN
            ? "We've sent you a confirmation email. Just click the link in that email to complete your signup."
            : "確認メールをお送りしました。そのメール内のリンクをクリックして登録を完了してください。"}
        </p>

        {/* Resend Link */}
        <div className="p-4 mb-6 border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 rounded-r-xl">
          <p className="text-sm text-center text-gray-700 dark:text-gray-300">
            {isEN
              ? "Didn't get the email? Please check your spam folder or "
              : "メールが届かない場合は、迷惑メールフォルダを確認するか "}
            <a
              href="#"
              onClick={handleResend}
              className={`font-semibold underline transition-colors ${
                cooldown > 0 || loading
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
              }`}
            >
              {loading
                ? isEN
                  ? "Resending..."
                  : "再送信中..."
                : cooldown > 0
                ? isEN
                  ? `Resend in ${cooldown}s`
                  : `${cooldown}秒後に再送信`
                : isEN
                ? "resend"
                : "再送信"}
            </a>
            .
          </p>
        </div>

        {/* Email Display */}
        {email && (
          <div className="w-full p-3 text-center border border-gray-200 bg-gray-50 dark:bg-stone-700 dark:border-gray-600 rounded-xl">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isEN ? "Sent to:" : "送信先："}{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {email}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default VerifyEmail;
