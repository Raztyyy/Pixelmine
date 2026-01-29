import { useMoveBack } from "../../../hooks/useMoveBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/pro-regular-svg-icons";
import CodeBlock from "../../CodeBlock";
import SEOHelmet from "../../SEOHelmet";

/* Reusable Table styled like EarnPointsTable */
function Table({ headers, rows, headerColor = "emerald" }) {
  return (
    <div className="mt-4 overflow-x-auto border border-gray-200 rounded-xl dark:border-gray-700">
      <table className="min-w-full text-sm border-collapse table-auto">
        <thead className={`bg-${headerColor}-600 dark:bg-${headerColor}-800`}>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                className="px-6 py-3 font-semibold tracking-wider text-left text-white uppercase"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-stone-900 dark:divide-stone-700">
          {rows.map((row, i) => (
            <tr
              key={i}
              className="transition-colors hover:bg-emerald-50 dark:hover:bg-stone-800"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-6 py-4 ${
                    j === 0
                      ? "font-medium text-gray-900 dark:text-stone-50"
                      : "text-gray-700 dark:text-stone-300"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DocumentationStorerInstallation() {
  return (
    <>
      <SEOHelmet
        title="Storer Installation Guide | Pixelmine Japan OPC"
        description="Detailed instructions for installing Storer, including system requirements and troubleshooting common issues."
        url="https://www.pixelmine.org/dashboard/documentation/storer-installation"
        image="/social-sharing.jpg"
      />
      <div className="p-8 bg-white border border-gray-200 shadow-xl md:p-12 rounded-3xl dark:bg-stone-800 dark:border-gray-700">
        {/* Back Button */}
        <button
          onClick={useMoveBack()}
          className="flex items-center text-base font-medium text-gray-600 transition group hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="mr-2 transition group-hover:-translate-x-1"
          />
          Go Back
        </button>

        {/* Header */}
        <h2 className="mt-10 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
          Storer Installation Guide
        </h2>

        {/* Download Section */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">Download</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Download the latest version for your platform:
          </p>

          <Table
            headers={["Platform", "Download"]}
            rows={[
              [
                "Mac M1/M2 (Apple Silicon)",
                <a
                  href="https://app.pixelmine.org:8005/update/download/darwin/arm64"
                  className="underline text-emerald-600 dark:text-emerald-400"
                >
                  Download
                </a>,
              ],
              [
                "Mac Intel",
                <a
                  href="https://app.pixelmine.org:8005/update/download/darwin/amd64"
                  className="underline text-emerald-600 dark:text-emerald-400"
                >
                  Download
                </a>,
              ],
              [
                "Linux x64",
                <a
                  href="https://app.pixelmine.org:8005/update/download/linux/amd64"
                  className="underline text-emerald-600 dark:text-emerald-400"
                >
                  Download
                </a>,
              ],
              [
                "Linux ARM64",
                <a
                  href="https://app.pixelmine.org:8005/update/download/linux/arm64"
                  className="underline text-emerald-600 dark:text-emerald-400"
                >
                  Download
                </a>,
              ],
              [
                "Windows",
                <a
                  href="https://app.pixelmine.org:8005/update/download/windows/amd64"
                  className="underline text-emerald-600 dark:text-emerald-400"
                >
                  Download
                </a>,
              ],
            ]}
          />
        </section>

        {/* Installation Section */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">Installation</h3>

          {/* Mac */}
          <h4 className="mt-6 font-semibold dark:text-white">Mac</h4>
          <ol className="mt-3 space-y-2 text-gray-600 list-decimal list-inside dark:text-gray-400">
            <li>Download the file</li>
            <li>
              Open Terminal and navigate to the download folder:
              <CodeBlock code={`cd ~/Downloads`} language="bash" />
            </li>
            <li>
              Make it executable:
              <CodeBlock code={`chmod +x storer`} language="bash" />
            </li>
            <li>
              Remove quarantine (if needed):
              <CodeBlock
                code={`xattr -d com.apple.quarantine storer`}
                language="bash"
              />
            </li>
            <li>
              Run:
              <CodeBlock code={`./storer`} language="bash" />
            </li>
          </ol>

          {/* Linux */}
          <h4 className="mt-6 font-semibold dark:text-white">Linux</h4>
          <ol className="mt-3 space-y-2 text-gray-600 list-decimal list-inside dark:text-gray-400">
            <li>Download the file</li>
            <li>
              Open Terminal and navigate to the download folder:
              <CodeBlock code={`cd ~/Downloads`} language="bash" />
            </li>
            <li>
              Make it executable:
              <CodeBlock code={`chmod +x storer`} language="bash" />
            </li>
            <li>
              Run:
              <CodeBlock code={`./storer`} language="bash" />
            </li>
          </ol>

          {/* Windows */}
          <h4 className="mt-6 font-semibold dark:text-white">Windows</h4>
          <ol className="mt-3 space-y-2 text-gray-600 list-decimal list-inside dark:text-gray-400">
            <li>Download the file (storer.exe)</li>
            <li>
              Double click to run, or open Command Prompt:
              <CodeBlock code={`cd Downloads\nstorer.exe`} language="cmd" />
            </li>
          </ol>
        </section>

        {/* Configuration */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">Configuration</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Before running, make sure you have a{" "}
            <span className="font-semibold dark:text-white">`config.js`</span>{" "}
            file in the same directory as the executable.
          </p>
        </section>

        {/* Auto Updates */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">Auto Updates</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Storer automatically checks for updates every 2 minutes and will
            restart with the new version when available.
          </p>
        </section>

        {/* Troubleshooting */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">Troubleshooting</h3>

          {/* Mac: App is damaged */}
          <h4 className="mt-6 font-semibold dark:text-white">
            Mac: "App is damaged" or "Cannot be opened"
          </h4>
          <p className="mt-3 dark:text-white">Run:</p>

          <CodeBlock
            code={`xattr -d com.apple.quarantine storer`}
            language="bash"
          />

          {/* Mac: Permission denied */}
          <h4 className="mt-6 font-semibold dark:text-white">
            Mac: "Permission denied"
          </h4>
          <p className="mt-3 dark:text-white">Run:</p>
          <CodeBlock code={`chmod +x storer`} language="bash" />

          {/* Linux: Permission denied */}
          <h4 className="mt-6 font-semibold dark:text-white">
            Linux: "Permission denied"
          </h4>
          <p className="mt-3 dark:text-white">Run:</p>
          <CodeBlock code={`chmod +x storer`} language="bash" />

          {/* Windows: Windows protected your PC */}
          <h4 className="mt-6 font-semibold dark:text-white">
            Windows: "Windows protected your PC"
          </h4>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Click "More info" then "Run anyway"
          </p>
        </section>
      </div>
    </>
  );
}

export default DocumentationStorerInstallation;
