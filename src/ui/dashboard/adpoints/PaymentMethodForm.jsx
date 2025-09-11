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
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">
        Card Details
      </label>
      <div className="p-3 border rounded-md">
        <CardElement options={{ hidePostalCode: true }} />
      </div>

      <button
        type="submit"
        disabled={loading || !stripe}
        className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        {loading ? "Saving..." : "Save Payment Method"}
      </button>
    </form>
  );
}
