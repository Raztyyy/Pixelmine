import { useMoveBack } from "../../../hooks/useMoveBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/pro-regular-svg-icons";
import { faCopy, faCheck } from "@fortawesome/pro-regular-svg-icons";
import { useState } from "react";

function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative mt-4">
      <pre className="p-5 overflow-x-auto font-mono text-sm leading-relaxed text-gray-800 border border-gray-200 shadow-md bg-gray-50 dark:bg-stone-900 dark:text-gray-200 dark:border-gray-700 rounded-xl">
        {code}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute flex items-center justify-center w-8 h-8 transition-all duration-200 bg-white border border-gray-200 rounded-lg shadow-md top-3 right-3 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600 dark:bg-stone-800 dark:border-gray-700 dark:hover:bg-emerald-900/20 dark:hover:border-emerald-600 dark:hover:text-emerald-400"
        title="Copy code"
      >
        <FontAwesomeIcon
          icon={copied ? faCheck : faCopy}
          className={
            copied
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-gray-600 dark:text-gray-400"
          }
        />
      </button>
    </div>
  );
}

function DocumentationAPIReference() {
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
        API Reference
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-300">
        The Pixelmine Japan API allows developers to integrate powerful
        advertising and analytics features into their own applications.
      </p>

      {/* Section 1: Authentication */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          1. Authentication
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          All requests require a valid JSON Web Token (JWT).
        </p>
        <CodeBlock
          code={`GET /api/profile
Headers:
  Authorization: Bearer <your-token>`}
        />
      </div>

      {/* Section 2: Ad Points */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          2. Ad Points Endpoints
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Manage your Ad Points programmatically with these endpoints:
        </p>
        <CodeBlock
          code={`GET /api/adpoints
POST /api/adpoints/buy
GET /api/adpoints/history`}
        />
      </div>

      {/* Section 3: Analytics */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          3. Analytics
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Access real-time performance metrics for your campaigns.
        </p>
        <CodeBlock
          code={`GET /api/analytics/campaigns?from=2025-01-01&to=2025-01-31`}
        />
      </div>

      {/* Section 4: Error Handling */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          4. Error Handling
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Errors return JSON objects with helpful messages.
        </p>
        <CodeBlock
          code={`{
  "error": true,
  "message": "Invalid authentication token"
}`}
        />
      </div>
    </div>
  );
}

export default DocumentationAPIReference;
