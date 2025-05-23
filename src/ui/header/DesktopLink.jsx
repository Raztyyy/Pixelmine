import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/pro-solid-svg-icons"; // Importing from pro-solid-svg-icons
import { Link, NavLink } from "react-router-dom";

function DesktopLink({ products, links }) {
  return (
    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
      <Popover className="relative">
        <PopoverButton className="group flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 hover:text-primary focus:text-primary">
          Product
          <FontAwesomeIcon
            icon={faChevronDown}
            className="size-4 text-gray-900 group-hover:text-primary group-focus:text-primary"
          />
        </PopoverButton>

        <PopoverPanel
          transition
          className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="p-4">
            {products.map((item) => (
              <div
                key={item.name}
                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
              >
                <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className="size-6 text-gray-600 group-hover:text-primary"
                  />
                </div>
                <div className="flex-auto">
                  <Link
                    to={item.path}
                    className="block font-semibold text-gray-900"
                  >
                    {item.name}
                    <span className="absolute inset-0" />
                  </Link>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </PopoverPanel>
      </Popover>

      {links.map((link) => {
        return (
          <NavLink
            to={link.path}
            key={link.name}
            className={({ isActive }) =>
              `text-sm/6 font-semibold text-gray-900 hover:text-primary transition-all duration-300 ease-in-out ${
                isActive ? "text-primary" : ""
              }`
            }
          >
            {link.name}
          </NavLink>
        );
      })}
    </PopoverGroup>
  );
}

export default DesktopLink;
