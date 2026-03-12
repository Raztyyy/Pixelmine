export default function DeleteModal({ open, onClose, onConfirm }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="p-6 bg-white shadow-2xl w-96 rounded-2xl animate-fadeIn">
        <h2 className="mb-3 text-xl font-bold text-gray-900">Delete Comment</h2>
        <p className="mb-6 text-sm text-gray-600">
          Are you sure you want to delete this comment? This action cannot be
          undone.
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2 text-gray-700 border rounded-full hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-5 py-2 text-white bg-red-600 rounded-full hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
