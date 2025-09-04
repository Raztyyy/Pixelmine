import { useMoveBack } from "../../../hooks/useMoveBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/pro-regular-svg-icons";

function DocumentationGettingStarted() {
  return (
    <div className="p-10 bg-white border shadow-sm rounded-xl">
      <button
        className="flex items-center justify-center text-lg text-gray-500 transition-all duration-300 ease-in-out group hover:text-primary dark:text-stone-50 dark:hover:text-green-400"
        onClick={useMoveBack()}
      >
        <span className="flex items-center justify-center mr-1">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="text-gray-500 transition-all duration-300 ease-in-out size-7 group-hover:text-primary dark:text-stone-50 dark:group-hover:text-green-400"
          />
        </span>
        Go Back
      </button>

      {/* Page Title */}
      <h2 className="mt-10 text-3xl font-bold text-gray-900 md:text-4xl">
        Getting Started
      </h2>
      <p className="mt-3 text-gray-600  md:text-lg">
        Welcome to Pixelmine! This guide will walk you through the first steps
        to set up your account, explore the dashboard, and start using our
        features effectively.
      </p>

      {/* Step 1 */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-800">
          1. Create an Account
        </h3>
        <p className="mt-2 text-gray-600">
          Sign up using your email address. Once registered, you’ll receive a
          verification link in your inbox.
        </p>
        <div className="inline-block p-4 mt-3 border rounded-lg bg-gray-50">
          <p className="text-sm text-gray-500 ">
            ✅ Tip: Check your spam folder if you don’t see the verification
            email within a few minutes.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">
          2. Explore the Dashboard
        </h3>
        <p className="mt-2 text-gray-600">
          After logging in, you’ll land on the dashboard overview. Here you can
          monitor activity, view analytics, and navigate through all features.
        </p>
      </div>

      {/* Step 3 */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">
          3. Buy Ad Points
        </h3>
        <p className="mt-2 text-gray-600">
          Ad Points are the core of Pixelmine’s system. You can purchase them
          directly in the dashboard and use them to boost campaigns.
        </p>
      </div>

      {/* Step 4 */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">
          4. Connect via API
        </h3>
        <p className="mt-2 text-gray-600">
          Developers can integrate Pixelmine with their apps using our REST API.
          Head over to the{" "}
          <a
            href="/dashboard/documentation/api-reference"
            className="font-medium text-primary hover:underline"
          >
            API Reference
          </a>{" "}
          to learn more.
        </p>
      </div>

      {/* Callout Box */}
      <div className="p-6 mt-12 text-center border rounded-xl bg-primary/5 ">
        <h4 className="text-lg font-semibold text-gray-900">
          You’re ready to go! 🎉
        </h4>
        <p className="mt-2 text-gray-600">
          Explore the next sections of the docs to dive deeper into concepts and
          advanced features.
        </p>
      </div>
    </div>
  );
}

export default DocumentationGettingStarted;
