import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/pro-solid-svg-icons";
import { showToast } from "../../utils/Toast";
import { useLanguage } from "../../context/LanguageContext"; // <-- added

function VerifyEmail() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);
  const { language } = useLanguage(); // <-- added
  const isEN = language === "en"; // <-- added

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
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4 py-16 bg-gray-100 dark:bg-stone-900">
      <div className="flex flex-col items-center justify-center w-full max-w-lg p-8 mt-5 bg-white shadow dark:bg-stone-800 rounded-xl">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="w-6 h-6 p-4 rounded-full bg-primary text-stone-50"
        />
        <h1 className="mt-5 mb-4 text-2xl font-bold text-center text-gray-800 dark:text-white">
          {isEN ? "You're almost there!" : "もう少しで完了です！"}
        </h1>
        <p className="mb-6 text-center text-gray-700 dark:text-stone-300">
          {isEN
            ? "We’ve sent you a confirmation email. Just click the link in that email to complete your signup."
            : "確認メールをお送りしました。そのメール内のリンクをクリックして登録を完了してください。"}
        </p>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          {isEN
            ? "Didn’t get the email? Please check your spam folder or "
            : "メールが届かない場合は、迷惑メールフォルダを確認するか "}
          <a href="#" onClick={handleResend} className="underline text-primary">
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
        {email && (
          <p className="mt-2 text-xs text-center text-gray-400">
            {isEN ? "Sent to:" : "送信先："} <b>{email}</b>
          </p>
        )}
      </div>
    </div>
  );
}

export default VerifyEmail;
