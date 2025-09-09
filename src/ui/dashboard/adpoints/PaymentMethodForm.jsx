import { useState } from "react";

function PaymentMethodForm({ userId }) {
  const [formData, setFormData] = useState({
    methodType: "card",
    cardBrand: "",
    cardLast4: "",
    cardExpiry: "",
    gcashNumber: "",
    paypalEmail: "",
    isDefault: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://localhost:3001/api/payment-methods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userId }),
      });
      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error(err);
      alert("Failed to add payment method.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md p-6 mx-auto space-y-5 bg-white shadow-lg rounded-2xl"
    >
      {/* Payment Type */}
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Payment Type
        </label>
        <select
          name="methodType"
          value={formData.methodType}
          onChange={handleChange}
          className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm p-2.5"
        >
          <option value="card">Card</option>
          <option value="gcash">GCash</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>

      {/* Card Fields */}
      {formData.methodType === "card" && (
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Card Brand
            </label>
            <input
              type="text"
              name="cardBrand"
              value={formData.cardBrand}
              onChange={handleChange}
              placeholder="Visa, Mastercard"
              className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm p-2.5"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Last 4 Digits
              </label>
              <input
                type="text"
                name="cardLast4"
                value={formData.cardLast4}
                onChange={handleChange}
                placeholder="1234"
                maxLength={4}
                className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm p-2.5"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Expiry (MM/YYYY)
              </label>
              <input
                type="text"
                name="cardExpiry"
                value={formData.cardExpiry}
                onChange={handleChange}
                placeholder="08/2028"
                className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm p-2.5"
                required
              />
            </div>
          </div>
        </div>
      )}

      {/* GCash */}
      {formData.methodType === "gcash" && (
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            GCash Number
          </label>
          <input
            type="text"
            name="gcashNumber"
            value={formData.gcashNumber}
            onChange={handleChange}
            placeholder="09XXXXXXXXX"
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm p-2.5"
            required
          />
        </div>
      )}

      {/* PayPal */}
      {formData.methodType === "paypal" && (
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            PayPal Email
          </label>
          <input
            type="email"
            name="paypalEmail"
            value={formData.paypalEmail}
            onChange={handleChange}
            placeholder="example@paypal.com"
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-sm p-2.5"
            required
          />
        </div>
      )}

      {/* Default Toggle */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="isDefault"
          checked={formData.isDefault}
          onChange={handleChange}
          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className="text-sm text-gray-700">Set as default</span>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
      >
        Save Payment Method
      </button>
    </form>
  );
}

export default PaymentMethodForm;
