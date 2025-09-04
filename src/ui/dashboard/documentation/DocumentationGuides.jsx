import { useMoveBack } from "../../../hooks/useMoveBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/pro-regular-svg-icons";

function DocumentationGuides() {
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
        Guides
      </h2>
      <p className="max-w-3xl mt-3 text-gray-600 md:text-lg">
        These hands-on guides will help you accomplish common tasks in Pixelmine
        Japan — from running your first campaign to integrating APIs. Follow
        along step by step and you’ll be up and running in no time.
      </p>

      {/* Guide 1 */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-800">
          1. Launch Your First Campaign
        </h3>
        <p className="mt-2 text-gray-600">
          Learn how to create, configure, and publish your first ad campaign.
          You’ll set budgets, allocate Ad Points, and track results in real
          time.
        </p>
        <div className="inline-block p-4 mt-3 border rounded-lg bg-gray-50">
          <p className="text-sm text-gray-500">
            ✅ Pro Tip: Start with a small budget to test targeting before
            scaling your campaigns.
          </p>
        </div>
      </div>

      {/* Guide 2 */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">
          2. Manage Your Ad Points
        </h3>
        <p className="mt-2 text-gray-600">
          Understand how to purchase, track, and allocate Ad Points effectively.
          Proper management ensures you maximize ROI across all campaigns.
        </p>
      </div>

      {/* Guide 3 */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">
          3. Track Campaign Performance
        </h3>
        <p className="mt-2 text-gray-600">
          Dive into Pixelmine’s analytics dashboard to interpret impressions,
          clicks, conversions, and engagement metrics. Learn how to make
          data-driven adjustments.
        </p>
      </div>

      {/* Guide 4 */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">
          4. Automate with the API
        </h3>
        <p className="mt-2 text-gray-600">
          For developers, integrate Pixelmine’s REST API to automate campaign
          creation, manage Ad Points, and fetch analytics data programmatically.
        </p>
      </div>

      {/* Guide 5 */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">
          5. Best Practices for Success
        </h3>
        <p className="mt-2 text-gray-600">
          Learn the do’s and don’ts of running effective campaigns, targeting
          the right audiences, and avoiding overspending on Ad Points.
        </p>
      </div>

      {/* Callout Box */}
      <div className="p-6 mt-12 text-center border rounded-xl bg-primary/5 ">
        <h4 className="text-lg font-semibold text-gray-900">
          Keep Exploring 🚀
        </h4>
        <p className="mt-2 text-gray-600">
          Check out the{" "}
          <a
            href="/dashboard/documentation/api-reference"
            className="font-medium text-primary hover:underline"
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
