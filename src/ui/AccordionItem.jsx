import { motion, AnimatePresence } from "framer-motion";

function AccordionItem({ id, title, content, isOpen, toggle }) {
  return (
    <div>
      <h2 id={`accordion-heading-${id}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full gap-3 py-5 text-sm text-stone-900 dark:text-stone-50 ${
            isOpen ? "" : "border-b border-gray-300"
          } rtl:text-right`}
          aria-expanded={isOpen}
          aria-controls={`accordion-body-${id}`}
          onClick={toggle}
        >
          <span
            className={`text-sm sm:text-base text-start ${
              isOpen
                ? "text-primary font-semibold dark:text-green-400"
                : "text-stone-900 dark:text-stone-50"
            }`}
          >
            {title}
          </span>
          <motion.svg
            animate={{ rotate: isOpen ? 0 : 180 }}
            transition={{ duration: 0.3 }}
            className="w-3 h-3 text-primary dark:text-green-400 shrink-0"
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
          </motion.svg>
        </button>
      </h2>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              id={`accordion-body-${id}`}
              className="py-5 border-b-4 border-primary dark:border-green-400 dark:text-stone-50 text-stone-900"
              aria-labelledby={`accordion-heading-${id}`}
            >
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AccordionItem;
