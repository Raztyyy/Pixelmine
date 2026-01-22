import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faCheck } from "@fortawesome/pro-solid-svg-icons";
import { useAuth } from "../../../context/AuthContext";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { Link } from "react-router-dom";

import mastercardImg from "../../../assets/payment-method-icons/mastercard.png";
import { showToast } from "../../../utils/Toast";

const API_URL = import.meta.env.VITE_API_URL;

export default function AdPointsBuy() {
  const [activeTab, setActiveTab] = useState("purchase");
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedScope, setSelectedScope] = useState("area");
  const [maxPoints, setMaxPoints] = useState(365); // Default max points
  const { user } = useAuth();
  const token = localStorage.getItem("token");

  const tabs = [
    { key: "purchase", label: "Purchase Points" },
    { key: "redeem", label: "Redeem Points" },
  ];

  const scopes = [
    { label: "Area", value: "area" },
    { label: "City", value: "city" },
    { label: "Country", value: "country" },
    { label: "Global", value: "global" },
  ];

  // -------------------------------
  // Client-side country detection
  // -------------------------------
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        // Get public IP
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipRes.json();
        // For testing, you can hardcode
        const ip = ipData.ip;
        // const ip = "60.157.95.201";
        console.log("User IP:", ip);

        // Get geolocation from ipgeolocation.io
        const geoRes = await fetch(
          `https://api.ipgeolocation.io/v2/timezone?apiKey=375ffc4cc8c44f4ea5d21f0b1ab973cf&ip=${ip}`
        );
        const geoData = await geoRes.json();
        const country = geoData?.location?.country_name;
        console.log("User Country:", country);

        if (country === "Japan") setMaxPoints(180);
        else setMaxPoints(365);
      } catch (err) {
        console.error("Failed to detect country:", err);
        setMaxPoints(365); // fallback
      }
    };

    fetchCountry();
  }, []);

  return (
    <div className="text-center">
      <h2 className="mt-16 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl dark:text-white">
        Ad Points Top Up
      </h2>
      <p className="max-w-5xl mx-auto mt-5 text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-300">
        Every Ad Point you purchase equals 1 day of promotion, keeping your
        campaigns running smoothly.
      </p>

      {/* Tabs */}
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
          scopes={scopes}
          maxPoints={maxPoints}
        />
      )}

      {activeTab === "redeem" && <RedeemContent />}
    </div>
  );
}

