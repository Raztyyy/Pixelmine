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
          Storer Ad Setup Guide
        </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-300">
          This guide explains how to set up ads on your storer node.
        </p>
        {/* Step 1 */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">
            STEP 1: Purchase an Ad Key
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Call the API to purchase an ad key:
          </p>

          <CodeBlock
            code={`curl -X POST https://app.pixelmine.org:8005/purchase_ad \\
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"days": 30, "sync_scope": "global"}'`}
            language="bash"
          />

          <h4 className="mt-8 font-semibold dark:text-white">Parameters</h4>
          <Table
            headers={["Parameter", "Required", "Default", "Description"]}
            rows={[
              ["days", "Yes", "-", "1–180, how long the ad will run"],
              [
                "sync_scope",
                "No",
                `"global"`,
                "Controls which storers sync this ad",
              ],
              [
                "absolute_expiry",
                "No",
                "180",
                "Days until key expires (even if unused)",
              ],
            ]}
          />

          <h4 className="mt-8 font-semibold dark:text-white">
            Sync Scope Options
          </h4>
          <Table
            headers={["Scope", "Behavior"]}
            rows={[
              ["global", "Ad syncs to ALL storers worldwide"],
              ["country", "Ad syncs only to storers in your country"],
              ["city", "Ad syncs only to storers in your city"],
              ["area", "Ad stays local only, no sync to other storers"],
            ]}
          />

          <h4 className="mt-8 font-semibold dark:text-white">
            Example Response
          </h4>
          <CodeBlock
            code={`{
 "message": "Ad purchase successful",
  "data": {
    "ad_key": {
      "ad_id": "550e8400-e29b-41d4-a716-446655440000",
      "valid_from": 1737446400,
      "valid_until": 1740038400,
      "absolute_expiry": 1752969600,
      "sync_scope": "global",
      "signature": "BASE64_SIGNATURE..."
    },
    "days_purchased": 30,
    "valid_from": "2025-01-21T00:00:00.000Z",
    "valid_until": "2025-02-20T00:00:00.000Z",
    "absolute_expiry": "2025-07-20T00:00:00.000Z"
  },
  "status": 200
}`}
            language="json"
          />
        </section>
        {/* Step 2 */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">
            STEP 2: Create Ad Folder
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Create a folder inside your storer's{" "}
            <span className="font-semibold dark:text-white">`ads` </span>
            directory:
          </p>

          <CodeBlock
            code={`storer/
└── ads/
    └── my-ad-campaign/       <-- Create this folder (any name)
        ├── ad.key            <-- Required: The ad key file
        ├── ad.png            <-- Required: Your ad media
        └── description.txt   <-- Optional: Ad description`}
          />
        </section>
        {/* Step 3 */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">
            STEP 3: Save the Ad Key
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Take the{" "}
            <span className="font-semibold dark:text-white">`ad_key` </span>{" "}
            object from the API response and save it as{" "}
            <span className="font-semibold dark:text-white">`ad.key`</span>:
          </p>

          <CodeBlock
            code={`# Create the ad folder
mkdir -p /path/to/storer/ads/my-ad-campaign

# Save the ad.key file (copy the ad_key object from response)
cat > /path/to/storer/ads/my-ad-campaign/ad.key << 'EOF'
{
  "ad_id": "550e8400-e29b-41d4-a716-446655440000",
  "valid_from": 1737446400,
  "valid_until": 1740038400,
  "absolute_expiry": 1752969600,
  "sync_scope": "global",
  "signature": "BASE64_SIGNATURE..."
}
EOF`}
            language="bash"
          />

          <div className="inline-block p-5 mt-4 border-l-4 shadow-md border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 rounded-r-xl">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              <span className="font-bold">IMPORTANT:</span> Do NOT modify the
              ad.key contents or the signature will be invalid.
            </p>
          </div>
        </section>
        {/* Step 4 */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">
            STEP 4: Add Your Ad Media
          </h3>

          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Place your ad media file in the same folder. Supported formats:
          </p>

          <Table
            headers={["Type", "Extensions"]}
            rows={[
              ["Image", ".jpg, .jpeg, .png, .gif, .webp"],
              ["Video", ".mp4, .mov, .webm"],
            ]}
          />

          <p className="mt-8 font-semibold text-gray-600 dark:text-gray-400">
            Example:
          </p>

          <CodeBlock
            code={`cp /path/to/your/ad-image.png /path/to/storer/ads/my-ad-campaign/`}
            language="bash"
          />
        </section>
        {/* Step 5 */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">
            STEP 5: Add Description (Optional)
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Create a{" "}
            <span className="font-semibold dark:text-white">
              `description.txt`{" "}
            </span>{" "}
            file with your ad description:
          </p>
          <CodeBlock
            code={`echo "Check out our amazing product!" > /path/to/storer/ads/my-ad-campaign/description.txt`}
            language="bash"
          />
        </section>
        {/* Step 6 */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">
            STEP 6: Set Your Storer Location
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Your storer needs to know its location for sync scope to work. In
            your storer config or startup:
          </p>
          <CodeBlock
            code={`// Set your storer's location
adsManager.SetNodeLocation("JP", "Tokyo", "Shibuya")
//                          ^      ^        ^
//                       Country  City     Area
`}
            language="Go"
          />
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Use ISO 3166-1 alpha-2 country codes (e.g., `JP`, `US`, `PH`, `GB`).
          </p>
        </section>
        {/* Step 7 */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">STEP 7: Verify</h3>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            The storer will automatically scan the ads folder and validate your
            ad. Check the logs:
          </p>
          <CodeBlock
            code={`
12:34:56 ADS       › Scanning folder: ./ads
12:34:56 ADS       › Found ad, ID: 550e8400, Media: ad.png, Scope: global
12:34:56 ADS       ▸ Ad validated, ID: 550e8400 (valid until 2025-02-20)
12:34:56 ADS       ▸ Scan complete: 1 active ads
            `}
          />

          <p className="mt-8 text-gray-600 dark:text-gray-400">
            If you see warnings like:
          </p>
          <Table
            headers={["Error", "Reason / Meaning"]}
            rows={[
              ["`invalid signature`", "The ad.key was modified or corrupted"],
              ["`expired`", "The ad validity period has passed"],
              ["`exceeded 6 month absolute limit`", "Key has expired"],
            ]}
          />
        </section>

        {/* Complete Example */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">
            Complete Example
          </h3>
          <CodeBlock
            code={`# 1. Purchase ad key
curl -X POST https://app.pixelmine.org:8005/purchase_ad \\ 
-H "Authorization: Bearer $TOKEN" \\
-H "Content-Type: application/json" \\
-d '{"days": 30, "sync_scope": "city", "absolute_expiry": 60}'

# 2. Create folder
mkdir -p ./ads/summer-sale

# 3. Save ad.key (paste the ad_key from response)
cat > ./ads/summer-sale/ad.key << 'EOF'
{
  "ad_id": "...",
  "valid_from": ...,
  "valid_until": ...,
  "absolute_expiry": ...,
  "sync_scope": "city",
  "signature": "..."
}
EOF

# 4. Add media
cp ~/my-ad-banner.png ./ads/summer-sale/

# 5. Add description
echo "Summer Sale - 50% off!" > ./ads/summer-sale/description.txt

# 6. Restart storer or wait for automatic scan`}
            language="bash"
          />
        </section>

        {/* Folder Structure Summary */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">
            Folder Structure Summary
          </h3>

          <CodeBlock
            code={`storer/
└── ads/
    ├── campaign-1/
    │   ├── ad.key           # Required
    │   ├── banner.jpg       # Required (any supported format)
    │   └── description.txt  # Optional
    │
    ├── campaign-2/
    │   ├── ad.key
    │   └── promo.mp4
    │
    └── campaign-3/
        ├── ad.key
        ├── ad.png
        └── description.txt
            `}
          />
        </section>

        {/* Troubleshooting */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">Troubleshooting</h3>
          <Table
            headers={["Problem", "Solution"]}
            rows={[
              ["Ad not showing", "Check logs for validation errors"],
              [
                "Invalid signature",
                "Re-download ad.key from API, don't modify it",
              ],
              ["Ad expired", "Purchase a new ad key"],
              [
                "Not syncing to other storers",
                "Check sync_scope matches your needs",
              ],
              [
                "Sync scope not working",
                "Make sure SetNodeLocation is configured",
              ],
            ]}
          />
        </section>

        {/* API Quick Ref */}
        <section className="mt-12">
          <h3 className="text-xl font-bold dark:text-white">
            API Quick Reference
          </h3>
          <CodeBlock
            code={`# Global ad (syncs everywhere)
{"days": 30}

# Country scope (syncs to same country)
{"days": 30, "sync_scope": "country"}

# City scope (syncs to same city)
{"days": 30, "sync_scope": "city"}

# Area scope (local only)
{"days": 30, "sync_scope": "area"}

# Custom expiry (key expires in 60 days)
{"days": 30, "absolute_expiry": 60}
`}
            language="bash"
          />
        </section>
      </div>
    </>
  );
}

export default DocumentationStorerAdSetup;
