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

  toast.custom((t) => (
    <div
      className={`bg-white text-stone-800 shadow-md rounded-md p-4 flex items-center justify-between gap-4 w-full max-w-md border-l-4 ${
        type === "success" ? "border-green-500" : "border-red-500"
      }`}
    >
      <div className="flex items-center gap-3">
        <FontAwesomeIcon
          icon={type === "success" ? faCircleCheck : faCircleXmark}
          className={`text-xl ${
            type === "success" ? "text-green-500" : "text-red-500"
          }`}
        />
        <span className="text-base break-words">{safeMessage}</span>
      </div>

      <button
        className="text-xl text-gray-400 hover:text-black"
        onClick={() => toast.dismiss(t?.id)}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    </div>
  ));
}
