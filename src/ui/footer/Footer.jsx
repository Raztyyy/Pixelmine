import { Link } from "react-router-dom";
import DownloadButtons from "../hero/DownloadButtons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
} from "@fortawesome/pro-solid-svg-icons";

const company = [
  {
    name: "About Us",
    path: "about-us",
  },
  {
    name: "Contact Us",
    path: "contact-us",
  },
  {
    name: "Careers",
    path: "careers",
  },
  { name: "News & Events", path: "news-events" },
];

const products = [
  {
    name: "Concept",
    description: "The abstract concept underlying Pixelmine",
    path: "concept",
  },
  {
    name: "Design & Implementation",
    description: "Proof of concept and execution",
    path: "design-implementation",
  },
  {
    name: "Network Incentives",
    description: "Your customers’ data will be safe and secure",
    path: "network-incentives",
  },
  {
    name: "Democratic System",
    description: "Something of everyone",
    path: "democratic-system",
  },
  {
    name: "Roadmap",
    description: "Freedom and automony",
    path: "roadmap",
  },
];

function Footer() {
  return (
    <footer className="px-0 py-10 bg-white border-t border-gray-150 dark:bg-stone-900 dark:border-none">
      <div className="grid grid-cols-1 gap-8 px-6 mx-auto max-w-auto max-w-7xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:max-w-7xl lg:px-8">
        {/* Column 1: Brand & Description */}
        <div className="md:col-span-4 lg:col-span-2">
          <h3 className="mb-4 text-xl font-bold">
            <img className="w-40" src="/logo.png" alt="Pixelmine Logo" />
          </h3>
          <p className="text-gray-600 text-sm/6 w-auto lg:w-[24rem] dark:text-stone-50">
            Pixelmine is a social networking system that enhances user
            empowerment by decentralizing control and governance across multiple
            nodes or servers.
          </p>
          {/* Contact Details */}
          <div className="flex flex-col mt-4">
            <div className="flex flex-row items-center gap-3">
              <span>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-gray-600 size-4 dark:text-stone-50"
                />
              </span>
              <p className="leading-loose text-gray-600 text-sm/10 dark:text-stone-50">
                1-27-8 Higashi-Azabu, Minato-ku, Tokyo 106-0044, Japan
              </p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <span>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-gray-600 size-4 dark:text-stone-50"
                />
              </span>
              <p className="text-gray-600 text-sm/10 dark:text-stone-50">
                pixie@pixelmine.org
              </p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <span>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-gray-600 size-4 dark:text-stone-50"
                />
              </span>
              <p className="text-gray-600 text-sm/10 dark:text-stone-50">
                +81-3-6401-4100
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Company */}
        <div>
          <h4 className="mb-4 text-lg font-semibold dark:text-stone-50">
            Company
          </h4>
          <ul className="space-y-2 text-gray-600 text-sm/6 ">
            {company.map((item) => {
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-600 transition-all duration-300 ease-in-out text-sm/6 hover:text-primary dark:text-stone-50 dark:hover:text-green-400"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 3: Product */}
        <div>
          <h4 className="mb-4 text-lg font-semibold dark:text-stone-50">
            Product
          </h4>
          <ul className="space-y-2 text-gray-600 text-sm/6">
            {products.map((item) => {
              return (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-gray-600 transition-all duration-300 ease-in-out text-sm/6 hover:text-primary dark:text-stone-50 dark:hover:text-green-400"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Column 4: Social */}
        <div>
          <h4 className="mb-4 text-lg font-semibold dark:text-stone-50">
            Download Now
          </h4>
          <div className="flex space-x-4">
            <DownloadButtons direction="col" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-3 px-6 mx-auto mt-10 text-sm text-gray-500 lg:px-8 lg:flex-row max-w-7xl dark:text-stone-50">
        <div>
          &copy; {new Date().getFullYear()} Pixelmine. All rights reserved.
        </div>
        <ul className="flex flex-wrap divide-x">
          <li className="px-3 ">
            <Link
              to="#"
              className="transition-all duration-300 ease-in-out hover:text-primary dark:hover:text-green-400"
            >
              Sitemap
            </Link>
          </li>
          <li className="px-3">
            <Link
              to="terms-and-conditions"
              className="transition-all duration-300 ease-in-out hover:text-primary dark:hover:text-green-400"
            >
              Terms & Conditions
            </Link>
          </li>
          <li className="px-3">
            <Link
              to="child-sexual-abuse-policy"
              className="transition-all duration-300 ease-in-out hover:text-primary dark:hover:text-green-400"
            >
              Child Sexual Abuse Policy
            </Link>
          </li>
          <li className="px-3">
            <Link
              to="commercial-law"
              className="transition-all duration-300 ease-in-out hover:text-primary dark:hover:text-green-400"
            >
              特定商取引法
            </Link>
          </li>
          <li className="px-3">
            <Link
              to="privacy-policy"
              className="transition-all duration-300 ease-in-out hover:text-primary dark:hover:text-green-400"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
