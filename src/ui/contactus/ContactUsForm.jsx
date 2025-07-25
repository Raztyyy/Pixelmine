import { useState, useEffect } from "react";
import { useFetcher } from "react-router-dom";
import { Field, Label, Switch } from "@headlessui/react";
import { Link } from "react-router-dom";
import { showToast } from "../../utils/Toast"; // adjust path

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/pro-regular-svg-icons";

export default function ContactUsForm() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false); // ✅ new state
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  useEffect(() => {
    if (fetcher.data?.type === "success") {
      showToast(fetcher.data.message, "success");
      setSubmitted(true); // ✅ mark as submitted
    } else if (fetcher.data?.type === "error") {
      showToast(fetcher.data.message, "error");
    }
  }, [fetcher.data]);

  // ✅ if submitted, show thank you message
  if (submitted) {
    return (
      <div className="py-40 text-center">
        <FontAwesomeIcon
          icon={faCheck}
          className="p-5 mt-4 rounded-full bg-primary text-slate-100 size-5"
        />
        <h3 className="mt-4 mb-4 text-2xl font-semibold text-gray-900">
          Thank you!
        </h3>
        <p className="text-gray-900">
          Your message has been successfully sent. We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <>
      <h2 className="mb-10 text-3xl">Get Connected</h2>
      <fetcher.Form method="post" className="max-w-xl mx-auto">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block font-semibold text-gray-900 text-sm/6"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                required
                disabled={isSubmitting}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block font-semibold text-gray-900 text-sm/6"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                required
                disabled={isSubmitting}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block font-semibold text-gray-900 text-sm/6"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={isSubmitting}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block font-semibold text-gray-900 text-sm/6"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                id="phone-number"
                name="phone-number"
                type="text"
                placeholder="123-456-7890"
                disabled={isSubmitting}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block font-semibold text-gray-900 text-sm/6"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                disabled={isSubmitting}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          <Field className="flex sm:col-span-2 gap-x-4">
            <div className="flex items-center h-6">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="flex w-8 p-px rounded-full bg-gray-200 ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out group data-[checked]:bg-primary"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="h-4 w-4 transform rounded-full bg-white shadow transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5 ring-1 ring-gray-900/5"
                />
              </Switch>
            </div>
            <Label className="text-gray-600 text-sm/6">
              By selecting this, you agree to our{" "}
              <Link to="/privacy-policy" className="font-semibold text-primary">
                privacy&nbsp;policy
              </Link>
              .
            </Label>
          </Field>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            disabled={!agreed || isSubmitting}
            className={`flex gap-2 group border rounded-lg w-full items-center justify-center text-center me-2 mb-2 transition-all duration-300 ease-in-out px-6 py-3.5 text-sm ${
              agreed
                ? "bg-primary text-white border-primary hover:bg-primary/80"
                : "bg-gray-300 text-gray-500 border-gray-300 cursor-not-allowed"
            }`}
          >
            {isSubmitting ? "Sending..." : "Let’s talk"}
          </button>
        </div>
      </fetcher.Form>
    </>
  );
}
