import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/pro-solid-svg-icons";

export default function Dropdown({ selected, setSelected, options }) {
  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-50 md:w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 my-2">
          <span>{selected.currency === "JPY" ? "🇯🇵" : "🇺🇸"}</span>
          {selected.currency}
          <FontAwesomeIcon
            icon={faCaretDown}
            className="text-gray-600 size-4 group-hover:text-indigo-600"
          />
        </MenuButton>
      </div>

      <MenuItems className="absolute left-0 z-10 w-32 mt-2 origin-top-right bg-white rounded-md shadow-lg lg:right-0 ring-1 ring-black/5 focus:outline-none">
        <div className="py-1">
          {options.map((option) => (
            <MenuItem key={option.value}>
              {({ active }) => (
                <button
                  onClick={() => handleSelect(option)}
                  className={` w-full px-4 py-2 text-left text-xs md:text-sm ${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  }`}
                >
                  {option.currency}
                </button>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
