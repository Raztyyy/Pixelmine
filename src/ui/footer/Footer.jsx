import { Link } from "react-router-dom";
import DownloadButtons from "../hero/DownloadButtons";

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
    <footer className="px-6 py-10 bg-white">
      <div className="grid grid-cols-1 gap-8 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {/* Column 1: Brand & Description */}
        <div className="md:col-span-4 lg:col-span-2">
          <h3 className="mb-4 text-xl font-bold">
            <img className="w-40" src="/logo.png" alt="Pixelmine Logo" />
          </h3>
          <p className="text-gray-600 text-sm/6 w-auto lg:w-[24rem]">
            Pixelmine is a social networking system that enhances user
            empowerment by decentralizing control and governance across multiple
            nodes or servers.
          </p>
        </div>

        {/* Column 2: Company */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Company</h4>
          <ul className="space-y-2 text-gray-600 text-sm/6 ">
            {company.map((item) => {
              return (
                <li>
                  <Link
                    to={item.path}
                    className="text-gray-600 transition-all duration-300 ease-in-out text-sm/6 hover:text-primary"
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
          <h4 className="mb-4 text-lg font-semibold">Product</h4>
          <ul className="space-y-2 text-gray-600 text-sm/6">
            {products.map((item) => {
              return (
                <li>
                  <Link
                    to={item.path}
                    className="text-gray-600 transition-all duration-300 ease-in-out text-sm/6 hover:text-primary"
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
          <h4 className="mb-4 text-lg font-semibold">Download Now</h4>
          <div className="flex space-x-4">
            <DownloadButtons direction="col" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-3 mx-auto mt-10 text-sm text-gray-500 lg:flex-row max-w-7xl">
        <div>
          &copy; {new Date().getFullYear()} Pixelmine. All rights reserved.
        </div>
        <ul className="flex flex-wrap divide-x">
          <li className="px-3 ">
            <Link to="#">Sitemap</Link>
          </li>
          <li className="px-3">
            <Link to="terms-and-conditions">Terms & Conditions</Link>
          </li>
          <li className="px-3">
            <Link to="child-sexual-abuse-policy">
              Child Sexual Abuse Policy
            </Link>
          </li>
          <li className="px-3">
            <Link to="commercial-law">特定商取引法</Link>
          </li>
          <li className="px-3">
            <Link to="privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
