import { useState, useRef } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

function LoginModal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleBackdropClick = (e) => {
    // If the clicked target is outside the modal content, close the modal
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        {children}
      </Button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/50"
          role="dialog"
          aria-modal="true"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 w-full max-w-md relative"
          >
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Sign in to our platform
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-900"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-2.5 mt-1 border rounded-lg text-sm bg-gray-50 dark:bg-gray-600 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  className="w-full p-2.5 mt-1 border rounded-lg text-sm bg-gray-50 dark:bg-gray-600 dark:text-white"
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" required />
                  <span className="dark:text-gray-300">Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-primary  hover:underline transition-all duration-300 ease-in-out"
                >
                  Lost password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-white font-medium rounded-lg text-sm px-5 py-2.5 transition-all duration-300 ease-in-out"
              >
                Login to your account
              </button>

              <div className="text-sm text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <Link to="sign-up" className="text-primary hover:underline ">
                  Create account
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginModal;
