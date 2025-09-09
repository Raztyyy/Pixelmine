import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem, faPlus } from "@fortawesome/pro-solid-svg-icons";
import { NavLink } from "react-router-dom";
import gcashImg from "../../../assets/payment-method-icons/gcash.jpeg";
import mastercardImg from "../../../assets/payment-method-icons/mastercard.png";
import paypalImg from "../../../assets/payment-method-icons/paypal.svg";
import { useAuth } from "../../../context/AuthContext";

const API_URL = import.meta.env.VITE_API_URL;

const adPointPackages = [
  { id: 1, points: 500, price: 5 },
  { id: 2, points: 1000, price: 9 },
  { id: 3, points: 2500, price: 20 },
  { id: 4, points: 5000, price: 38 },
  { id: 5, points: 10000, price: 70 },
  { id: 6, points: 15000, price: 100 },
  { id: 7, points: 20000, price: 130 },
  { id: 8, points: 25000, price: 160 },
];

const icons = { card: mastercardImg, gcash: gcashImg, paypal: paypalImg };

export default function AdPointsBuy() {
  const [activeTab, setActiveTab] = useState("purchase");
  const [selectedPackage, setSelectedPackage] = useState(null);
  const { user } = useAuth();
  const userId = user?.id;

  const tabs = [
    { key: "purchase", label: "Purchase Points" },
    { key: "redeem", label: "Redeem Points" },
  ];

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

      {activeTab === "purchase" && userId && (
        <PurchaseContent
          selectedPackage={selectedPackage}
          setSelectedPackage={setSelectedPackage}
          userId={userId}
        />
      )}
      {activeTab === "redeem" && <RedeemContent />}
    </div>
  );
}

function PurchaseContent({ selectedPackage, setSelectedPackage, userId }) {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedMethod, setSelectedMethod] = useState(null);

  useEffect(() => {
    const fetchMethods = async () => {
      try {
        const res = await fetch(`${API_URL}/api/payment-methods/${userId}`);
        const data = await res.json();
        setPaymentMethods(data);

        const defaultMethod = data.find((m) => m.is_default);
        if (defaultMethod) setSelectedMethod(defaultMethod.id);
      } catch (err) {
        console.error(err);
      }
    };
    if (userId) fetchMethods();
  }, [userId]);

  return (
    <div>
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

          <div className="grid grid-cols-1 gap-4 mt-5 xl:grid-cols-4 md:grid-cols-2">
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
                  className={`flex items-center px-4 py-2 border rounded-md transition min-h-24 gap-5 ${
                    selectedMethod === method.id
                      ? "bg-green-200/15 ring-2 ring-primary"
                      : "bg-white hover:bg-green-200/15 hover:ring-2 hover:ring-primary"
                  }`}
                >
                  <button
                    onClick={() => setSelectedMethod(method.id)}
                    className="flex items-center flex-1 w-full gap-4 text-left"
                  >
                    <img
                      src={icon}
                      alt={key}
                      className="object-contain w-12 h-12"
                    />
                    <span>{label}</span>
                  </button>
                </div>
              );
            })}

            <NavLink
              to="/dashboard/payment-method"
              className="flex items-center justify-center gap-4 px-4 py-2 text-sm transition border rounded-md min-h-24 hover:bg-green-200/15 hover:ring-2 hover:ring-primary"
            >
              <FontAwesomeIcon icon={faPlus} className="size-5 text-primary" />
              Add credit/debit card
            </NavLink>
          </div>

          <div className="flex justify-end gap-4 mt-10">
            {selectedMethod && (
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
            )}
            <button
              disabled={!selectedMethod}
              className="flex gap-2 group border rounded-lg text-sm text-center items-center transition-all duration-300 ease-in-out px-6 py-3.5 bg-primary text-white border-primary hover:bg-primary/80 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Buy Now
            </button>
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
