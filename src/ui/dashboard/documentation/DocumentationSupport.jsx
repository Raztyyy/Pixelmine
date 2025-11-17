import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faBookOpen,
  faUsers,
  faHeadset,
  faComments,
} from "@fortawesome/pro-regular-svg-icons";
import { useMoveBack } from "../../../hooks/useMoveBack";
import { faAngleLeft } from "@fortawesome/pro-solid-svg-icons";

function DocumentationSupport() {
  return (
    <div className="p-8 bg-white border border-gray-200 shadow-xl md:p-12 rounded-3xl dark:bg-stone-800 dark:border-gray-700">
      {/* Go Back Button */}
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
        Support Center
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-300">
        Need help? Pixelmine Japan provides multiple support channels to assist
        you—whether it's technical issues, billing questions, or campaign
        optimization.
      </p>

      {/* Support Options */}
      <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {/* Documentation */}
        <div className="flex flex-col p-6 transition-all duration-300 border border-gray-200 shadow-lg md:p-8 rounded-2xl hover:shadow-xl hover:scale-105 hover:border-emerald-300 dark:bg-stone-800 dark:border-gray-700 dark:hover:border-emerald-600 group">
          <div className="flex items-center justify-center mb-4 transition-all duration-300 shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 group-hover:shadow-xl group-hover:scale-110">
            <FontAwesomeIcon icon={faBookOpen} className="text-white size-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Documentation
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Browse guides, tutorials, and API references to quickly find answers
            and learn best practices.
          </p>
        </div>

        {/* Contact Support */}
        <div className="flex flex-col p-6 transition-all duration-300 border border-gray-200 shadow-lg md:p-8 rounded-2xl hover:shadow-xl hover:scale-105 hover:border-emerald-300 dark:bg-stone-800 dark:border-gray-700 dark:hover:border-emerald-600 group">
          <div className="flex items-center justify-center mb-4 transition-all duration-300 shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 group-hover:shadow-xl group-hover:scale-110">
            <FontAwesomeIcon icon={faHeadset} className="text-white size-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Contact Support
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Submit a support ticket through the dashboard or email us directly
            for account and campaign issues.
          </p>
        </div>

        {/* Community Forum */}
        <div className="flex flex-col p-6 transition-all duration-300 border border-gray-200 shadow-lg md:p-8 rounded-2xl hover:shadow-xl hover:scale-105 hover:border-emerald-300 dark:bg-stone-800 dark:border-gray-700 dark:hover:border-emerald-600 group">
          <div className="flex items-center justify-center mb-4 transition-all duration-300 shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 group-hover:shadow-xl group-hover:scale-110">
            <FontAwesomeIcon icon={faUsers} className="text-white size-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Community Forum
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Connect with other advertisers, share strategies, and learn from
            real-world campaign experiences.
          </p>
        </div>

        {/* Live Chat */}
        <div className="flex flex-col p-6 transition-all duration-300 border border-gray-200 shadow-lg md:p-8 rounded-2xl hover:shadow-xl hover:scale-105 hover:border-emerald-300 dark:bg-stone-800 dark:border-gray-700 dark:hover:border-emerald-600 group">
          <div className="flex items-center justify-center mb-4 transition-all duration-300 shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 group-hover:shadow-xl group-hover:scale-110">
            <FontAwesomeIcon icon={faComments} className="text-white size-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Live Chat
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Get instant answers from our support team during business hours with
            real-time live chat assistance.
          </p>
        </div>

        {/* Email Support */}
        <div className="flex flex-col p-6 transition-all duration-300 border border-gray-200 shadow-lg md:p-8 rounded-2xl hover:shadow-xl hover:scale-105 hover:border-emerald-300 dark:bg-stone-800 dark:border-gray-700 dark:hover:border-emerald-600 group">
          <div className="flex items-center justify-center mb-4 transition-all duration-300 shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600 group-hover:shadow-xl group-hover:scale-110">
            <FontAwesomeIcon icon={faEnvelope} className="text-white size-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Email Support
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Send us an email at{" "}
            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
              support@pixelmine.jp
            </span>{" "}
            and we'll get back to you within 24 hours.
          </p>
        </div>
      </div>

      {/* Callout Box */}
      <div className="p-8 mt-12 text-center border-2 shadow-lg border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 dark:border-emerald-800 rounded-2xl">
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
          We're here to help 🤝
        </h4>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-300">
          Whether you're stuck with setup, troubleshooting, or strategy—we'll
          make sure you get the answers you need.
        </p>
      </div>
    </div>
  );
}

export default DocumentationSupport;
