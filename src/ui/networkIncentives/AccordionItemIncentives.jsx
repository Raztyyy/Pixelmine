function AccordionItemIncentives({ id, title, content, isOpen, toggle }) {
  return (
    <div>
      <h2 id={`accordion-heading-${id}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full gap-3 py-5 text-sm text-gray-600 border-b border-gray-300 rtl:text-right "
          aria-expanded={isOpen}
          aria-controls={`accordion-body-${id}`}
          onClick={toggle}
        >
          <span>{title}</span>
          <svg
            className={`w-3 h-3 text-primary shrink-0 transition-transform ${
              isOpen ? "rotate-0" : "rotate-180"
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {isOpen && (
        <div
          id={`accordion-body-${id}`}
          className="py-5 border-b border-gray-300 "
          aria-labelledby={`accordion-heading-${id}`}
        >
          {content}
        </div>
      )}
    </div>
  );
}

export default AccordionItemIncentives;
