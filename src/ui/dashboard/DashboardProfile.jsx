import placeholderAvatar from "../../assets/profile-placeholder-img.jpg";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faBuilding,
  faMapMarkerAlt,
  faBriefcase,
  faGlobe,
  faPen,
  faUpload,
  faPlus,
  faTimes,
} from "@fortawesome/pro-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { showToast } from "../../utils/Toast";
import { useAuth } from "../../context/AuthContext";

const API_URL = import.meta.env.VITE_API_URL;

const SOCIAL_PLATFORMS = [
  { name: "LinkedIn", icon: faLinkedin },
  { name: "Twitter", icon: faTwitter },
  { name: "GitHub", icon: faGithub },
  { name: "Facebook", icon: faFacebook },
  { name: "Instagram", icon: faInstagram },
];

function formatSocialDisplay(link) {
  try {
    const url = new URL(link.url);
    const parts = url.pathname.split("/").filter(Boolean);
    let candidate = parts[parts.length - 1] || link.platform;
    candidate = candidate.split("?")[0];
    if (candidate.length > 30 || /^\d+$/.test(candidate)) {
      return link.platform;
    }
    if (candidate.length > 20) {
      candidate = candidate.slice(0, 17) + "...";
    }
    return candidate;
  } catch {
    return link.platform;
  }
}

