import { useMoveBack } from "../../../hooks/useMoveBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/pro-regular-svg-icons";

function DocumentationConcept() {
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
        Core Concepts
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-300">
        Before diving deeper into Pixelmine Japan, it's important to understand
        the key concepts that power the platform. These fundamentals will help
        you maximize your campaigns and get the most out of your dashboard.
      </p>

      {/* Concept 1 */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          1. Ad Points
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Ad Points are the currency of Pixelmine Japan. They are used to run
          campaigns, purchase visibility, and boost your reach across the
          platform. Managing your points wisely ensures cost-effective results.
        </p>
      </div>

      {/* Concept 2 */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          2. Campaigns
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Campaigns are the structured way to deploy your ads. Each campaign can
          target audiences, define budgets, and allocate Ad Points for maximum
          performance.
        </p>
      </div>

      {/* Concept 3 */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          3. Analytics
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Pixelmine provides real-time analytics so you can track impressions,
          clicks, and conversions. Understanding these metrics is crucial for
          optimizing campaigns.
        </p>
      </div>

      {/* Concept 4 */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          4. API Integration
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Developers can connect directly to Pixelmine Japan's ecosystem through
          the REST API. This enables automation, custom integrations, and
          scalability for larger projects.
        </p>
      </div>

      {/* Concept 5 */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          5. Security & Verification
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          To protect users and advertisers, Pixelmine Japan requires email
          verification, secure logins, and encrypted transactions for all
          activities within the platform.
        </p>
      </div>

      {/* Callout Box */}
      <div className="p-8 mt-12 text-center border-2 shadow-lg border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 dark:border-emerald-800 rounded-2xl">
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
          Master the Basics ✨
        </h4>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-300">
          With these core concepts in mind, you'll be ready to dive into more
          advanced topics like campaign strategies and API integrations.
        </p>
      </div>
    </div>
  );
}

export default DocumentationConcept;
