import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { showToast } from "../../utils/Toast";

const API_URL = import.meta.env.VITE_API_URL;

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

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
        showToast(data.error || "Failed to send reset link", "error");
        setIsSubmitting(false);
        return;
      }

      showToast(
        data.message || "Reset link sent! Check your email.",
        "success"
      );

      // Wait a moment so the toast is visible, then navigate
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error("Forgot password error:", err);
      showToast("Server error. Please try again.", "error");
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
            Find your account
          </h3>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400">
          Enter your email to receive a password reset link.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
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
            {isSubmitting ? "Sending..." : "Send Reset Link"}
          </button>

          <div className="text-sm text-center text-gray-500 dark:text-stone-50">
            Remember your password?{" "}
            <Link
              to="/login"
              className="text-primary hover:underline dark:text-green-400"
            >
              Back to login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