export default function DashboardProfile() {
  const { user, token, refreshProfile, setUser } = useAuth();
  const [editing, setEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({});
  const [socialLinks, setSocialLinks] = useState([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef();

  useEffect(() => {
    if (user) {
      setEditedProfile(user);
      setSocialLinks(Array.isArray(user.social_links) ? user.social_links : []);
    }
  }, [user]);

  const handleChange = (field, value) =>
    setEditedProfile((prev) => ({ ...prev, [field]: value }));

  const handleSocialLinkChange = (index, key, value) =>
    setSocialLinks((prev) =>
      prev.map((link, idx) =>
        idx === index ? { ...link, [key]: value } : link
      )
    );

  const handleAddSocialLink = () =>
    setSocialLinks((prev) => [...prev, { platform: "", url: "" }]);

  const handleRemoveSocialLink = (index) =>
    setSocialLinks((prev) => prev.filter((_, idx) => idx !== index));

  const handleSave = async () => {
    try {
      const sanitized = { ...editedProfile };
      Object.keys(sanitized).forEach((key) => {
        if (typeof sanitized[key] === "string" && sanitized[key].trim() === "")
          sanitized[key] = null;
      });
      const filteredLinks = socialLinks.filter(
        (link) => link.platform && link.url && link.url.trim() !== ""
      );
      sanitized.social_links = filteredLinks.length > 0 ? filteredLinks : null;

      const res = await fetch(`${API_URL}/api/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(sanitized),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Could not save changes");
      }

      const fresh = await refreshProfile();
      if (fresh) {
        setUser(fresh);
        setEditedProfile(fresh);
        setSocialLinks(
          Array.isArray(fresh.social_links) ? fresh.social_links : []
        );
      }
      setEditing(false);
      showToast("Profile updated successfully.", "success");
    } catch (err) {
      console.error("Failed to save profile:", err);
      showToast(err.message, "error");
    }
  };

  const handleAvatarClick = () => fileInputRef.current?.click();

  const handleAvatarChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("avatar", file);
      const res = await fetch(`${API_URL}/api/profile/avatar`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Upload failed");
      }
      await refreshProfile();
      showToast("Avatar updated!", "success");
    } catch (err) {
      console.error("Avatar upload failed:", err);
      showToast(err.message, "error");
    } finally {
      setUploading(false);
    }
  };

  const getSocialIcon = (platform) =>
    SOCIAL_PLATFORMS.find((p) => p.name === platform)?.icon || faGlobe;

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="z-0 px-4 mx-auto space-y-4 max-w-7xl">
      <div className="flex flex-col items-center gap-4 p-4 bg-white shadow md:flex-row md:items-start sm:gap-6 sm:p-6 dark:bg-gray-800 rounded-2xl">
        <div className="relative">
          <div
            onClick={handleAvatarClick}
            className="flex items-center justify-center w-24 h-24 overflow-hidden bg-gray-200 rounded-full cursor-pointer dark:bg-gray-700 hover:opacity-80"
          >
            <img
              src={editedProfile.avatar_blob || placeholderAvatar}
              alt="User Avatar"
              className="object-cover w-full h-full"
            />
            {uploading && (
              <div className="absolute inset-0 flex items-center justify-center text-xs text-white bg-black bg-opacity-50">
                Uploading...
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleAvatarChange}
            className="hidden"
          />
        </div>
        <div className="flex-[1.1] w-full">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row sm:gap-5">
            <div className="flex flex-col w-full gap-2 md:w-96">
              {editing ? (
                <>
                  <Input
                    label="First Name"
                    value={editedProfile.first_name}
                    onChange={(v) => handleChange("first_name", v)}
                  />
                  <Input
                    label="Last Name"
                    value={editedProfile.last_name}
                    onChange={(v) => handleChange("last_name", v)}
                  />
                  <Input
                    label="Position Title"
                    value={editedProfile.position_title}
                    onChange={(v) => handleChange("position_title", v)}
                  />
                  <Textarea
                    label="Bio"
                    value={editedProfile.bio}
                    onChange={(v) => handleChange("bio", v)}
                  />
                </>
              ) : (
                <>
                  <h2 className="text-xl font-semibold break-all sm:text-2xl">
                    {user.first_name} {user.last_name}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400">
                    {user.position_title || "Position Title"}
                  </p>
                  <p className="mt-1 text-gray-600 break-all dark:text-gray-300">
                    {user.bio || "Bio"}
                  </p>
                </>
              )}
            </div>
            <button
              className="flex items-center mt-2 text-primary dark:text-white hover:underline md:mt-0"
              onClick={() => (editing ? handleSave() : setEditing(true))}
            >
              <FontAwesomeIcon
                icon={editing ? faUpload : faPen}
                className="mr-2"
              />
              {editing ? "Save Changes" : "Edit Profile"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:gap-6">
        <div className="p-4 space-y-3 bg-white shadow sm:p-6 sm:space-y-4 dark:bg-gray-800 rounded-2xl">
          <EditableInfoItem
            icon={faEnvelope}
            text={editedProfile.email}
            fallback="Email"
            field="email"
            isEditing={false}
            onChange={handleChange}
          />
          <EditableInfoItem
            icon={faPhone}
            text={editedProfile.contact_person_number}
            fallback="Contact Number"
            field="contact_person_number"
            isEditing={editing}
            onChange={handleChange}
          />
          <EditableInfoItem
            icon={faBuilding}
            text={editedProfile.company_name}
            fallback="Company Name"
            field="company_name"
            isEditing={editing}
            onChange={handleChange}
          />
          <EditableInfoItem
            icon={faMapMarkerAlt}
            text={editedProfile.company_address}
            fallback="Company Address"
            field="company_address"
            isEditing={editing}
            onChange={handleChange}
          />
        </div>
        <div className="p-4 space-y-3 bg-white shadow sm:p-6 sm:space-y-4 dark:bg-gray-800 rounded-2xl">
          <EditableInfoItem
            icon={faBriefcase}
            text={editedProfile.department}
            fallback="Department"
            field="department"
            isEditing={editing}
            onChange={handleChange}
          />
          <EditableInfoItem
            icon={faGlobe}
            text={editedProfile.website_url}
            fallback="Website"
            field="website_url"
            isEditing={editing}
            onChange={handleChange}
          />
          <div>
            <h4 className="mb-2 text-sm font-semibold text-gray-500">
              Social Links
            </h4>
            {editing ? (
              <div className="space-y-5">
                {socialLinks.map((link, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col flex-wrap gap-2 sm:flex-row"
                  >
                    <select
                      className="flex-1 px-2 py-1 text-gray-700 border rounded dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200"
                      value={link.platform}
                      onChange={(e) =>
                        handleSocialLinkChange(idx, "platform", e.target.value)
                      }
                    >
                      <option value="">Select Platform</option>
                      {SOCIAL_PLATFORMS.map((p) => (
                        <option key={p.name} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                    <input
                      className="flex-1 px-2 py-1 text-gray-700 break-all border rounded dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200"
                      placeholder="URL"
                      value={link.url}
                      onChange={(e) =>
                        handleSocialLinkChange(idx, "url", e.target.value)
                      }
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveSocialLink(idx)}
                      className="p-1 text-white bg-red-500 rounded-sm md:text-red-500 md:hover:text-red-700 md:bg-transparent "
                      title="Remove"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddSocialLink}
                  className="flex items-center gap-1 px-2 py-2 mt-2 text-xs border rounded text-primary border-primary hover:bg-primary hover:text-white"
                >
                  <FontAwesomeIcon icon={faPlus} /> Add Social Link
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 overflow-auto max-h-auto">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 break-all hover:text-primary dark:text-gray-300"
                  >
                    <FontAwesomeIcon icon={getSocialIcon(link.platform)} />{" "}
                    {formatSocialDisplay(link)}
                  </a>
                ))}
                {socialLinks.length === 0 && (
                  <span className="italic text-gray-400">No social links</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function EditableInfoItem({
  icon,
  text,
  fallback,
  field,
  isEditing,
  onChange,
}) {
  return (
    <div className="flex items-start space-x-3">
      <FontAwesomeIcon icon={icon} className="mt-1 text-stone-600" />
      {isEditing ? (
        <div className="flex flex-col flex-1">
          <label className="mb-1 text-xs text-gray-500 capitalize">
            {fallback}
          </label>
          <input
            className="w-full px-2 py-1 text-gray-700 border rounded dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200"
            value={text || ""}
            placeholder={fallback}
            onChange={(e) => onChange(field, e.target.value)}
          />
        </div>
      ) : (
        <span
          className={
            text?.trim()
              ? "flex-1 text-gray-700 dark:text-gray-300 break-all"
              : "flex-1 text-gray-400"
          }
        >
          {text?.trim() || fallback}
        </span>
      )}
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <>
      <label className="text-xs text-gray-500">{label}</label>
      <input
        className="w-full px-2 py-1 mb-2 text-gray-700 border rounded dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

function Textarea({ label, value, onChange }) {
  const maxLength = 101;
  return (
    <>
      <label className="flex justify-between text-xs text-gray-500">
        <span>{label}</span>
        <span
          className={value?.length >= 90 ? "text-red-500" : "text-gray-400"}
        >
          {value?.length || 0}/{maxLength}
        </span>
      </label>
      <textarea
        className="w-full px-2 py-1 text-gray-700 border rounded dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200"
        value={value || ""}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
