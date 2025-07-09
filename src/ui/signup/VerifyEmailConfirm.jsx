import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function VerifyEmailConfirm() {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("Verifying email...");
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setMessage("Token missing.");
      return;
    }

    // 🔁 Request backend to verify token
    fetch(`https://pixelmine.org:3001/api/verify-email/confirm?token=${token}`)
      .then((res) => {
        if (res.redirected) {
          window.location.href = res.url;
        } else {
          return res.text().then(setMessage);
        }
      })
      .catch(() => {
        setMessage("Verification failed. Try again.");
      });
  }, [searchParams]);

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-5rem)]">
      <div className="p-4 text-center bg-gray-100 rounded shadow dark:bg-stone-800">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          {message}
        </h2>
      </div>
    </div>
  );
}

export default VerifyEmailConfirm;
