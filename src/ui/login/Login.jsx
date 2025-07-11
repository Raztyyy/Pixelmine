import { useState, useEffect } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { showToast } from "../../utils/Toast";
import { useAuth } from "../../context/AuthContext";
import { useRef } from "react";

const API_URL = import.meta.env.VITE_API_URL;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [searchParams] = useSearchParams();
  const isVerified = searchParams.get("verified") === "true";
  const hasShownToast = useRef(false); // ✅ prevents double toast

  useEffect(() => {
    if (isVerified && !hasShownToast.current) {
      showToast("Your email has been verified. You can now log in.", "success");
      hasShownToast.current = true; // ✅ only show once
    }
  }, [isVerified]);

  useEffect(() => {
    if (isVerified) {
      // Remove pending_email from localStorage after successful verification
      localStorage.removeItem("pending_email");
    }
  }, [isVerified]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

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
        showToast(data.error || "Login failed", "error");
        setIsSubmitting(false);
        return;
      }

      login(data.token); // ✅ Save token and update auth context
      showToast("Login successful!", "success");

      // ✅ optional: delay or navigate manually if needed
      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (err) {
      console.error("Login error:", err);
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
            Sign in to our platform
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              Your email
            </label>
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

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
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
              Lost password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/80 text-white font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 ease-in-out"
          >
            {isSubmitting ? "Logging in..." : "Login to your account"}
          </button>

          <div className="text-sm text-center text-gray-500 dark:text-stone-50">
            Not registered?{" "}
            <Link
              to="/signup"
              className="text-primary hover:underline dark:text-green-400"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
