import { useAuth } from "../../../context/AuthContext";
import PaymentMethodForm from "./PaymentMethodForm";

function AdPaymentMethod() {
  const { user } = useAuth();
  console.log(user.id);

  const userId = 1; // replace with your logged-in userId (from JWT/localStorage)

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="mb-4 text-xl font-bold">Add Payment Method</h1>
      <PaymentMethodForm userId={userId} />
    </div>
  );
}

export default AdPaymentMethod;
