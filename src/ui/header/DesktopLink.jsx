import { PopoverGroup } from "@headlessui/react";

import { NavLink } from "react-router-dom";

function DesktopLink({ links }) {
  return (
    <PopoverGroup className="hidden lg:flex lg:gap-x-10">
      {links.map((link) => {
        return (
          <NavLink
            to={link.path}
            key={link.name}
            className={({ isActive }) =>
              `text-sm/6 font-semibold  hover:text-primary transition-all duration-300 ease-in-out  dark:hover:text-green-400 ${
                isActive
                  ? "text-primary dark:text-green-400"
                  : "text-gray-900 dark:text-stone-50"
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
