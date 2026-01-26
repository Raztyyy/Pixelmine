import { useMoveBack } from "../../../hooks/useMoveBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faDownload,
  faKey,
} from "@fortawesome/pro-regular-svg-icons";
import { useEffect, useState } from "react";

function DocumentationStorerDownload() {
  const moveBack = useMoveBack();
  const [detectedOS, setDetectedOS] = useState(null);

  // Download options with separate variants for macOS and Linux
  const downloadOptions = [
    {
      name: "Windows",
      logo: "windows-logo.png",
      description: "64-bit Intel/AMD",
      downloadUrl:
        "https://app.pixelmine.org:8005/update/download/windows/amd64",
    },
    {
      name: "macOS",
      logo: "apple-logo.svg",
      variants: [
        {
          description: "Intel",
          downloadUrl:
            "https://app.pixelmine.org:8005/update/download/darwin/amd64",
          arch: "intel",
        },
        {
          description: "Apple Silicon",
          downloadUrl:
            "https://app.pixelmine.org:8005/update/download/darwin/arm64",
          arch: "arm",
        },
      ],
    },
    {
      name: "Linux",
      logo: "linux-logo.png",
      variants: [
        {
          description: "Intel/AMD 64-bit (amd64)",
          downloadUrl:
            "https://app.pixelmine.org:8005/update/download/linux/amd64",
          arch: "amd64",
        },
        {
          description: "ARM64",
          downloadUrl:
            "https://app.pixelmine.org:8005/update/download/linux/arm64",
          arch: "arm64",
        },
      ],
    },
  ];

  // Detect OS and architecture on client
  useEffect(() => {
    const platform = window.navigator.platform.toLowerCase();
    const userAgent = window.navigator.userAgent.toLowerCase();

    if (platform.includes("mac") || userAgent.includes("macintosh")) {
      if (
        userAgent.includes("arm") ||
        userAgent.includes("m1") ||
        userAgent.includes("m2")
      ) {
        setDetectedOS({ name: "macOS", arch: "arm" });
      } else {
        setDetectedOS({ name: "macOS", arch: "intel" });
      }
    } else if (platform.includes("win") || userAgent.includes("win32")) {
      setDetectedOS({ name: "Windows" });
    } else if (platform.includes("linux")) {
      if (userAgent.includes("aarch64") || userAgent.includes("arm64")) {
        setDetectedOS({ name: "Linux", arch: "arm64" });
      } else {
        setDetectedOS({ name: "Linux", arch: "amd64" });
      }
    } else {
      setDetectedOS({ name: "Unknown" });
    }
  }, []);

  // Only show detected OS on desktop
  const osCardsToShow = detectedOS
    ? [detectedOS.name]
    : ["Windows", "macOS", "Linux"];

  return (
    <div className="p-8 bg-white border border-gray-200 shadow-xl md:p-12 rounded-3xl dark:bg-stone-800 dark:border-gray-700">
      {/* Go Back Button */}
      <button
        className="flex items-center justify-center text-base font-medium text-gray-600 transition-all duration-300 ease-in-out group hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
        onClick={moveBack}
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
        Storer Download Guide
      </h2>
      <p className="max-w-3xl mt-4 text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-300">
        The Storer Engine is the software that allows your device to participate
        in the Pixelmine network. Follow this guide to download, install, and
        activate your Storer using your license key.
      </p>

      {/* Section 1 */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          1. What is the Storer Engine?
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          The Storer Engine is a lightweight application that enables your
          device to contribute compute resources and stay connected to the
          Pixelmine ecosystem. Once installed and activated, it runs tasks,
          maintains uptime, and earns Activity Points and PXL Points.
        </p>
        <div className="inline-block p-5 mt-4 border-l-4 shadow-md border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 rounded-r-xl">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            💡 Tip: The Storer runs in the background and is optimized for low
            usage. Keep your device connected to maximize uptime rewards.
          </p>
        </div>
      </div>

      {/* Section 2 - Download Section (desktop only) */}
      {detectedOS && (
        <div className="hidden mt-10 md:block">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            2. Download the Storer
          </h3>
          <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            Detected OS: {detectedOS.name}
            {detectedOS.arch ? ` (${detectedOS.arch})` : ""}
          </p>

          <div className="grid gap-4 mt-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {osCardsToShow.map((osName) => {
              const os = downloadOptions.find((o) => o.name === osName);

              // Determine which variants to show
              const variants = os.variants
                ? os.variants.filter((v) => v.arch === detectedOS?.arch)
                : [os];

              return (
                <div
                  key={osName}
                  className="flex flex-col items-center justify-center p-6 transition-all duration-300 bg-white border border-gray-200 rounded-xl dark:bg-stone-800 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-lg"
                >
                  <div className="flex items-center justify-center w-16 h-16 mb-4">
                    <img
                      src={`/os-logos/${os.logo}`}
                      alt={`${osName} logo`}
                      className="w-full h-full"
                    />
                  </div>

                  <h4 className="mb-2 font-bold text-center text-gray-900 dark:text-white">
                    {osName}
                  </h4>

                  {variants.map((variant, idx) => (
                    <div key={idx} className="mb-3">
                      <a
                        href={variant.downloadUrl}
                        className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 hover:shadow-md"
                      >
                        <FontAwesomeIcon
                          icon={faDownload}
                          className="text-sm"
                        />
                        Download for {osName} ({variant.description})
                      </a>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Section 3 */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          3. Import Your Storer License Key
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          After installation, the Storer Engine will ask for your{" "}
          <strong>license key</strong>.
        </p>

        <div className="inline-block p-5 mt-4 border-l-4 shadow-md border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 rounded-r-xl">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon
              icon={faKey}
              className="size-5 text-emerald-600 dark:text-emerald-400"
            />
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Your license key is unique — never share it with anyone.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className="mt-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          4. Start Running the Storer
        </h3>
        <p className="mt-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
          Once your license key is verified, the Storer Engine will begin
          running. You can monitor uptime, activity points, and performance
          inside the Pixelmine Dashboard.
        </p>
      </div>
    </div>
  );
}

export default DocumentationStorerDownload;
