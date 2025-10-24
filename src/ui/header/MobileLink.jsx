import { Dialog } from "@headlessui/react";
import { AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faArrowRightToBracket,
  faUserCheck,
  faSignOutAlt,
} from "@fortawesome/pro-solid-svg-icons";

import { Link } from "react-router-dom";

import { Backdrop, Drawer } from "../../animations/AnimatedWrappers";
import Button from "../Button";
import { useAuth } from "../../context/AuthContext";
import { useLanguage } from "../../context/LanguageContext";

function MobileLink({ links, mobileMenuOpen, setMobileMenuOpen }) {
  const { isAuthenticated, user, logout } = useAuth();
  const { language } = useLanguage(); // get current language
  const isEN = language === "en"; // helper

  return (
    <AnimatePresence>
      {mobileMenuOpen && (
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="xl:hidden"
        >
          {/* Backdrop */}
          <Backdrop />

          {/* Drawer */}
          <Drawer className="fixed inset-y-0 right-0 w-full px-6 py-6 overflow-y-auto bg-white z-[60] sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-stone-800">
            {/* Header */}
            <div className="flex items-center justify-between">
              <Link to="overview" className="-m-1.5 p-1.5">
                <span className="sr-only">Pixelmine</span>
                <img
                  alt="Pixelmine Logo"
                  src="logo.png"
                  className="h-[18px] w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">
                  {isEN ? "Close menu" : "メニューを閉じる"}
                </span>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-gray-600 size-6 group-hover:text-primary dark:text-stone-50"
                />
              </button>
            </div>

            {/* Links */}
            <div className="flow-root mt-6">
              <div className="-my-6 divide-y divide-gray-500/10">
                <ul className="py-6 space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="block px-3 py-2 -mx-3 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50 dark:text-stone-50 dark:hover:bg-green-400/20"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {isEN ? link.name : link.translatedName}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Auth Section */}
                <div className="py-6">
                  {isAuthenticated ? (
                    <>
                      {/* Profile Dropdown */}
                      <div className="flex items-center gap-5">
                        <img
                          src={user?.avatar_blob || profilePlaceholder}
                          alt={`${user?.first_name} Profile Image`}
                          className="object-cover rounded-full w-11 h-11 ring-4 ring-slate-900/5"
                        />
                        <div className="flex flex-col items-start text-sm">
                          <div className="text-stone-900 dark:text-white">
                            {user?.first_name} {user?.last_name}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-stone-500 dark:text-stone-300">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full dark:bg-green-400"></span>
                            {isEN ? "Online" : "オンライン"}
                          </div>
                        </div>
                        <div className="items-end flex-1 text-end">
                          <button
                            onClick={logout}
                            className="p-2 text-red-600 rounded-md"
                            aria-label={isEN ? "Logout" : "ログアウト"}
                          >
                            <FontAwesomeIcon
                              icon={faSignOutAlt}
                              className="w-4 h-4"
                            />
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col gap-3">
                      <Button
                        variant="outline"
                        path="/signup"
                        className="w-full bg-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <FontAwesomeIcon
                          icon={faUserCheck}
                          className="text-black transition-all duration-300 ease-in-out size-4"
                        />
                        {isEN ? "Create Account" : "アカウント作成"}
                      </Button>
                      <Button
                        variant="primary"
                        path="/login"
                        className="w-full"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <FontAwesomeIcon
                          icon={faArrowRightToBracket}
                          className="text-white transition-all duration-300 ease-in-out size-4"
                        />
                        {isEN ? "Login" : "ログイン"}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Drawer>
        </Dialog>
      )}
    </AnimatePresence>
  );
}

export default MobileLink;
