import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faXmark,
} from "@fortawesome/pro-solid-svg-icons";

export function showToast(message, type = "success") {
  const safeMessage =
    typeof message === "string"
      ? message
      : typeof message?.message === "string"
      ? message.message
      : JSON.stringify(message || "Something went wrong");

  toast.custom(
    (t) => (
      <div
        className={`relative overflow-hidden bg-white dark:bg-stone-800 shadow-2xl rounded-2xl p-5 flex items-start justify-between gap-4 w-full max-w-md border-2 transition-all duration-300 ${
          type === "success"
            ? "border-emerald-200 dark:border-emerald-800"
            : "border-red-200 dark:border-red-800"
        }`}
        style={{
          animation: "none",
        }}
      >
        {/* Gradient background overlay */}
        <div
          className={`absolute inset-0 opacity-5 ${
            type === "success"
              ? "bg-gradient-to-br from-emerald-500 to-teal-500"
              : "bg-gradient-to-br from-red-500 to-orange-500"
          }`}
        ></div>

        {/* Decorative corner accent */}
        <div
          className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-20 -mr-8 -mt-8 ${
            type === "success" ? "bg-emerald-500" : "bg-red-500"
          }`}
        ></div>

        <div className="relative flex items-start flex-1 min-w-0 gap-4">
          {/* Icon with gradient background */}
          <div
            className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl shadow-lg transition-transform duration-300 ${
              type === "success"
                ? "bg-gradient-to-br from-emerald-500 to-teal-500"
                : "bg-gradient-to-br from-red-500 to-orange-500"
            }`}
          >
            <FontAwesomeIcon
              icon={type === "success" ? faCircleCheck : faCircleXmark}
              className="text-2xl text-white"
            />
          </div>

          {/* Message content */}
          <div className="flex flex-col flex-1 min-w-0 gap-1 pt-1">
            <p className="text-sm font-bold text-gray-900 dark:text-white">
              {type === "success" ? "Success!" : "Error"}
            </p>
            <p className="text-sm leading-relaxed text-gray-700 break-words dark:text-gray-300">
              {safeMessage}
            </p>
          </div>
        </div>

        {/* Close button */}
        <button
          type="button"
          className="relative flex items-center justify-center flex-shrink-0 w-8 h-8 text-gray-400 transition-all duration-200 rounded-lg hover:text-gray-900 dark:text-gray-500 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-stone-700 group"
          onClick={(e) => {
            e.stopPropagation();
            toast.dismiss(t.id);
          }}
        >
          <FontAwesomeIcon
            icon={faXmark}
            className="text-base transition-transform duration-200 group-hover:rotate-90"
          />
        </button>

        {/* Progress bar */}
        <div
          className={`absolute bottom-0 left-0 h-1 rounded-bl-2xl transition-all ${
            type === "success"
              ? "bg-gradient-to-r from-emerald-500 to-teal-500"
              : "bg-gradient-to-r from-red-500 to-orange-500"
          }`}
          style={{
            width: "100%",
            animation: "shrink 5s linear forwards",
          }}
        ></div>

        <style>{`
          @keyframes shrink {
            from {
              width: 100%;
            }
            to {
              width: 0%;
            }
          }
        `}</style>
      </div>
    ),
    {
      duration: 5000,
      position: "top-center",
      style: { animation: "none" },
    }
  );
}
