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
const API_PURCHASE_URL = import.meta.env.VITE_API_PURCHASE_URL;

const adPointPackages = [
  { id: 1, points: 10, price: 10 },
  { id: 2, points: 25, price: 25 },
  { id: 3, points: 50, price: 50 },
  { id: 4, points: 100, price: 100 },
  { id: 5, points: 200, price: 200 },
  { id: 6, points: 365, price: 365 },
];

export default function AdPointsBuy() {
  const [activeTab, setActiveTab] = useState("purchase");
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedScope, setSelectedScope] = useState("area"); // scope dropdown
  const { user } = useAuth();

  const tabs = [
    { key: "purchase", label: "Purchase Points" },
    { key: "redeem", label: "Redeem Points" },
  ];

  const token = localStorage.getItem("token");

  return (
    <div className="text-center">
      <h2 className="mt-16 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
        Ad Points Top Up
      </h2>
      <p className="max-w-5xl mx-auto mt-5 text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-300">
        Every Ad Point you purchase equals 1 day of promotion, keeping your
        campaigns running smoothly.
      </p>

      <div className="flex justify-center gap-3 mt-10 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key);
              setSelectedPackage(null);
            }}
            className={`px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${
              activeTab === tab.key
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 dark:bg-stone-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-stone-700"
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
          selectedScope={selectedScope}
          setSelectedScope={setSelectedScope}
          token={token}
        />
      )}
      {activeTab === "redeem" && <RedeemContent />}
    </div>
  );
}

function PurchaseContent({
  selectedPackage,
  setSelectedPackage,
  selectedScope,
  setSelectedScope,
  token,
}) {
  const [loading, setLoading] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [customPoints, setCustomPoints] = useState("");
  const [customPointsError, setCustomPointsError] = useState("");
  const [pricePerPoint, setPricePerPoint] = useState(1);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const scopeMultipliers = {
    area: 1,
    city: 2,
    country: 3,
    global: 4,
  };

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

  // === NEW: Update price when scope changes ===
  useEffect(() => {
    if (selectedPackage) {
      setSelectedPackage((prev) => ({
        ...prev,
        price: Number(prev.points * scopeMultipliers[selectedScope]),
      }));
    }
  }, [selectedScope]);

  const handleCustomPointsChange = (value) => {
    let cleaned = value.replace(/\D/g, "");
    if (parseInt(cleaned, 10) > 365) cleaned = "365";

    setCustomPoints(cleaned);

    const points = parseInt(cleaned, 10);
    if (!points || points < 1 || points > 365) {
      setCustomPointsError("Points must be between 1 and 365");
    } else {
      setCustomPointsError("");
    }
  };

  const handleCustomPointsConfirm = () => {
    const points = parseInt(customPoints, 10);

    if (!points || points <= 0 || points > 365) {
      showToast("Please enter a valid points amount (1-365)", "error");
      return;
    }

    setSelectedPackage({
      id: "custom",
      points: points,
      price: Number(points * scopeMultipliers[selectedScope]),
    });

    setCustomPoints("");
  };

  const handleSelectPredefinedPoints = (pkg) => {
    setSelectedPackage({
      id: pkg.id,
      points: Number(pkg.points),
      price: Number(pkg.points * scopeMultipliers[selectedScope]),
    });

    setCustomPoints("");
    setCustomPointsError("");
  };

  const handleBuyNow = async () => {
    if (!stripe || !selectedPackage || !selectedCard) return;

    const days = Number(selectedPackage.points);
    const amount = Number(selectedPackage.price);

    if (!days || isNaN(days) || !amount || isNaN(amount)) {
      showToast("Invalid package selected", "error");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/payments/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          amount: Math.round(amount * 100),
          packageId: selectedPackage.id,
          paymentMethodId: selectedCard.stripe_payment_method_id,
          scope: selectedScope, // include scope
        }),
      });

      if (!res.ok) throw new Error("Failed to create payment intent");

      const { clientSecret } = await res.json();

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: selectedCard.stripe_payment_method_id,
        }
      );

      if (error) {
        showToast("Payment failed: " + error.message, "error");
        return;
      }

      if (paymentIntent.status === "succeeded") {
        const adRes = await fetch(`${API_URL}/api/purchase`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ days, scope: selectedScope }),
        });

        if (!adRes.ok) throw new Error("Ad purchase failed");

        const adData = await adRes.json();
        console.log("Ad purchased:", adData);
        showToast(
          "Payment successful! ad.key has been downloaded to your Downloads folder.",
          "success"
        );

        const blob = new Blob([JSON.stringify(adData, null, 2)], {
          type: "application/json",
        });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "ad.key";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (err) {
      console.error(err);
      showToast(err.message || "Payment or ad purchase failed", "error");
    } finally {
      setLoading(false);
    }
  };

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
      {/* Points Cards Section */}
      <div className="grid grid-cols-1 gap-6 2xl:grid-cols-3">
        <div
          className={`flex flex-col items-center justify-center gap-4 p-8 bg-white border rounded-2xl shadow-lg transition-all duration-200 dark:bg-stone-800 dark:border-gray-700 ${
            selectedPackage?.id === "custom"
              ? "ring-2 ring-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
              : "border-gray-200"
          }`}
        >
          <div className="flex flex-col w-full max-w-xl gap-4">
            {selectedPackage?.id === "custom" ? (
              <div className="flex flex-col items-center gap-3">
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center justify-center w-16 h-16 shadow-lg rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600">
                    <FontAwesomeIcon
                      icon={faGem}
                      className="text-white size-7"
                    />
                  </div>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">
                    {selectedPackage.points.toLocaleString()}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedPackage(null);
                    setCustomPoints("");
                    setCustomPointsError("");
                  }}
                  className="px-6 py-2.5 mt-5 text-sm font-semibold border-2 rounded-xl text-emerald-600 border-emerald-600 hover:bg-emerald-50 dark:text-emerald-400 dark:border-emerald-400 dark:hover:bg-emerald-900/20 transition-colors"
                >
                  Edit Points
                </button>
              </div>
            ) : (
              <>
                <div className="text-center">
                  <div className="flex items-center justify-center mx-auto mb-4 shadow-lg w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600">
                    <FontAwesomeIcon
                      icon={faGem}
                      className="text-white size-6"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Custom Top-Up
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    Set the exact number of points you need — max 365.
                  </p>
                </div>
                <input
                  id="customPoints"
                  type="number"
                  min="1"
                  max="365"
                  value={customPoints}
                  onChange={(e) => handleCustomPointsChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      if (!customPointsError) handleCustomPointsConfirm();
                    }
                  }}
                  placeholder="Enter custom points"
                  className="flex-1 p-3 transition-all duration-200 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white"
                />
                {customPointsError && (
                  <p className="mt-1 text-sm text-red-500">
                    {customPointsError}
                  </p>
                )}
                <button
                  onClick={handleCustomPointsConfirm}
                  disabled={!!customPointsError || !customPoints}
                  className="px-6 py-3 font-semibold text-white transition-all duration-200 shadow-md bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Confirm
                </button>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 col-span-2 gap-3">
          {adPointPackages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => handleSelectPredefinedPoints(pkg)}
              className={`flex flex-col items-center justify-center gap-3 p-6 leading-none transition-all duration-200 bg-white border shadow-md rounded-2xl min-h-32 dark:bg-stone-800 ${
                selectedPackage?.id === pkg.id
                  ? "ring-2 ring-emerald-500 bg-emerald-50 border-emerald-300 dark:bg-emerald-900/20 dark:border-emerald-600"
                  : "border-gray-200 hover:border-emerald-300 hover:shadow-lg dark:border-gray-700"
              }`}
            >
              <FontAwesomeIcon
                icon={faGem}
                className="text-emerald-600 size-5"
              />
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                {pkg.points.toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Scope Selection Cards */}
      <div className="p-8 mt-10 mb-6 bg-white border border-gray-200 shadow-xl dark:bg-stone-900 rounded-xl dark:border-gray-700 rounded-2xl">
        <div className="pb-4 ">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white text-start">
            Promotion Scope
          </h2>
        </div>

        <div className="pt-2">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { key: "area", label: "Area" },
              { key: "city", label: "City" },
              { key: "country", label: "Country" },
              { key: "global", label: "Global" },
            ].map((scope) => (
              <button
                key={scope.key}
                onClick={() => setSelectedScope(scope.key)}
                className={`flex items-center justify-center px-4 py-6 text-center rounded-2xl shadow-md transition-all duration-200 font-semibold text-gray-900 dark:text-white ${
                  selectedScope === scope.key
                    ? "ring-2 ring-emerald-500 bg-emerald-50 dark:bg-emerald-900/20"
                    : "bg-white border border-gray-200 hover:ring-2 hover:ring-emerald-300 dark:bg-stone-800 dark:border-gray-700"
                }`}
              >
                {scope.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Payment section */}
      {selectedPackage && (
        <div className="flex flex-col justify-start p-8 mt-10 text-left bg-white border border-gray-200 shadow-xl rounded-2xl dark:bg-stone-800 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Payment Method
          </h3>

          {savedCards.length === 0 ? (
            <div className="mt-6">
              <Link
                to="/dashboard/payment-method"
                className="inline-block px-6 py-3 font-semibold text-white transition-all duration-200 shadow-md bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg"
              >
                Add Payment Method
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 mt-6 lg:grid-cols-2 xl:grid-cols-3">
                {savedCards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => setSelectedCard(card)}
                    className={`p-4 border rounded-xl flex items-center gap-4 w-full text-left transition-all duration-200 h-28 shadow-md ${
                      selectedCard?.id === card.id
                        ? "ring-2 ring-emerald-500 bg-emerald-50 border-emerald-300 dark:bg-emerald-900/20 dark:border-emerald-600"
                        : "bg-white border-gray-200 hover:border-emerald-300 dark:bg-stone-800 dark:border-gray-700"
                    }`}
                  >
                    <img
                      src={mastercardImg}
                      alt="card"
                      className="object-contain w-12 h-12"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-gray-900 dark:text-white">
                        **** **** **** {card.card_last4}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {card.card_brand}
                      </span>
                      {!!card.is_default && (
                        <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                          <FontAwesomeIcon icon={faCheck} /> Default
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex flex-col items-end gap-6 mt-10 lg:flex-row lg:justify-end">
                <div className="flex flex-col gap-2 text-end">
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon
                      icon={faGem}
                      className="text-emerald-600 size-5 dark:text-emerald-400"
                    />
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {selectedPackage.points.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-base font-semibold text-gray-700 dark:text-gray-300">
                    Total: ${formatCurrency(selectedPackage.price)}
                  </p>
                </div>
                <button
                  onClick={() => setShowConfirmModal(true)}
                  disabled={!selectedPackage || !selectedCard || loading}
                  className="px-8 py-3.5 font-semibold text-white transition-all duration-200 shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Processing..." : "Buy Now"}
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Confirm modal */}
      {showConfirmModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="receipt-title"
        >
          <div className="w-full max-w-md bg-white shadow-2xl dark:bg-stone-800 rounded-2xl">
            <div className="px-6 py-5 border-b border-gray-200 dark:border-gray-700">
              <h4
                id="receipt-title"
                className="text-xl font-bold text-gray-900 dark:text-white"
              >
                Purchase Summary
              </h4>
            </div>

            <div className="px-6 py-6">
              <div className="text-sm text-gray-700 dark:text-gray-300">
                <div className="flex justify-between py-3">
                  <span className="font-medium">Ad Points</span>
                  <span className="font-semibold">
                    {selectedPackage.points.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="font-medium">Price</span>
                  <span className="font-semibold">
                    ${formatCurrency(selectedPackage.price)}
                  </span>
                </div>
                <div className="my-4 border-t-2 border-gray-200 border-dashed dark:border-gray-700" />
                <div className="flex items-center justify-between pt-3">
                  <span className="text-base font-semibold text-gray-900 dark:text-white">
                    Total
                  </span>
                  <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                    ${formatCurrency(selectedPackage.price)}
                  </span>
                </div>
              </div>

              <div className="p-4 mt-6 border border-gray-200 bg-gray-50 dark:bg-stone-700 dark:border-gray-600 rounded-xl">
                <div className="flex justify-between mb-3 text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    Payment method
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {selectedCard
                      ? `${selectedCard.card_brand} •••• ${selectedCard.card_last4}`
                      : "—"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Date</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {nowString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 px-6 py-5 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-6 py-2.5 font-semibold text-gray-700 transition-colors border border-gray-300 rounded-xl hover:bg-gray-50 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-stone-700"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  setShowConfirmModal(false);
                  await handleBuyNow();
                }}
                className="px-6 py-2.5 font-semibold text-white transition-all duration-200 shadow-md bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg"
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
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Redeem Points
      </h2>
      <p className="mt-3 mb-6 text-base text-gray-600 dark:text-gray-300">
        Enter your voucher code to redeem Ad Points instantly.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          type="text"
          placeholder="Enter voucher code"
          className="flex-1 p-3 transition-all duration-200 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-stone-700 dark:border-gray-600 dark:text-white"
        />
        <button className="px-6 py-3 font-semibold text-white transition-all duration-200 shadow-md bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg">
          Redeem
        </button>
      </div>
    </div>
  );
}
