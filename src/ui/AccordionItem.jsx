import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

function AccordionItem({ id, title, content, isOpen, toggle }) {
  const { language } = useLanguage(); // "en" or "jp"

  // Determine what to render: either string/JSX directly or object with {en,jp}
  const renderTitle = typeof title === "object" ? title[language] : title;
  const renderContent =
    typeof content === "object" ? content[language] : content;

  return (
    <div className="relative overflow-hidden transition-all duration-500 bg-white border border-gray-200 group rounded-3xl dark:bg-stone-900 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-700">
      {/* Top gradient line */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 transition-all duration-500 ${
          isOpen
            ? "opacity-100 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-600"
            : "opacity-0 bg-gradient-to-r from-gray-300 to-gray-400"
        }`}
      ></div>

      {/* Animated background pattern */}
      <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.05),transparent)]"></div>
      </div>

      <h2 id={`accordion-heading-${id}`} className="relative">
        <button
          type="button"
          className="relative flex items-center justify-between w-full gap-6 px-8 text-left transition-all duration-300 py-7"
          aria-expanded={isOpen}
          aria-controls={`accordion-body-${id}`}
          onClick={toggle}
        >
          {/* Number badge */}
          <div
            className={`flex items-center justify-center flex-shrink-0 w-12 h-12 text-sm font-bold transition-all duration-500 rounded-2xl ${
              isOpen
                ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/30 scale-110"
                : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 dark:group-hover:bg-emerald-900/20 dark:group-hover:text-emerald-400"
            }`}
          >
            {String(id + 1).padStart(2, "0")}
          </div>

          {/* Title */}
          <span
            className={`flex-1 text-lg font-bold tracking-tight transition-all duration-300 sm:text-xl ${
              isOpen
                ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400"
                : "text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
            }`}
          >
            {renderTitle}
          </span>

          {/* Arrow icon - minimal circle design */}
          <div
            className={`flex items-center justify-center flex-shrink-0 w-10 h-10 transition-all duration-500 border-2 rounded-full ${
              isOpen
                ? "border-emerald-500 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-900/20"
                : "border-gray-300 dark:border-gray-700 group-hover:border-emerald-400 dark:group-hover:border-emerald-600"
            }`}
          >
            <motion.svg
              animate={{ rotate: isOpen ? 0 : 180 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className={`w-5 h-5 transition-colors duration-300 ${
                isOpen
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-gray-500 dark:text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
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
            </motion.svg>
          </div>
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
              className="relative px-8 pt-2 pb-8"
              aria-labelledby={`accordion-heading-${id}`}
            >
              {/* Divider line with dots */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-200 via-teal-200 to-transparent dark:from-emerald-900 dark:via-teal-900"></div>
              </div>

              {/* Content with elegant spacing */}
              <div className="space-y-4 ml-14">
                <div className="text-base leading-loose text-gray-700 dark:text-gray-300">
                  {renderContent}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom shadow accent when open */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 rounded-b-3xl ${
          isOpen
            ? "opacity-100 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
            : "opacity-0"
        }`}
      ></div>
    </div>
  );
}

export default AccordionItem;
