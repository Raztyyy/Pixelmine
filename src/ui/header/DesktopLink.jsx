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
