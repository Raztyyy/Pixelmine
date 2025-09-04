import { useMoveBack } from "../../../hooks/useMoveBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/pro-regular-svg-icons";

function DocumentationConcept() {
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
        Core Concepts
      </h2>
      <p className="mt-3 text-gray-600 md:text-lg">
        Before diving deeper into Pixelmine Japan, it’s important to understand
        the key concepts that power the platform. These fundamentals will help
        you maximize your campaigns and get the most out of your dashboard.
      </p>

      {/* Concept 1 */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-800">1. Ad Points</h3>
        <p className="mt-2 text-gray-600">
          Ad Points are the currency of Pixelmine Japan. They are used to run
          campaigns, purchase visibility, and boost your reach across the
          platform. Managing your points wisely ensures cost-effective results.
        </p>
      </div>

      {/* Concept 2 */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">2. Campaigns</h3>
        <p className="mt-2 text-gray-600">
          Campaigns are the structured way to deploy your ads. Each campaign can
          target audiences, define budgets, and allocate Ad Points for maximum
          performance.
        </p>
      </div>

      {/* Concept 3 */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">3. Analytics</h3>
        <p className="mt-2 text-gray-600">
          Pixelmine provides real-time analytics so you can track impressions,
          clicks, and conversions. Understanding these metrics is crucial for
          optimizing campaigns.
        </p>
      </div>

      {/* Concept 4 */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">
          4. API Integration
        </h3>
        <p className="mt-2 text-gray-600">
          Developers can connect directly to Pixelmine Japan’s ecosystem through
          the REST API. This enables automation, custom integrations, and
          scalability for larger projects.
        </p>
      </div>

      {/* Concept 5 */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">
          5. Security & Verification
        </h3>
        <p className="mt-2 text-gray-600">
          To protect users and advertisers, Pixelmine Japan requires email
          verification, secure logins, and encrypted transactions for all
          activities within the platform.
        </p>
      </div>

      {/* Callout Box */}
      <div className="p-6 mt-12 text-center border rounded-xl bg-primary/5 ">
        <h4 className="text-lg font-semibold text-gray-900">
          Master the Basics ✨
        </h4>
        <p className="mt-2 text-gray-600">
          With these core concepts in mind, you’ll be ready to dive into more
          advanced topics like campaign strategies and API integrations.
        </p>
      </div>
    </div>
  );
}

export default DocumentationConcept;
