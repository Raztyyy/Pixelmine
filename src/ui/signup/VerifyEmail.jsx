import { useState, useEffect } from "react";
import { showToast } from "../../utils/Toast";

function VerifyEmail({ email }) {
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  // Countdown effect
  useEffect(() => {
    if (cooldown === 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleResend = async () => {
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

      if (!res.ok) {
        throw new Error(data.error || "Failed to resend verification email.");
      }

      showToast(data.message, "success");
      setCooldown(30); // start 30s cooldown
    } catch (err) {
      showToast(err.message || "Something went wrong.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Please verify your email</h2>
      <p className="text-gray-600">
        We've sent a verification link to: <b>{email}</b>
      </p>

      <button
        onClick={handleResend}
        disabled={loading || cooldown > 0}
        className="px-4 py-2 text-white bg-blue-600 rounded disabled:bg-gray-400"
      >
        {loading
          ? "Resending..."
          : cooldown > 0
          ? `Resend in ${cooldown}s`
          : "Resend verification email"}
      </button>
    </div>
  );
}

export default VerifyEmail;
