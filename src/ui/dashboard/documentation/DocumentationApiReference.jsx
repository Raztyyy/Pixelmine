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
    <div className="relative mt-3">
      <pre className="p-4 overflow-x-auto text-sm text-gray-800 bg-gray-100 rounded-lg">
        {code}
      </pre>
      <button
        onClick={handleCopy}
        className="absolute p-2 text-gray-500 transition-colors top-2 right-2 hover:text-primary"
        title="Copy code"
      >
        <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
      </button>
    </div>
  );
}

function DocumentationAPIReference() {
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
        API Reference
      </h2>
      <p className="mt-3 text-gray-600 md:text-lg">
        The Pixelmine Japan API allows developers to integrate powerful
        advertising and analytics features into their own applications.
      </p>

      {/* Section 1: Authentication */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-800">
          1. Authentication
        </h3>
        <p className="mt-2 text-gray-600">
          All requests require a valid JSON Web Token (JWT).
        </p>
        <CodeBlock
          code={`GET /api/profile
Headers:
  Authorization: Bearer <your-token>`}
        />
      </div>

      {/* Section 2: Ad Points */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">
          2. Ad Points Endpoints
        </h3>
        <p className="mt-2 text-gray-600">
          Manage your Ad Points programmatically with these endpoints:
        </p>
        <CodeBlock
          code={`GET /api/adpoints
POST /api/adpoints/buy
GET /api/adpoints/history`}
        />
      </div>

      {/* Section 3: Analytics */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">3. Analytics</h3>
        <p className="mt-2 text-gray-600">
          Access real-time performance metrics for your campaigns.
        </p>
        <CodeBlock
          code={`GET /api/analytics/campaigns?from=2025-01-01&to=2025-01-31`}
        />
      </div>

      {/* Section 4: Error Handling */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800">
          4. Error Handling
        </h3>
        <p className="mt-2 text-gray-600">
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
