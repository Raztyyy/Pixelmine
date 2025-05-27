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
        {({ close }) => (
          <>
            <PopoverButton className="flex items-center font-semibold text-gray-900 transition-all duration-300 ease-in-out group gap-x-1 text-sm/6 hover:text-primary focus:text-primary">
              Product
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-gray-900 transition-all duration-300 ease-in-out size-4 group-hover:text-primary group-focus:text-primary"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-[60] mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="relative flex items-center p-4 rounded-lg group gap-x-6 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-center flex-none rounded-lg size-11 bg-gray-50 group-hover:bg-white">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-gray-600 size-6 group-hover:text-primary"
                      />
                    </div>
                    <div className="flex-auto">
                      <Link
                        to={item.path}
                        className="block font-semibold text-gray-900"
                        onClick={() => close()}
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
          </>
        )}
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
