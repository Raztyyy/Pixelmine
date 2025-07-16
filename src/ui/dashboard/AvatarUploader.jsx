import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faUser } from "@fortawesome/pro-solid-svg-icons";
import { showToast } from "../../utils/Toast";

const API_URL = import.meta.env.VITE_API_URL;

function AvatarUploader({ currentUrl, onUploaded }) {
  const [isUploading, setIsUploading] = useState(false);

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("avatar", file);

      const res = await fetch(`${API_URL}/api/profile/avatar`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed");

      showToast("Avatar uploaded successfully!", "success");
      onUploaded(data.avatar_url);
    } catch (err) {
      console.error("Avatar upload error:", err);
      showToast(err.message || "Failed to upload avatar", "error");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="relative inline-block group">
      <label className="cursor-pointer">
        {/* Avatar or fallback icon */}
        {currentUrl ? (
          <img
            src={currentUrl}
            alt="Avatar"
            className="object-cover w-24 h-24 transition-opacity duration-200 border rounded-full shadow group-hover:opacity-80"
          />
        ) : (
          <div className="flex items-center justify-center w-24 h-24 text-gray-400 bg-gray-200 border rounded-full shadow group-hover:opacity-80">
            <FontAwesomeIcon icon={faUser} className="w-12 h-12" />
          </div>
        )}

        {/* Hidden file input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarUpload}
          disabled={isUploading}
          className="hidden"
        />

        {/* Overlay upload icon on hover */}
        <div className="absolute inset-0 flex items-center justify-center text-white transition bg-black rounded-full opacity-0 bg-opacity-40 group-hover:opacity-100">
          <FontAwesomeIcon icon={faUpload} className="w-6 h-6" />
        </div>
      </label>

      {/* Optional text below */}
      {isUploading && (
        <p className="mt-2 text-xs text-gray-500">Uploading...</p>
      )}
    </div>
  );
}

export default AvatarUploader;
