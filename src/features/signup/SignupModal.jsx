import { useRef, useEffect } from "react";
import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { showToast } from "../../utils/Toast";

function SignupModal({ children, isOpen, setIsOpen, switchToLogin }) {
  const modalRef = useRef(null);
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const { data } = fetcher;
    if (data?.message) {
      showToast(data.message, data.type || "success");
      if (data.type === "success") {
        setIsOpen(false);
      }
    }
  }, [fetcher.data, setIsOpen]);

  return (
    <>
      <Button
        variant="primary"
        onClick={() => setIsOpen(true)}
        className="dark:hover:bg-primary"
      >
        {children}
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          role="dialog"
          aria-modal="true"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-xl p-6 bg-white rounded-lg shadow dark:bg-stone-800"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2 mb-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-stone-50">
                Create your account
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-900 dark:text-stone-50"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <fetcher.Form method="post" action="/signup" className="space-y-4">
              {/* Contact Person Name */}
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
                      placeholder="Enter first name"
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
                      placeholder="Enter last name"
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
                  placeholder="Enter contact number"
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
                  placeholder="Enter company name"
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
                  placeholder="Enter company address"
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
                  placeholder="Enter your email"
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
                  placeholder="Enter password"
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
                  placeholder="Re-enter password"
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
                <button
                  type="button"
                  onClick={switchToLogin}
                  className="text-primary hover:underline dark:text-green-400"
                >
                  Login here
                </button>
              </div>
            </fetcher.Form>
          </div>
        </div>
      )}
    </>
  );
}

export default SignupModal;
