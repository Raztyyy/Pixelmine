import { useState, useRef, useEffect } from "react";

export default function Dropdown({
  options = [], // [{ value: string, label: string }]
  value, // currently selected value
  onChange, // callback when option is selected
  placeholder = "Select", // placeholder text
  className = "", // extra classes for the button
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((o) => o.value === value);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-between px-4 py-2 text-left bg-white border min-w-60 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
        <div className="absolute z-50 mt-1 bg-white border shadow-lg min-w-60 rounded-xl">
          {options.map((o) => (
            <button
              key={o.value}
              type="button"
              onClick={() => {
                onChange(o.value);
                setOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-emerald-50"
            >
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
