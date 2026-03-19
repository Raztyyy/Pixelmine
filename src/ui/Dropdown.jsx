import { useState, useRef, useEffect } from "react";

export default function Dropdown({
  options = [], // [{ value: string, label: string }]
  value, // currently selected value
  onChange, // callback when option is selected
  placeholder = "Select", // placeholder text
  className = "", // extra classes for the button
  fullWidth = false, // optionally make dropdown full width
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null); // new ref for button
  const [menuWidth, setMenuWidth] = useState(null); // menu width state

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update menu width whenever dropdown opens
  useEffect(() => {
    if (open && buttonRef.current) {
      setMenuWidth(buttonRef.current.offsetWidth);
    }
  }, [open]);

  const selectedOption = options.find((o) => o.value === value);

  return (
    <div ref={dropdownRef} className={`relative ${fullWidth ? "flex-1" : ""} `}>
      {/* Button */}
      <button
        ref={buttonRef} // attach button ref
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`${
          fullWidth ? "w-full" : ""
        }  flex items-center justify-between px-4 py-2 text-left bg-white border min-w-60 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500`}
      >
        {selectedOption ? selectedOption.label : placeholder}
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          className="absolute z-50 mt-1 overflow-hidden bg-white border shadow-lg rounded-xl"
          style={{ width: menuWidth }} // dynamically adjust to button
        >
          {options.map((o, index) => {
            const isFirst = index === 0;
            const isLast = index === options.length - 1;
            return (
              <button
                key={o.value}
                type="button"
                onClick={() => {
                  onChange(o.value);
                  setOpen(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-emerald-50 transition-colors
            ${isFirst ? "rounded-t-xl" : ""}
            ${isLast ? "rounded-b-xl" : ""}
          `}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
