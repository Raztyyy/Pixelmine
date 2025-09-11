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
  { id: 1, points: 500, price: 5 },
  { id: 2, points: 1000, price: 9 },
  { id: 3, points: 2500, price: 20 },
  { id: 4, points: 5000, price: 38 },
  { id: 5, points: 10000, price: 70 },
  { id: 6, points: 15000, price: 100 },
  { id: 7, points: 20000, price: 130 },
  { id: 8, points: 25000, price: 2000 },
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

        // Auto-select default card
        const defaultCard = (data || []).find((c) => c.is_default);
        if (defaultCard) setSelectedCard(defaultCard);
      } catch (err) {
        console.error("Failed to fetch saved cards:", err);
        showToast("Failed to fetch saved cards", "error");
      }
    };
    if (token) fetchCards();
  }, [token]);

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
          amount: selectedPackage.price * 100,
          packageId: selectedPackage.id,
          paymentMethodId: selectedCard.stripe_payment_method_id,
        }),
      });

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

  return (
    <div>
      {/* Ad point packages */}
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {adPointPackages.map((pkg) => (
          <button
            key={pkg.id}
            onClick={() => setSelectedPackage(pkg)}
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

      {selectedPackage && (
        <div className="flex flex-col justify-start p-6 mt-10 text-left bg-white border rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">
            Payment Method
          </h3>

          {/* No cards saved → show link */}
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
                    Total: $ {selectedPackage.price}
                  </p>
                </div>
                <button
                  onClick={handleBuyNow}
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
