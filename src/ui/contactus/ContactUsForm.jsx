import { useState } from "react";
import { Field, Label, Switch } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function ContactUsForm() {
  const [agreed, setAgreed] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    return console.log("Clicked!!!");
  }

  return (
    <form method="POST" className="max-w-xl mx-auto " onSubmit={handleSubmit}>
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
              autoComplete="given-name"
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
              autoComplete="family-name"
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
              autoComplete="email"
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
            <div className="flex rounded-md bg-white outline outline-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:outline-indigo-600">
              <div className="relative">
                <select className="appearance-none rounded-md px-3.5 pr-10 py-2 text-base text-gray-500 focus:outline-none">
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <div className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2">
                  <svg
                    className="w-3 h-3 text-gray-400 transition-transform rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </div>
              </div>

              <input
                id="phone-number"
                name="phone-number"
                type="text"
                placeholder="123-456-7890"
                className="flex-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
            </div>
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
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 outline outline-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600"
              defaultValue=""
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
          className="flex gap-2 group border rounded-lg w-full items-center justify-center text-center me-2 mb-2 transition-all duration-300 ease-in-out px-6 py-3.5 text-sm bg-primary text-white border-primary hover:bg-primary/80"
        >
          Let’s talk
        </button>
      </div>
    </form>
  );
}
