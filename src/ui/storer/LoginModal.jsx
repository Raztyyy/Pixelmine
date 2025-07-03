import { useState, useRef } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

function LoginModal({ children, isOpen, setIsOpen, switchToLogin }) {
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
      <Button
        variant="outline"
        onClick={() => setIsOpen(true)}
        className="dark:hover:bg-primary"
      >
        {children}
      </Button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          role="dialog"
          aria-modal="true"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-md p-6 bg-white rounded-lg shadow dark:bg-stone-800"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2 mb-4 border-b">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-stone-50">
                Sign in to our platform
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-900 dark:text-stone-50"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <form className="space-y-4">
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
                  placeholder="Enter your email"
                  required
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
                  placeholder="Enter your password"
                  required
                  className="w-full p-2.5 mt-1 border rounded-lg text-sm bg-gray-50 "
                />
              </div>

              <div className="flex items-center justify-end text-sm">
                <a
                  href="#"
                  className="transition-all duration-300 ease-in-out text-primary dark:text-green-400 hover:underline"
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

              <div className="text-sm text-gray-500 dark:text-stone-50">
                Not registered?{" "}
                <button
                  type="button"
                  onClick={switchToLogin}
                  className="text-primary hover:underline dark:text-green-400"
                >
                  Create account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginModal;