// -------------------------------
// Purchase Content
// -------------------------------
function PurchaseContent({
  selectedPackage,
  setSelectedPackage,
  selectedScope,
  setSelectedScope,
  token,
  scopes,
  maxPoints,
}) {
  const [loading, setLoading] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [customPoints, setCustomPoints] = useState("");
  const [customPointsError, setCustomPointsError] = useState("");
  const [adPointPackages, setAdPointPackages] = useState([]);

  const stripe = useStripe();
  const elements = useElements();

  // Build point packages
  useEffect(() => {
    const packages = [
      { id: 1, points: 10, price: 10 },
      { id: 2, points: 25, price: 25 },
      { id: 3, points: 50, price: 50 },
      { id: 4, points: 100, price: 100 },
      { id: 5, points: 200, price: 200 },
      { id: 6, points: 365, price: 365 },
    ]
      .map((pkg) => ({
        ...pkg,
        points: pkg.points > maxPoints ? maxPoints : pkg.points,
      }))
      .filter(
        (pkg, index, self) =>
          index === self.findIndex((p) => p.points === pkg.points)
      );

    setAdPointPackages(packages);
  }, [maxPoints]);

  // Fetch saved cards
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

  // Custom points input handling
  const handleCustomPointsChange = (value) => {
    let cleaned = value.replace(/\D/g, "");
    if (parseInt(cleaned, 10) > maxPoints) cleaned = String(maxPoints);
    setCustomPoints(cleaned);

    const points = parseInt(cleaned, 10);
    if (!points || points < 1 || points > maxPoints) {
      setCustomPointsError(`Points must be between 1 and ${maxPoints}`);
    } else {
      setCustomPointsError("");
    }
  };

  const handleCustomPointsConfirm = () => {
    const points = parseInt(customPoints, 10);
    if (!points || points <= 0 || points > maxPoints) {
      showToast(`Please enter a valid points amount (1-${maxPoints})`, "error");
      return;
    }
    setSelectedPackage({ id: "custom", points, price: Number(points) });
    setCustomPoints("");
  };

  const handleSelectPredefinedPoints = (pkg) => {
    setSelectedPackage({
      id: pkg.id,
      points: Number(pkg.points),
      price: Number(pkg.points),
    });
  };

  // -------------------------------
  // Buy Now (with absolute_expiry)
  // -------------------------------
  const handleBuyNow = async () => {
    if (!stripe || !selectedPackage || !selectedCard) return;

    const days = Number(selectedPackage.points);
    const absolute_expiry = maxPoints; // Use maxPoints as absolute_expiry
    setLoading(true);

    try {
      // 1️⃣ Create payment intent
      const res = await fetch(`${API_URL}/api/payments/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          amount: Math.round(selectedPackage.price * 100),
          packageId: selectedPackage.id,
          paymentMethodId: selectedCard.stripe_payment_method_id,
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

      // 2️⃣ Purchase ad with absolute_expiry
      if (paymentIntent.status === "succeeded") {
        const adRes = await fetch(`${API_URL}/api/purchase`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            days,
            sync_scope: selectedScope,
            absolute_expiry, // <-- Added here
          }),
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

  return (
    <div>
      {/* Points Selection */}
      <div className="grid grid-cols-1 gap-6 2xl:grid-cols-3">
        {/* Custom Points */}
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
                <div className="flex items-center justify-center w-16 h-16 shadow-lg rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-600">
                  <FontAwesomeIcon icon={faGem} className="text-white size-7" />
                </div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">
                  {selectedPackage.points.toLocaleString()}
                </p>
                <button
                  onClick={() => setSelectedPackage(null)}
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
                    Set the exact number of points you need — max {maxPoints}.
                  </p>
                </div>
                <input
                  type="number"
                  min="1"
                  max={maxPoints}
                  value={customPoints}
                  onChange={(e) => handleCustomPointsChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      if (!customPointsError) handleCustomPointsConfirm();
                    }
                  }}
                  placeholder={`Enter custom points (1-${maxPoints})`}
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

        {/* Predefined Points */}
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

      {/* Scope & Payment Section */}
      {selectedPackage && (
        <ScopeAndPaymentSection
          selectedPackage={selectedPackage}
          selectedScope={selectedScope}
          setSelectedScope={setSelectedScope}
          savedCards={savedCards}
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          handleBuyNow={handleBuyNow}
          loading={loading}
        />
      )}
    </div>
  );
}

// -------------------------------
// Scope & Payment Section (unchanged)
// -------------------------------
function ScopeAndPaymentSection({
  selectedPackage,
  selectedScope,
  setSelectedScope,
  savedCards,
  selectedCard,
  setSelectedCard,
  handleBuyNow,
  loading,
}) {
  const scopes = [
    { label: "Area", value: "area" },
    { label: "City", value: "city" },
    { label: "Country", value: "country" },
    { label: "Global", value: "global" },
  ];

  return (
    <div className="mt-10">
      {/* Scope */}
      <div className="flex flex-col justify-start p-8 text-left bg-white border border-gray-200 shadow-xl rounded-2xl dark:bg-stone-800 dark:border-gray-700">
        <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Select Scope
        </h3>
        <div className="grid grid-cols-1 gap-4 mt-2 sm:grid-cols-2 md:grid-cols-4">
          {scopes.map((s) => (
            <button
              key={s.value}
              onClick={() => setSelectedScope(s.value)}
              className={`p-6 text-center transition-all duration-200 border rounded-2xl shadow-md font-bold ${
                selectedScope === s.value
                  ? "ring-2 ring-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300 text-gray-900 dark:text-white"
                  : "bg-white border-gray-200 hover:border-emerald-300 dark:bg-stone-800 dark:border-gray-700 dark:text-white text-gray-900"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Payment */}
      <div className="flex flex-col justify-start p-8 mt-10 text-left bg-white border border-gray-200 shadow-xl rounded-2xl dark:bg-stone-800 dark:border-gray-700">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          Payment Method
        </h3>

        {savedCards.length === 0 ? (
          <Link
            to="/dashboard/payment-method"
            className="inline-block px-6 py-3 mt-6 font-semibold text-white transition-all duration-200 shadow-md bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-lg"
          >
            Add Payment Method
          </Link>
        ) : (
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
                  {card.is_default && (
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                      <FontAwesomeIcon icon={faCheck} /> Default
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
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
              Total: ${selectedPackage.price.toLocaleString()}
            </p>
          </div>
          <button
            onClick={handleBuyNow}
            disabled={!selectedPackage || !selectedCard || loading}
            className="px-8 py-3.5 font-semibold text-white transition-all duration-200 shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Processing..." : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
}

// -------------------------------
// Redeem Content
// -------------------------------
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
