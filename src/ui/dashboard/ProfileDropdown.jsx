import { useState, useRef, useEffect } from "react";
import { faUser, faSignOutAlt } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../context/AuthContext";

import profilePlaceholder from "../../assets/profile-placeholder-img.jpg";
import { Link } from "react-router-dom";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100"
      >
        <img
          src={profilePlaceholder}
          alt={`${user?.firstName} Profile Image`}
          className="object-cover w-12 h-12 rounded-full"
        />
      </button>

      {open && (
        <div className="absolute right-0 z-50 w-48 mt-2 bg-white border rounded-lg shadow">
          <div className="py-1 text-sm text-gray-700">
            <div className="px-4 py-2 font-medium">
              {user?.firstName || "User"} {user?.lastName || "User"}
            </div>
            <Link
              to="/dashboard/profile"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
              Profile
            </Link>
            <button
              onClick={logout}
              className="flex items-center w-full gap-2 px-4 py-2 text-left text-red-600 hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faSignOutAlt} className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
