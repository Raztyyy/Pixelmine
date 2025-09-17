// frontend/pages/AdPointsBuy.jsx
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faCheck } from "@fortawesome/pro-solid-svg-icons";
import { useAuth } from "../../../context/AuthContext";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";

import mastercardImg from "../../../assets/payment-method-icons/mastercard.png";
import { showToast } from "../../../utils/Toast";

const API_URL = import.meta.env.VITE_API_URL;

const adPointPackages = [
  { id: 1, points: 500, price: 5.0 },
  { id: 2, points: 1000, price: 10.0 },
  { id: 3, points: 2500, price: 25.0 },
  { id: 4, points: 5000, price: 50.0 },
  { id: 5, points: 10000, price: 100.0 },
  { id: 6, points: 15000, price: 150.0 },
  { id: 7, points: 20000, price: 200.0 },
  { id: 8, points: 25000, price: 250.0 },
  { id: 9, points: 30000, price: 300.0 },
];

export default function AdPointsBuy() {
  const [activeTab, setActiveTab] = useState("purchase");
  const [selectedPackage, setSelectedPackage] = useState(null);
  const { user } = useAuth();

  const tabs = [
    { key: "purchase", label: "Purchase Points" },
    { key: "redeem", label: "Redeem Points" },
  ];

  const token = localStorage.getItem("token");

  return (
    <div className="text-center">
      <h2 className="mt-16 text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl">
        Ad Points Top Up
      </h2>
      <p className="max-w-5xl mx-auto mt-5 text-sm text-gray-500 md:text-lg">
        Manage your Ad Points — purchase packages, redeem codes, and keep your
        campaigns running smoothly.
      </p>

      <div className="flex justify-center gap-4 mt-10 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key);
              setSelectedPackage(null);
            }}
            className={`px-4 py-2 text-sm rounded-full bg-white shadow-sm ${
              activeTab === tab.key
                ? "border-primary text-primary font-semibold ring-2 ring-primary bg-green-200/15"
                : "border-transparent text-gray-500 hover:text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "purchase" && token && (
        <PurchaseContent
          selectedPackage={selectedPackage}
          setSelectedPackage={setSelectedPackage}
          token={token}
        />
      )}
      {activeTab === "redeem" && <RedeemContent />}
    </div>
  );
}

function PurchaseContent({ selectedPackage, setSelectedPackage, token }) {
  const [loading, setLoading] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [customPoints, setCustomPoints] = useState("");
  const [pricePerPoint, setPricePerPoint] = useState(0.01);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  // Fetch saved cards and auto-select default
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch(`${API_URL}/api/payment-methods`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setSavedCards(data || []);

        const defaultCard = (data || []).find((c) => c.is_default);
        if (defaultCard) setSelectedCard(defaultCard);
      } catch (err) {
        console.error("Failed to fetch saved cards:", err);
        showToast("Failed to fetch saved cards", "error");
      }
    };
    if (token) fetchCards();
  }, [token]);

  const handleCustomPointsConfirm = () => {
    if (!customPoints || parseInt(customPoints, 10) <= 0) {
      showToast("Please enter a valid points amount", "error");
      return;
    }

    const points = parseInt(customPoints, 10);

    setSelectedPackage({
      id: "custom",
      points,
      price: (points * pricePerPoint).toFixed(2),
    });

    setCustomPoints("");
  };

  const handleSelectPredefinedPoints = (pkg) => {
    setSelectedPackage(pkg);
    setCustomPoints("");
  };

  const handleBuyNow = async () => {
    if (!stripe || !selectedPackage || !selectedCard) return;
    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/payments/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          amount: Math.round(Number(selectedPackage.price) * 100),
          packageId: selectedPackage.id,
          paymentMethodId: selectedCard.stripe_payment_method_id,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to create payment intent");
      }

      const { clientSecret } = await res.json();

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        { payment_method: selectedCard.stripe_payment_method_id }
      );

      if (error) {
        showToast("Payment failed: " + error.message, "error");
      } else if (paymentIntent.status === "succeeded") {
        showToast("Payment successful!", "success");
      }
    } catch (err) {
      console.error(err);
      showToast("Payment failed.", "error");
    } finally {
      setLoading(false);
    }
  };

  // helpers
  const formatCurrency = (v) =>
    Number(v).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const nowString = () => {
    const d = new Date();
    return d.toLocaleString();
  };

  return (
    <div>
      {/* Ad point packages and custom form */}
      <div className="grid grid-cols-1 2xl:gap-2 2xl:grid-cols-3 gap-y-2">
        {/* Custom points form */}
        <div
          className={`flex flex-col items-center justify-center gap-4 p-10 bg-white border rounded-md 2xl:p-5 ${
            selectedPackage?.id === "custom"
              ? "ring-2 ring-primary bg-green-200/20"
              : ""
          }`}
        >
          <div className="flex flex-col w-full max-w-xl gap-3 ">
            {selectedPackage?.id === "custom" ? (
              <div className="flex flex-col items-center gap-2 ">
                <div className="flex flex-col items-center justify-center gap-2 ">
                  <FontAwesomeIcon
                    icon={faGem}
                    className="size-8 text-primary"
                  />
                  <p className="text-2xl font-medium text-stone-900">
                    {selectedPackage.points.toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedPackage(null);
                    setCustomPoints("");
                  }}
                  className="px-4 py-2 mt-5 text-sm border rounded-md text-primary border-primary hover:bg-primary/10"
                >
                  Edit Points
                </button>
              </div>
            ) : (
              <>
                <div>
                  <FontAwesomeIcon
                    icon={faGem}
                    className="w-5 h-5 p-3 mb-2 rounded-full bg-primary text-stone-50 ring-4 ring-green-200/45"
                  />
                  <h3 className="text-xl font-semibold text-stone-900">
                    Custom Top-Up
                  </h3>
                  <p className="text-center text-gray-500 text-sm/6">
                    Set the exact number of points you need — no limits, no
                    waste.
                  </p>
                </div>
                <input
                  id="customPoints"
                  type="number"
                  min="1"
                  value={customPoints}
                  onChange={(e) =>
                    setCustomPoints(e.target.value.replace(/\D/g, ""))
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleCustomPointsConfirm();
                    }
                  }}
                  placeholder="Enter custom points"
                  className="flex-1 p-2 border rounded-md"
                />
                <button
                  onClick={handleCustomPointsConfirm}
                  className="px-4 py-2 text-white rounded-md bg-primary hover:bg-primary/80"
                >
                  Confirm
                </button>
              </>
            )}
          </div>
        </div>

        {/* Predefined packages */}
        <div className="grid grid-cols-3 col-span-2 gap-2 ">
          {adPointPackages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => handleSelectPredefinedPoints(pkg)}
              className={`flex flex-col items-center justify-center gap-2 p-4 leading-none transition-all duration-300 ease-in-out bg-white border rounded-md text-stone-900 min-h-28 hover:bg-green-200/15 hover:ring-2 hover:ring-primary ${
                selectedPackage?.id === pkg.id
                  ? "ring-2 ring-primary bg-green-200/20"
                  : ""
              }`}
            >
              <FontAwesomeIcon icon={faGem} className="size-5 text-primary" />
              <span className="font-medium">{pkg.points.toLocaleString()}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Payment section */}
      {selectedPackage && (
        <div className="flex flex-col justify-start p-6 mt-10 text-left bg-white border rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">
            Payment Method
          </h3>

          {savedCards.length === 0 ? (
            <div className="mt-4">
              <Link
                to="/dashboard/payment-method"
                className="px-6 py-3 text-white rounded-lg bg-primary hover:bg-primary/80"
              >
                Add Payment Method
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-2 mt-4 lg:grid-cols-2 xl:grid-cols-3">
                {savedCards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => setSelectedCard(card)}
                    className={`p-3 border rounded-md flex items-center gap-3 w-full text-left transition h-28 ${
                      selectedCard?.id === card.id
                        ? "ring-2 ring-primary bg-green-100"
                        : "bg-white"
                    }`}
                  >
                    <img
                      src={mastercardImg}
                      alt="card"
                      className="object-contain w-12 h-12"
                    />
                    <div className="flex flex-col">
                      <span>
                        **** **** **** {card.card_last4} ({card.card_brand})
                      </span>
                      {!!card.is_default && (
                        <span className="flex items-center gap-1 text-xs font-semibold text-green-700">
                          <FontAwesomeIcon icon={faCheck} /> Default
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex justify-end gap-4 mt-10">
                <div className="flex flex-col text-end">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faGem}
                      className="size-5 text-primary"
                    />
                    <span className="font-medium">
                      {selectedPackage.points.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Total: ${formatCurrency(selectedPackage.price)}
                  </p>
                </div>
                <button
                  onClick={() => setShowConfirmModal(true)}
                  disabled={!selectedPackage || !selectedCard || loading}
                  className="flex gap-2 group border rounded-lg text-sm text-center items-center transition-all duration-300 ease-in-out px-6 py-3.5 bg-primary text-white border-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Processing..." : "Buy Now"}
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Receipt-like Confirmation Modal */}
      {showConfirmModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45"
          role="dialog"
          aria-modal="true"
          aria-labelledby="receipt-title"
        >
          <div className="w-full max-w-md bg-white shadow-xl rounded-xl ring-1 ring-black/10">
            {/* Header */}
            <div className="px-6 py-4 border-b">
              <div className="flex items-center justify-between text-start">
                <div>
                  <h4 id="receipt-title" className="text-lg font-semibold">
                    Purchase Summary
                  </h4>
                </div>
              </div>
            </div>

            {/* Body / line items */}
            <div className="px-6 py-4">
              <div className="font-mono text-sm text-gray-700">
                <div className="flex justify-between py-2">
                  <span>Ad Points</span>
                  <span>{selectedPackage.points.toLocaleString()}</span>
                </div>
                {/* <div className="flex justify-between py-2">
                  <span>Price</span>
                  <span>${formatCurrency(pricePerPoint)}</span>
                </div> */}
                <div className="flex justify-between py-2">
                  <span>Price</span>
                  <span>${formatCurrency(selectedPackage.price)}</span>
                </div>

                {/* dashed divider */}
                <div className="my-3 border-t border-gray-200 border-dashed" />

                <div className="flex items-center justify-between pt-2">
                  <span className="text-sm font-medium">Total</span>
                  <span className="text-lg font-semibold">
                    ${formatCurrency(selectedPackage.price)}
                  </span>
                </div>
              </div>

              {/* payment details */}
              <div className="mt-4 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Payment method</span>
                  <span className="font-medium">
                    {selectedCard
                      ? `${selectedCard.card_brand} •••• ${selectedCard.card_last4}`
                      : "—"}
                  </span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Date</span>
                  <span>{nowString()}</span>
                </div>
                {/* <div className="flex justify-between mt-2">
                  <span>Txn ID</span>
                  <span className="font-mono text-xs text-gray-500">
                    #{Math.random().toString(36).slice(2, 10)}
                  </span>
                </div> */}
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 text-gray-700 border rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  setShowConfirmModal(false);
                  await handleBuyNow();
                }}
                className="px-4 py-2 text-white rounded-md bg-primary hover:bg-primary/80"
              >
                Confirm & Pay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function RedeemContent() {
  return (
    <div>
      <h2 className="text-lg font-semibold">Redeem Points</h2>
      <p className="mt-2 mb-4 text-gray-600">
        Enter your voucher code to redeem Ad Points instantly.
      </p>
      <div className="flex items-center justify-center gap-2">
        <input
          type="text"
          placeholder="Enter voucher code"
          className="w-full max-w-md p-2.5 border rounded-md"
        />
        <button className="items-center gap-2 px-4 py-3 text-sm text-center text-white transition-all duration-300 ease-in-out border rounded-lg group bg-primary border-primary hover:bg-primary/80">
          Redeem
        </button>
      </div>
    </div>
  );
}
