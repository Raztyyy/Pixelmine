import { createPortal } from "react-dom";

export default function AdPointsModal({ children, onClose }) {
  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-lg p-6 bg-white shadow-lg rounded-xl">
        <button
          onClick={onClose}
          className="absolute text-xl font-bold text-gray-500 top-3 right-3 hover:text-gray-800"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
