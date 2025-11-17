import { useMoveBack } from "../../../hooks/useMoveBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/pro-regular-svg-icons";

function DocumentationGuides() {
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
        Guides
      </h2>
      <p className="max-w-3xl mt-4 text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-300">
        These hands-on guides will help you accomplish common tasks in Pixelmine
        Japan — from running your first campaign to integrating APIs. Follow
        along step by step and you'll be up and running in no time.
      </p>

      {/* Guide 1 */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          1. Launch Your First Campaign
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Learn how to create, configure, and publish your first ad campaign.
          You'll set budgets, allocate Ad Points, and track results in real
          time.
        </p>
        <div className="inline-block p-5 mt-4 border-l-4 shadow-md border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 rounded-r-xl">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            ✅ Pro Tip: Start with a small budget to test targeting before
            scaling your campaigns.
          </p>
        </div>
      </div>

      {/* Guide 2 */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          2. Manage Your Ad Points
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Understand how to purchase, track, and allocate Ad Points effectively.
          Proper management ensures you maximize ROI across all campaigns.
        </p>
      </div>

      {/* Guide 3 */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          3. Track Campaign Performance
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Dive into Pixelmine's analytics dashboard to interpret impressions,
          clicks, conversions, and engagement metrics. Learn how to make
          data-driven adjustments.
        </p>
      </div>

      {/* Guide 4 */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          4. Automate with the API
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          For developers, integrate Pixelmine's REST API to automate campaign
          creation, manage Ad Points, and fetch analytics data programmatically.
        </p>
      </div>

      {/* Guide 5 */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          5. Best Practices for Success
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Learn the do's and don'ts of running effective campaigns, targeting
          the right audiences, and avoiding overspending on Ad Points.
        </p>
      </div>

      {/* Callout Box */}
      <div className="p-8 mt-12 text-center border-2 shadow-lg border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 dark:border-emerald-800 rounded-2xl">
        <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
          Keep Exploring 🚀
        </h4>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-300">
          Check out the{" "}
          <a
            href="/dashboard/documentation/api-reference"
            className="font-semibold transition-colors text-emerald-600 hover:text-emerald-700 hover:underline dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            API Reference
          </a>{" "}
          or advanced guides for deeper integrations and strategies.
        </p>
      </div>
    </div>
  );
}

export default DocumentationGuides;
