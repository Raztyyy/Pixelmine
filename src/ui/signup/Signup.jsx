import { useEffect } from "react";
import { Link, useFetcher, useNavigate } from "react-router-dom";
import { showToast } from "../../utils/Toast";
import { useAuth } from "../../context/AuthContext";

function Signup({ switchToLogin }) {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

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
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4 py-12 bg-gray-100 dark:bg-stone-900">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-md dark:bg-stone-800">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-stone-50">
            Create your account
          </h1>
        </div>

        <fetcher.Form method="post" action="/signup" className="space-y-4">
          {/* First & Last Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-stone-50">
              Contact Person Name
            </label>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-gray-700 dark:text-stone-50"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  disabled={isSubmitting}
                  className="w-full p-2.5 mt-1 border rounded-lg text-sm bg-gray-50"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-gray-700 dark:text-stone-50"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  disabled={isSubmitting}
                  className="w-full p-2.5 mt-1 border rounded-lg text-sm bg-gray-50"
                />
              </div>
            </div>
          </div>

          {/* Contact Number */}
          <div>
            <label
              htmlFor="contactPersonNumber"
              className="block text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              Contact Person Number
            </label>
            <input
              type="tel"
              id="contactPersonNumber"
              name="contactPersonNumber"
              required
              disabled={isSubmitting}
              className="w-full p-2.5 mt-1 border rounded-lg text-sm bg-gray-50"
            />
          </div>

          {/* Company Info */}
          <div>
            <label
              htmlFor="companyName"
              className="block text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              disabled={isSubmitting}
              className="w-full p-2.5 mt-1 border rounded-lg text-sm bg-gray-50"
            />
          </div>

          <div>
            <label
              htmlFor="companyAddress"
              className="block text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              Company Address
            </label>
            <input
              type="text"
              id="companyAddress"
              name="companyAddress"
              required
              disabled={isSubmitting}
              className="w-full p-2.5 mt-1 border rounded-lg text-sm bg-gray-50"
            />
          </div>

          {/* Email & Password */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={isSubmitting}
              className="w-full p-2.5 mt-1 border rounded-lg text-sm bg-gray-50"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              disabled={isSubmitting}
              className="w-full p-2.5 mt-1 border rounded-lg text-sm bg-gray-50"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 dark:text-stone-50"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              disabled={isSubmitting}
              className="w-full p-2.5 mt-1 border rounded-lg text-sm bg-gray-50"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary/80 text-white font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 ease-in-out"
          >
            {isSubmitting ? "Creating..." : "Create Account"}
          </button>

          {/* Switch to Login */}
          <div className="text-sm text-center text-gray-500 dark:text-stone-50">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary hover:underline dark:text-green-400"
            >
              Login here
            </Link>
          </div>
        </fetcher.Form>
      </div>
    </div>
  );
}

export default Signup;
