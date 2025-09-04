import { useMoveBack } from "../../../hooks/useMoveBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/pro-regular-svg-icons";
import Accordion from "../../Accordion";

const faqItems = [
  {
    title: "What is Pixelmine Japan?",
    content:
      "Pixelmine Japan is a digital advertising platform where businesses can run campaigns powered by Ad Points. It provides analytics, campaign management, and API integration for developers.",
  },
  {
    title: "How do Ad Points work?",
    content:
      "Ad Points are the core currency of Pixelmine Japan. They are purchased in the dashboard and used to fund your campaigns. Each impression, click, or engagement deducts points based on campaign settings.",
  },
  {
    title: "Can I track my campaign performance?",
    content:
      "Yes! The dashboard includes real-time analytics. You can monitor impressions, clicks, conversions, and audience engagement metrics to optimize your campaigns.",
  },
  {
    title: "Is my data secure?",
    content:
      "Absolutely. Pixelmine Japan uses encrypted transactions, secure logins, and verified accounts to ensure safety and compliance. Email verification is required for all new accounts.",
  },
  {
    title: "Do you provide an API?",
    content:
      "Yes. Pixelmine Japan offers a REST API that allows developers to automate campaigns, manage Ad Points, and fetch analytics programmatically. See the API Reference for details.",
  },
  {
    title: "How can I get support?",
    content:
      "You can reach out via the Support section in your dashboard or check the documentation for troubleshooting guides. Our team is available to assist with account and campaign issues.",
  },
  {
    title: "What payment methods are accepted?",
    content:
      "Pixelmine Japan accepts major credit cards, PayPal, and select local payment providers. All transactions are processed securely and immediately credited as Ad Points.",
  },
  {
    title: "Can I set a budget limit for my campaigns?",
    content:
      "Yes, you can define daily or total spending limits for each campaign to ensure you stay within budget and never overspend on Ad Points.",
  },
  {
    title: "Can I cancel or pause a campaign?",
    content:
      "You can pause, edit, or cancel an active campaign at any time through the dashboard. Unused Ad Points are returned to your balance for future use.",
  },
  {
    title: "Do you offer refunds for unused Ad Points?",
    content:
      "Ad Points are generally non-refundable, but in certain cases (such as accidental duplicate purchases), you can contact support to request a review.",
  },
  {
    title: "Can multiple team members use one account?",
    content:
      "Yes, Pixelmine Japan allows team collaboration. You can invite members, assign roles, and manage permissions within the dashboard.",
  },
  {
    title: "Do you offer tutorials or training?",
    content:
      "Yes. The Guides section of the documentation covers everything from campaign setup to advanced API usage. We also host webinars and provide step-by-step walkthroughs.",
  },
];

function DocumentationFAQ() {
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
        Frequently Asked Questions
      </h2>
      <p className="mt-3 text-gray-600 md:text-lg">
        Find answers to the most common questions about Pixelmine Japan. If you
        can’t find what you’re looking for, please contact our support team.
      </p>

      {/* Accordion FAQ */}
      <div className="mt-8">
        <Accordion items={faqItems} />
      </div>
    </div>
  );
}

export default DocumentationFAQ;
