import { useState, useRef, useEffect } from "react";
import { faUser, faSignOutAlt, faGear } from "@fortawesome/pro-solid-svg-icons";
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
        className="relative flex items-center gap-2 p-1 transition-all duration-300 rounded-full group hover:scale-105"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 transition-opacity duration-300 rounded-full opacity-0 bg-gradient-to-r from-emerald-500 to-teal-500 blur-md group-hover:opacity-40"></div>

        {/* Avatar with ring */}
        <div className="relative">
          <div className="absolute inset-0 transition-all duration-300 border-2 rounded-full border-emerald-200 group-hover:border-emerald-400 dark:border-emerald-800 dark:group-hover:border-emerald-500"></div>
          {user?.avatar_blob ? (
            <img
              src={user.avatar_blob}
              alt={`${user?.first_name} Profile Image`}
              className="relative object-cover transition-all duration-300 rounded-full w-11 h-11 group-hover:scale-95"
            />
          ) : (
            <div className="relative flex items-center justify-center text-sm font-bold text-white rounded-full w-11 h-11 bg-gradient-to-br from-emerald-500 to-teal-500 group-hover:scale-95">
              {(user?.first_name?.[0] || "") + (user?.last_name?.[0] || "") ||
                "U"}
            </div>
          )}
          {/* Online status indicator */}
          <div className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full bg-emerald-500 dark:border-stone-900"></div>
        </div>
      </button>

      {open && (
        <>
          {/* Backdrop blur */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpen(false)}
          ></div>

          {/* Dropdown menu */}
          <div className="absolute right-0 z-50 mt-3 overflow-hidden duration-200 bg-white border border-gray-200 shadow-2xl w-72 rounded-2xl dark:bg-stone-800 dark:border-gray-700 animate-in fade-in slide-in-from-top-2">
            {/* Header with gradient background */}
            <div className="relative p-5 overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 bg-white rounded-full opacity-10"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 -mb-6 -ml-6 bg-white rounded-full opacity-10"></div>

              <div className="relative flex items-center gap-4">
                <div className="relative">
                  {user?.avatar_blob ? (
                    <img
                      src={user.avatar_blob}
                      alt={`${user?.first_name} Profile`}
                      className="object-cover w-16 h-16 border-4 border-white rounded-full shadow-lg"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-16 h-16 text-lg font-bold text-white border-4 border-white rounded-full shadow-lg bg-gradient-to-br from-emerald-500 to-teal-500">
                      {(user?.first_name?.[0] || "") +
                        (user?.last_name?.[0] || "") || "U"}
                    </div>
                  )}
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-2 border-white rounded-full shadow-lg bg-emerald-400"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-bold text-white truncate">
                    {user?.first_name || "User"} {user?.last_name || ""}
                  </p>
                  <p className="text-xs truncate text-emerald-100">
                    {user?.email || "user@example.com"}
                  </p>
                </div>
              </div>
            </div>

            {/* Menu items */}
            <div className="p-2">
              <Link
                to="/dashboard/profile"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 dark:text-gray-300 dark:hover:from-emerald-900/20 dark:hover:to-teal-900/20 group"
              >
                <div className="flex items-center justify-center w-10 h-10 transition-all duration-200 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 group-hover:from-emerald-100 group-hover:to-teal-100 dark:group-hover:from-emerald-900/30 dark:group-hover:to-teal-900/30">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-gray-600 transition-colors duration-200 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                  />
                </div>
                <span className="transition-colors duration-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                  View Profile
                </span>
              </Link>

              <Link
                to="/dashboard/settings"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 dark:text-gray-300 dark:hover:from-emerald-900/20 dark:hover:to-teal-900/20 group"
              >
                <div className="flex items-center justify-center w-10 h-10 transition-all duration-200 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 group-hover:from-emerald-100 group-hover:to-teal-100 dark:group-hover:from-emerald-900/30 dark:group-hover:to-teal-900/30">
                  <FontAwesomeIcon
                    icon={faGear}
                    className="text-gray-600 transition-colors duration-200 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                  />
                </div>
                <span className="transition-colors duration-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                  Settings
                </span>
              </Link>

              {/* Divider */}
              <div className="my-2 border-t border-gray-200 dark:border-gray-700"></div>

              <button
                onClick={() => {
                  logout();
                  setOpen(false);
                }}
                className="flex items-center w-full gap-3 px-4 py-3 text-sm font-medium text-red-600 transition-all duration-200 rounded-xl hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20 group"
              >
                <div className="flex items-center justify-center w-10 h-10 transition-all duration-200 rounded-lg bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/30 dark:to-red-800/30">
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </div>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
