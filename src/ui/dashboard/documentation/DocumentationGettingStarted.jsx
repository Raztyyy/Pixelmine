import { useMoveBack } from "../../../hooks/useMoveBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/pro-regular-svg-icons";

function DocumentationGettingStarted() {
  return (
    <div className="p-8 bg-white border border-gray-200 shadow-xl md:p-12 rounded-3xl dark:bg-stone-800 dark:border-gray-700">
      <button
        className="flex items-center justify-center text-base font-medium text-gray-600 transition-all duration-300 ease-in-out group hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
        onClick={useMoveBack()}
      >
        <span className="flex items-center justify-center mr-2">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="transition-all duration-300 ease-in-out size-5 group-hover:-translate-x-1"
          />
        </span>
        Go Back
      </button>

      {/* Page Title */}
      <h2 className="mt-10 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
        Getting Started
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-300">
        Welcome to Pixelmine! This guide will walk you through the first steps
        to set up your account, explore the dashboard, and start using our
        features effectively.
      </p>

      {/* Step 1 */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          1. Create an Account
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Sign up using your email address. Once registered, you'll receive a
          verification link in your inbox.
        </p>
        <div className="inline-block p-5 mt-4 border-l-4 shadow-md border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 rounded-r-xl">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            ✅ Tip: Check your spam folder if you don't see the verification
            email within a few minutes.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          2. Explore the Dashboard
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          After logging in, you'll land on the dashboard overview. Here you can
          monitor activity, view analytics, and navigate through all features.
        </p>
      </div>

      {/* Step 3 */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          3. Buy Ad Points
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Ad Points are the core of Pixelmine's system. You can purchase them
          directly in the dashboard and use them to boost campaigns.
        </p>
      </div>

      {/* Step 4 */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          4. Connect via API
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Developers can integrate Pixelmine with their apps using our REST API.
          Head over to the{" "}
          <a
            href="/dashboard/documentation/api-reference"
            className="font-semibold transition-colors text-emerald-600 hover:text-emerald-700 hover:underline dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            API Reference
          </a>{" "}
          to learn more.
        </p>
      </div>

      {/* Callout Box */}
      <div className="p-8 mt-12 text-center border-2 shadow-lg border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 dark:border-emerald-800 rounded-2xl">
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
          You're ready to go! 🎉
        </h4>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-300">
          Explore the next sections of the docs to dive deeper into concepts and
          advanced features.
        </p>
      </div>
    </div>
  );
}

export default DocumentationGettingStarted;
