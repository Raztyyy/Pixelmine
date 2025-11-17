import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { showToast } from "../../../utils/Toast";

const API_URL = import.meta.env.VITE_API_URL;

export default function PaymentMethodForm({ token, onAdd }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    const cardElement = elements.getElement(CardElement);
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      showToast(error.message, "error"); // ✅ show error toast
      setLoading(false);
      return;
    }

    try {
      // ✅ Always read token directly from localStorage
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_URL}/api/payment-methods`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // ✅ guaranteed token
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          isDefault: true,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to add card");

      showToast("✅ Card saved successfully!", "success"); // ✅ success toast
      if (onAdd) onAdd(data);

      cardElement.clear();
    } catch (err) {
      console.error("Save card failed:", err);
      showToast(err.message || "Failed to save card", "error"); // ✅ error toast
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
          Card Details
        </label>
        <div className="p-4 transition-all duration-200 border border-gray-300 shadow-sm rounded-xl focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500 dark:bg-stone-700 dark:border-gray-600">
          <CardElement
            options={{
              hidePostalCode: true,
              style: {
                base: {
                  fontSize: "16px",
                  color: "#374151",
                  "::placeholder": {
                    color: "#9ca3af",
                  },
                },
                invalid: {
                  color: "#ef4444",
                },
              },
            }}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading || !stripe}
        className="w-full py-3.5 rounded-xl font-semibold text-white transition-all duration-200 shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-lg"
      >
        {loading ? "Saving..." : "Save Payment Method"}
      </button>
    </form>
  );
}
