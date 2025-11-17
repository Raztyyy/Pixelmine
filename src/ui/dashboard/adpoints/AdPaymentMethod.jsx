import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck, faPlus } from "@fortawesome/pro-solid-svg-icons";
import { useAuth } from "../../../context/AuthContext";
import PaymentMethodForm from "./PaymentMethodForm";
import AdPointsModal from "./AdPointsModal";

import mastercardImg from "../../../assets/payment-method-icons/mastercard.png";
import visaImg from "../../../assets/payment-method-icons/mastercard.png";
import genericCardImg from "../../../assets/payment-method-icons/mastercard.png";
import { showToast } from "../../../utils/Toast";

const API_URL = import.meta.env.VITE_API_URL;

export default function AdPaymentMethod() {
  const { user } = useAuth();
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [loadingDefault, setLoadingDefault] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const token = localStorage.getItem("token");

  // Fetch saved cards
  useEffect(() => {
    if (!token) return;
    const fetchPaymentMethods = async () => {
      try {
        const res = await fetch(`${API_URL}/api/payment-methods`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setPaymentMethods(
          data.map((m) => ({ ...m, is_default: !!m.is_default }))
        );
      } catch (err) {
        console.error("Failed to fetch payment methods:", err);
        showToast("Failed to fetch payment methods", "error");
      }
    };
    fetchPaymentMethods();
  }, [token]);

  // Add new payment method
  const handleNewPaymentMethod = (newMethod) => {
    setPaymentMethods((prev) => {
      if (newMethod.is_default) {
        return [newMethod, ...prev.map((m) => ({ ...m, is_default: false }))];
      }
      return [...prev, newMethod];
    });
  };

  // Open delete confirmation modal
  const openDeleteConfirmation = (id) => {
    setDeleteTarget(id);
    setShowDeleteModal(true);
  };

  // Delete payment method
  const handleDelete = async () => {
    if (!deleteTarget) return;

    try {
      const res = await fetch(
        `${API_URL}/api/payment-methods/${deleteTarget}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Delete failed");
      setPaymentMethods((prev) => prev.filter((m) => m.id !== deleteTarget));
      showToast("Payment method deleted successfully", "success");
    } catch (err) {
      console.error(err);
      showToast(err.message || "Failed to delete payment method", "error");
    } finally {
      setShowDeleteModal(false);
      setDeleteTarget(null);
    }
  };

  // Set default payment method
  const handleSetDefault = async (id) => {
    setLoadingDefault(id);
    try {
      const res = await fetch(`${API_URL}/api/payment-methods/default/${id}`, {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to set default");
      setPaymentMethods((prev) =>
        prev.map((m) => ({ ...m, is_default: m.id === id }))
      );
      showToast("Default payment method updated", "success");
    } catch (err) {
      console.error(err);
      showToast(err.message || "Failed to set default payment method", "error");
    } finally {
      setLoadingDefault(null);
    }
  };

  // Select proper card image
  const getCardImage = (brand) => {
    if (!brand) return genericCardImg;
    switch (brand.toLowerCase()) {
      case "visa":
        return visaImg;
      case "mastercard":
        return mastercardImg;
      default:
        return genericCardImg;
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Payment Methods
        </h1>
        <button
          onClick={() => setShowFormModal(true)}
          className="flex items-center gap-2 px-5 py-3 font-semibold text-white transition-all duration-200 shadow-md bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg"
        >
          <FontAwesomeIcon icon={faPlus} />
          Add Card
        </button>
      </div>

      {!!paymentMethods.length ? (
        <div className="flex flex-col gap-4 mt-6">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`flex flex-col justify-between p-6 border border-gray-200 shadow-lg transition-all duration-200 rounded-2xl dark:border-gray-700 dark:bg-stone-800 ${
                method.is_default
                  ? "ring-2 ring-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                  : "bg-white hover:border-emerald-300 dark:hover:border-emerald-600"
              }`}
            >
              <div className="flex items-center gap-4">
                <img
                  src={getCardImage(method.card_brand)}
                  alt={method.card_brand || "card"}
                  className="object-contain w-14 h-14"
                />
                <div className="flex flex-col flex-1">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {method.card_brand} (****{method.card_last4})
                  </span>
                  {method.is_default && (
                    <span className="flex items-center gap-1.5 mt-1 text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                      <FontAwesomeIcon icon={faCheck} /> Default
                    </span>
                  )}
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-5">
                {!method.is_default && (
                  <button
                    disabled={loadingDefault === method.id}
                    onClick={() => handleSetDefault(method.id)}
                    className={`px-4 py-2 text-sm font-semibold text-white transition-all duration-200 rounded-lg shadow-md ${
                      loadingDefault === method.id
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg"
                    }`}
                  >
                    {loadingDefault === method.id
                      ? "Updating..."
                      : "Set Default"}
                  </button>
                )}
                <button
                  onClick={() => openDeleteConfirmation(method.id)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 bg-red-600 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg"
                >
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-white border border-gray-200 shadow-lg rounded-2xl dark:bg-stone-800 dark:border-gray-700">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            No saved payment methods yet.
          </p>
          <button
            onClick={() => setShowFormModal(true)}
            className="inline-block px-6 py-3 mt-4 font-semibold text-white transition-all duration-200 shadow-md bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg"
          >
            Add Your First Card
          </button>
        </div>
      )}

      {/* Add card modal */}
      {showFormModal && (
        <AdPointsModal onClose={() => setShowFormModal(false)}>
          <PaymentMethodForm
            token={token}
            onAdd={(method) => {
              handleNewPaymentMethod(method);
              setShowFormModal(false);
            }}
          />
        </AdPointsModal>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-md bg-white shadow-2xl dark:bg-stone-800 rounded-2xl">
            {/* Header */}
            <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                Confirm Deletion
              </h4>
            </div>

            {/* Body */}
            <div className="px-6 py-6">
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                Are you sure you want to remove this payment method? This action
                cannot be undone.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 px-6 py-5 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeleteTarget(null);
                }}
                className="px-5 py-2.5 font-semibold text-gray-700 transition-colors border-2 border-gray-300 rounded-xl hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-stone-700"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-5 py-2.5 font-semibold text-white transition-all duration-200 bg-red-600 rounded-xl hover:bg-red-700 shadow-md hover:shadow-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
