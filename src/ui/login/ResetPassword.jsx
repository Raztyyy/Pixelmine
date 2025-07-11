import { useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { showToast } from "../../utils/Toast";

const API_URL = import.meta.env.VITE_API_URL;

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      showToast("Invalid or missing reset token.", "error");
      return;
    }

    if (newPassword !== confirmPassword) {
      showToast("Passwords do not match", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(`${API_URL}/api/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          password: newPassword,
          confirmPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        showToast(data.error || "Failed to reset password", "error");
        setIsSubmitting(false);
        return;
      }

      showToast(data.message || "Password reset successful!", "success");

      // Wait a bit so the toast shows, then navigate
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error("Reset password error:", err);
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
            Reset your password
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              New password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              required
              disabled={isSubmitting}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2.5 mt-1 border rounded-lg text-sm bg-gray-50"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              Confirm new password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              disabled={isSubmitting}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2.5 mt-1 border rounded-lg text-sm bg-gray-50"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/80 text-white font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 ease-in-out"
          >
            {isSubmitting ? "Resetting..." : "Reset Password"}
          </button>

          <div className="text-sm text-center text-gray-500 dark:text-stone-50">
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

export default ResetPassword;
