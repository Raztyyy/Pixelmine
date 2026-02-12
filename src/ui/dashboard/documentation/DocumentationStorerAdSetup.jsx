import { useMoveBack } from "../../../hooks/useMoveBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faCopy,
  faCheck,
} from "@fortawesome/pro-regular-svg-icons";
import { useState } from "react";
import CodeBlock from "../../CodeBlock";
import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";
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

function DocumentationStorerAdSetup() {
  return (
    <>
      <SEOHelmet
        title="Storer Ad Setup Guide | Pixelmine Japan OPC"
        description="Everything you need to set up Storer Ads, with easy guides and help for common ad setup problems."
        url="https://www.pixelmine.org/dashboard/documentation/storer-ad-setup"
        image="/social-sharing.jpg"
      />
      <div className="p-8 bg-white border border-gray-200 shadow-xl md:p-12 rounded-3xl dark:bg-stone-800 dark:border-gray-700">
        {/* Back */}
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
          How to Add Ads to Your Storer
        </h2>
        <p className="mt-4 text-base leading-relaxed text-stone-950 dark:text-stone-50 md:text-lg ">
          A simple guide for storer runners.
        </p>

        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">What You Need</h3>
          <ul className="pl-5 mt-2 space-y-2 list-decimal text-stone-950 dark:text-stone-50">
            <li>Your storer running on your computer</li>
            <li>An ad image or video file</li>
            <li>A purchased ad key from Pixelmine</li>
          </ul>
        </section>

        {/* Step 1 */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">
            STEP 1: Buy an Ad Key
          </h3>
          <ul className="pl-5 mt-2 space-y-2 list-decimal text-stone-950 dark:text-stone-50">
            <li>Open the Pixelmine app</li>
            <li>
              Go to <strong>Ads</strong> &gt; <strong>Purchase Ad</strong>{" "}
            </li>
            <li>Choose how many days you want the ad to run (1-180 days)</li>
            <li>
              Choose your sync scope:
              <ul className="pl-5 list-disc">
                <li>
                  <strong>Global</strong> - Your ad shows on all storers
                  worldwide
                </li>
                <li>
                  <strong>Country</strong> - Your ad shows only on storers in
                  your country
                </li>
                <li>
                  <strong>City</strong> - Your ad shows only on storers in your
                  city
                </li>
                <li>
                  <strong>Area</strong> - Your ad stays only on your storer (no
                  sharing)
                </li>
              </ul>
            </li>
            <li>
              Click <strong>Purchase</strong>
            </li>
            <li>
              Download the <strong>`ad.key`</strong> file
            </li>
          </ul>
        </section>

        {/* Step 2 */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">
            STEP 2: Find Your Ads Folder
          </h3>
          <p className="mt-3 text-stone-950 dark:text-stone-50">
            Your storer has an <strong>`ads`</strong> folder. Find it at:
          </p>
          <CodeBlock
            code={`C:\\Users\\YourName\\Storer\\ads\\`}
            language="Windows"
          />
          <CodeBlock code={`/Users/YourName/Storer/ads/`} language="Mac" />
          <CodeBlock code={`/home/yourname/storer/ads/`} language="Linux" />
        </section>
        {/* Step 3 */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">
            STEP 3: Create a Folder for Your Ad
          </h3>
          <p className="mt-3 text-stone-950 dark:text-stone-50">
            Inside the <strong>`ads`</strong> folder, create a new folder with
            any name:
          </p>

          <CodeBlock
            code={`ads/
└── my-first-ad/      <-- Create this folder`}
          />

          <p className="mt-3 text-stone-950 dark:text-stone-50">
            You can name it anything you want (no spaces recommended).
          </p>
        </section>
        {/* Step 4 */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">
            STEP 4: Add Your Files
          </h3>

          <p className="mt-3 text-stone-950 dark:text-stone-50">
            Put these files inside your new folder:
          </p>

          <Table
            headers={["File", "Required", "Description"]}
            rows={[
              ["`ad.key`", "Yes", "The key file you downloaded"],
              ["Your image/video", "Yes", "The ad you want to display"],
              ["`description.txt`", "No", "Short text about your ad"],
            ]}
          />

          <h3 className="mt-8 text-xl font-bold dark:text-white">
            Supported formats
          </h3>
          <ul className="pl-5 mt-2 space-y-2 list-disc text-stone-950 dark:text-stone-50">
            <li>Images: `.jpg`, `.png`, `.gif`, `.webp`</li>
            <li>Videos: `.mp4`, `.mov`, `.webm`</li>
          </ul>

          <p className="mt-3 text-stone-950 dark:text-stone-50">
            Your folder should look like this:
          </p>

          <CodeBlock
            code={`ads/
└── my-first-ad/
    ├── ad.key
    ├── my-ad-image.png
    └── description.txt`}
          />
        </section>
        {/* Step 5 */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">STEP 5: Done!</h3>
          <p className="mt-3 text-stone-950 dark:text-stone-50">
            Your storer will automatically detect the new ad within a few
            minutes.
          </p>
          <p className="mt-3 text-stone-950 dark:text-stone-50">
            You can add multiple ads by creating more folders:
          </p>

          <CodeBlock
            code={`ads/
├── summer-sale/
│   ├── ad.key
│   └── banner.jpg
│
├── new-product/
│   ├── ad.key
│   └── promo.png
│
└── holiday-special/
    ├── ad.key
    └── video.mp4`}
          />
        </section>

        {/* Sync Scope Explained */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">
            Sync Scope Explained
          </h3>
          <Table
            headers={["You Choose", "What Happens"]}
            rows={[
              ["Global", "All storers worldwide will show your ad"],
              ["Country", "Only storers in your country show your ad"],
              ["City", "Only storers in your city show your ad"],
              ["Area", "Only YOUR storer shows the ad (private)"],
            ]}
          />
        </section>

        {/* Common Problems */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">Common Problems</h3>
          <ul className="pl-5 mt-2 space-y-2 font-semibold list-decimal text-stone-950 dark:text-stone-50">
            <li>
              Ad not showing?
              <ul className="pl-5 mt-2 space-y-2 font-normal list-disc text-stone-950 dark:text-stone-50">
                <li>
                  Make sure <strong>`ad.key`</strong> file is in the folder
                </li>
                <li>Make sure you have an image or video file</li>
                <li>Wait a few minutes for the storer to scan</li>
              </ul>
            </li>
            <li>
              "Invalid signature" error?
              <ul className="pl-5 mt-2 space-y-2 font-normal list-disc text-stone-950 dark:text-stone-50">
                <li>
                  Download a fresh <strong>`ad.key`</strong> from the app
                </li>
                <li>
                  Do not edit the <strong>`ad.key`</strong> file
                </li>
              </ul>
            </li>
            <li>
              "Expired" error?
              <ul className="pl-5 mt-2 space-y-2 font-normal list-disc text-stone-950 dark:text-stone-50">
                <li>Your ad time has ended</li>
                <li>Purchase a new ad key</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Need Help? */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">Need Help?</h3>
          <p className="mt-3 text-stone-950 dark:text-stone-50">
            Contact Pixelmine support or check the community forum.
          </p>
        </section>
      </div>
    </>
  );
}

export default DocumentationStorerAdSetup;
