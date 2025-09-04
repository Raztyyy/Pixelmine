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
    <div className="p-10 bg-white border shadow-sm rounded-xl">
      {/* Go Back Button */}
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
        Support Center
      </h2>
      <p className="mt-3 text-gray-600 md:text-lg">
        Need help? Pixelmine Japan provides multiple support channels to assist
        you—whether it’s technical issues, billing questions, or campaign
        optimization.
      </p>

      {/* Support Options */}
      <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* Documentation */}
        <div className="p-6 transition border rounded-xl hover:shadow-md">
          <FontAwesomeIcon
            icon={faBookOpen}
            className="mb-3 text-primary dark:text-green-400 size-7"
          />
          <h3 className="text-lg font-semibold text-gray-800">Documentation</h3>
          <p className="mt-2 text-sm text-gray-600">
            Browse guides, tutorials, and API references to quickly find answers
            and learn best practices.
          </p>
        </div>

        {/* Contact Support */}
        <div className="p-6 transition border rounded-xl hover:shadow-md">
          <FontAwesomeIcon
            icon={faHeadset}
            className="mb-3 text-primary dark:text-green-400 size-7"
          />
          <h3 className="text-lg font-semibold text-gray-800">
            Contact Support
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Submit a support ticket through the dashboard or email us directly
            for account and campaign issues.
          </p>
        </div>

        {/* Community Forum */}
        <div className="p-6 transition border rounded-xl hover:shadow-md">
          <FontAwesomeIcon
            icon={faUsers}
            className="mb-3 text-primary dark:text-green-400 size-7"
          />
          <h3 className="text-lg font-semibold text-gray-800">
            Community Forum
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Connect with other advertisers, share strategies, and learn from
            real-world campaign experiences.
          </p>
        </div>

        {/* Live Chat */}
        <div className="p-6 transition border rounded-xl hover:shadow-md">
          <FontAwesomeIcon
            icon={faComments}
            className="mb-3 text-primary dark:text-green-400 size-7"
          />
          <h3 className="text-lg font-semibold text-gray-800">Live Chat</h3>
          <p className="mt-2 text-sm text-gray-600">
            Get instant answers from our support team during business hours with
            real-time live chat assistance.
          </p>
        </div>

        {/* Email Support */}
        <div className="p-6 transition border rounded-xl hover:shadow-md">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="mb-3 text-primary dark:text-green-400 size-7"
          />
          <h3 className="text-lg font-semibold text-gray-800">Email Support</h3>
          <p className="mt-2 text-sm text-gray-600">
            Send us an email at{" "}
            <span className="font-medium text-primary dark:text-green-400">
              support@pixelmine.jp
            </span>{" "}
            and we’ll get back to you within 24 hours.
          </p>
        </div>
      </div>

      {/* Callout Box */}
      <div className="p-6 mt-12 text-center border rounded-xl bg-primary/5">
        <h4 className="text-lg font-semibold text-gray-900">
          We’re here to help 🤝
        </h4>
        <p className="mt-2 text-gray-600">
          Whether you’re stuck with setup, troubleshooting, or strategy—we’ll
          make sure you get the answers you need.
        </p>
      </div>
    </div>
  );
}

export default DocumentationSupport;
