import { useState, useRef } from "react";
import Button from "../Button";

function BioModal({ memberDetails, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <Button variant="primary" size="sm" onClick={() => setIsOpen(true)}>
        {children}
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          role="dialog"
          aria-modal="true"
          onClick={handleBackdropClick}
        >
          <div
            ref={modalRef}
            className="relative w-full max-w-md p-6 bg-white rounded-lg shadow dark:bg-gray-700 "
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={memberDetails.image}
                alt={`${memberDetails.name}'s image`}
                className="w-48 h-48 rounded-full"
              />
              <h2 className="mt-4 text-xl font-semibold text-gray-900">
                {memberDetails.name}
              </h2>
              <p className="text-gray-600">{memberDetails.title}</p>
              <hr className="mx-auto mt-2 mb-4 border-b-4 w-14 border-primary" />

              <p className="mt-4 text-sm text-gray-700">{memberDetails.bio}</p>

              <Button
                className="flex items-center justify-center w-full mt-5 "
                variant="primary"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BioModal;
