// routes/VerifyEmail.jsx
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/pro-solid-svg-icons"; // Example icon

function VerifyEmail() {
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
        {/* <p className="text-sm text-center text-gray-500 dark:text-gray-400">
          Didn’t get the email? Please check your spam folder or{" "}
          <Link to="/resend-verification" className="underline text-primary">
            resend
          </Link>
          .
        </p> */}
      </div>
    </div>
  );
}

export default VerifyEmail;
