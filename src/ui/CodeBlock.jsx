import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faCheck } from "@fortawesome/pro-regular-svg-icons";

function CodeBlock({ code, language = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative mt-4">
      {/* Language label */}
      {language && (
        <span className="absolute top-2 left-2 px-2 py-0.5 text-xs font-medium uppercase rounded bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
          {language}
        </span>
      )}

      <SyntaxHighlighter
        language={language}
        style={oneLight}
        customStyle={{
          borderRadius: "12px",
          padding: `${language ? "2.5rem" : "1.5rem"} 1rem 1rem 1rem`, // extra top padding for the label
          fontSize: "0.875rem",
          overflowX: "auto",
        }}
      >
        {code}
      </SyntaxHighlighter>

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="absolute flex items-center justify-center w-8 h-8 transition-all bg-white border border-gray-200 rounded-lg shadow-md top-3 right-3 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-600 dark:bg-stone-800 dark:border-gray-700 dark:hover:bg-emerald-900/20 dark:hover:border-emerald-600 dark:hover:text-emerald-400"
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

export default CodeBlock;
