import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck, faPlus } from "@fortawesome/pro-solid-svg-icons";
import { useAuth } from "../../../context/AuthContext";
import PaymentMethodForm from "./PaymentMethodForm";

import gcashImg from "../../../assets/payment-method-icons/gcash.jpeg";
import mastercardImg from "../../../assets/payment-method-icons/mastercard.png";
import paypalImg from "../../../assets/payment-method-icons/paypal.svg";
import AdPointsModal from "./AdPointsModal";

const API_URL = import.meta.env.VITE_API_URL;

const icons = {
  card: mastercardImg,
  gcash: gcashImg,
  paypal: paypalImg,
};

export default function AdPaymentMethod() {
  const { user } = useAuth();
  const userId = user?.id;
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [loadingDefault, setLoadingDefault] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);

  useEffect(() => {
    if (!userId) return;

    const fetchPaymentMethods = async () => {
      try {
        const res = await fetch(`${API_URL}/api/payment-methods/${userId}`);
        const data = await res.json();
        setPaymentMethods(
          data.map((m) => ({ ...m, is_default: !!m.is_default }))
        );
      } catch (err) {
        console.error("Failed to fetch payment methods:", err);
      }
    };

    fetchPaymentMethods();
  }, [userId]);

  const handleNewPaymentMethod = (newMethod) => {
    setPaymentMethods((prev) => {
      let updated = prev;
      if (newMethod.is_default) {
        updated = prev.map((m) => ({ ...m, is_default: false }));
        return [newMethod, ...updated];
      }
      return [...prev, newMethod];
    });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to remove this method?")) return;
    try {
      const res = await fetch(`${API_URL}/api/payment-methods/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Delete failed");
      setPaymentMethods((prev) => prev.filter((m) => m.id !== id));
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to delete payment method");
    }
  };

  const handleSetDefault = async (id) => {
    setLoadingDefault(id);
    try {
      const res = await fetch(`${API_URL}/api/default/${id}`, {
        method: "PATCH",
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to set default");
      setPaymentMethods((prev) =>
        prev.map((m) => ({ ...m, is_default: m.id === id }))
      );
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to set default payment method");
    } finally {
      setLoadingDefault(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Payment Methods</h1>
        <button
          onClick={() => setShowFormModal(true)}
          className="flex items-center gap-2 px-4 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <FontAwesomeIcon icon={faPlus} /> Add Payment Method
        </button>
      </div>

      {!!paymentMethods.length && (
        <div className="flex flex-col gap-4 mt-4">
          {paymentMethods.map((method) => {
            const key = method.method_type?.toLowerCase().trim();
            const icon = icons[key] || mastercardImg;

            let label = "";
            if (key === "card")
              label = `${method.card_brand || "Card"} (****${
                method.card_last4
              })`;
            else if (key === "gcash")
              label = `GCash (****${String(method.gcash_number).slice(-4)})`;
            else if (key === "paypal")
              label = `PayPal (${method.paypal_email})`;

            return (
              <div
                key={method.id}
                className={`flex flex-col justify-between p-4 border rounded-lg shadow-sm transition hover:ring-2 hover:ring-primary ${
                  method.is_default ? "ring-2 ring-green-500" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={icon}
                    alt={key}
                    className="object-contain w-12 h-12"
                  />
                  <div className="flex flex-col flex-1">
                    <span className="font-medium">{label}</span>
                    {method.is_default ? (
                      <span className="flex items-center gap-1 mt-1 text-xs font-semibold text-green-700">
                        <FontAwesomeIcon icon={faCheck} /> Default
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-4">
                  {!method.is_default && (
                    <button
                      disabled={loadingDefault === method.id}
                      onClick={() => handleSetDefault(method.id)}
                      className={`px-3 py-1 text-xs font-medium text-white rounded-md ${
                        loadingDefault === method.id
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-600"
                      }`}
                    >
                      {loadingDefault === method.id
                        ? "Updating..."
                        : "Set as Default"}
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(method.id)}
                    className="px-3 py-1 text-xs font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
                  >
                    <FontAwesomeIcon icon={faTrash} /> Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Modal */}
      {showFormModal && (
        <AdPointsModal onClose={() => setShowFormModal(false)}>
          <PaymentMethodForm
            userId={userId}
            onAdd={(method) => {
              handleNewPaymentMethod(method);
              setShowFormModal(false);
            }}
          />
        </AdPointsModal>
      )}
    </div>
  );
}
