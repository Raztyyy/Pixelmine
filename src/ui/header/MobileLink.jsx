import { Dialog, DialogPanel } from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faXmark } from "@fortawesome/pro-regular-svg-icons";
import { Link } from "react-router-dom";

function MobileLink({ links, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <Dialog
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      className="lg:hidden "
    >
      <div className="fixed inset-0 z-[60]" />
      <DialogPanel className="fixed inset-y-0 right-0 w-full px-6 py-6 overflow-y-auto bg-white z-[60] sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-stone-800">
        <div className="flex items-center justify-between ">
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
            className="-m-2.5 rounded-md p-2.5 text-gray-700 "
          >
            <span className="sr-only">Close menu</span>
            <FontAwesomeIcon
              icon={faXmark}
              className="text-gray-600 size-6 group-hover:text-primary dark:text-stone-50"
            />{" "}
          </button>
        </div>
        <div className="flow-root mt-6">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="py-6 space-y-2">
              {links.map((link) => {
                return (
                  <Link
                    to={link.path}
                    key={link.name}
                    className="block px-3 py-2 -mx-3 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50 dark:text-stone-50 dark:hover:bg-green-400/20"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

export default MobileLink;
