import { PopoverGroup } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faUserCheck,
} from "@fortawesome/pro-solid-svg-icons";

import Button from "../Button";
import { useAuth } from "../../context/AuthContext";
import ProfileDropdown from "../dashboard/ProfileDropdown";

function DesktopLink({ links }) {
  const { isAuthenticated } = useAuth();

  return (
    <PopoverGroup className="flex items-center gap-5">
      {/* Links */}
      <div className="flex items-center gap-5">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `text-sm/10 font-semibold hover:text-primary transition-all duration-300 dark:hover:text-green-400 leading-none text-center ${
                isActive
                  ? "text-primary dark:text-green-400"
                  : "text-gray-900 dark:text-stone-50"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-2">
        {isAuthenticated ? (
          <div className="flex items-center gap-3 ">
            <ProfileDropdown />
          </div>
        ) : (
          <>
            <Button variant="outline" path="/signup" className="bg-white">
              <FontAwesomeIcon
                icon={faUserCheck}
                className="text-black transition-all duration-300 ease-in-out size-4"
              />
              Create Account
            </Button>
            <Button variant="primary" path="/login">
              <FontAwesomeIcon
                icon={faArrowRightToBracket}
                className="text-white transition-all duration-300 ease-in-out size-4"
              />
              Login
            </Button>
          </>
        )}
      </div>
    </PopoverGroup>
  );
}

export default DesktopLink;
