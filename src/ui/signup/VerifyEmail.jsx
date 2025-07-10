import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/pro-solid-svg-icons";
import { showToast } from "../../utils/Toast";

function VerifyEmail() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

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
      showToast("Email not available.", "error");
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
      if (!res.ok) throw new Error(data.error || "Failed to resend email.");
      showToast(data.message, "success");
      setCooldown(30);
    } catch (err) {
      showToast(err.message || "Something went wrong.", "error");
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
          You're almost there!
        </h1>
        <p className="mb-6 text-center text-gray-700 dark:text-stone-300">
          We’ve sent you a confirmation email. Just click the link in that email
          to complete your signup.
        </p>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          Didn’t get the email? Please check your spam folder or{" "}
          <a href="#" onClick={handleResend} className="underline text-primary">
            {loading
              ? "Resending..."
              : cooldown > 0
              ? `Resend in ${cooldown}s`
              : "resend"}
          </a>
          .
        </p>
        {email && (
          <p className="mt-2 text-xs text-center text-gray-400">
            Sent to: <b>{email}</b>
          </p>
        )}
      </div>
    </div>
  );
}

export default VerifyEmail;
