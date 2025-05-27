import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronDown } from "@fortawesome/pro-solid-svg-icons"; // Importing from pro-solid-svg-icons
import { faXmark } from "@fortawesome/pro-regular-svg-icons";
import { Link } from "react-router-dom";

function MobileLink({ products, links, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <Dialog
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      className="lg:hidden"
    >
      <div className="fixed inset-0 z-[60]" />
      <DialogPanel className="fixed inset-y-0 right-0 w-full px-6 py-6 overflow-y-auto bg-white z-[60] sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
            <span className="sr-only">Close menu</span>
            <FontAwesomeIcon
              icon={faXmark}
              className="text-gray-600 size-6 group-hover:text-indigo-600"
            />{" "}
          </button>
        </div>
        <div className="flow-root mt-6">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="py-6 space-y-2">
              <Disclosure as="div" className="-mx-3">
                <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Product
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="text-gray-900 size-4 group-hover:text-indigo-600"
                  />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 space-y-2">
                  {products.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as={Link} // Use React Router Link component here
                      to={item.path} // Use "to" prop instead of "href"
                      className="block py-2 pl-6 pr-3 font-semibold text-gray-900 rounded-lg text-sm/7 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </DisclosurePanel>
              </Disclosure>

              {links.map((link) => {
                return (
                  <Link
                    to={link.path}
                    key={link.name}
                    className="block px-3 py-2 -mx-3 font-semibold text-gray-900 rounded-lg text-base/7 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="py-6">
              <Link
                to="contact-us"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

export default MobileLink;
