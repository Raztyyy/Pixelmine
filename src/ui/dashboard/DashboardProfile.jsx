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
  faLinkSimple,
  faCamera,
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
import SEOHelmet from "../SEOHelmet";

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
      <div className="flex items-center justify-center h-screen text-gray-500 dark:text-gray-400">
        Loading...
      </div>
    );
  }

  return (
    <>
      <SEOHelmet
        title="Profile | Pixelmine Japan OPC"
        description="Monitor real-time storer activity, available slots, and operational metrics with the Pixelmine OPC Dashboard. Stay updated and manage your network efficiently."
        url="https://www.pixelmine.org/dashboard"
        image="/social-sharing.jpg"
      />

      <div className="z-0 mx-auto space-y-8 max-w-7xl">
        {/* Header Card with Gradient Background */}
        <div className="relative overflow-hidden bg-white border border-gray-200 shadow-2xl dark:bg-stone-800 dark:border-gray-700 rounded-3xl">
          {/* Gradient Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent dark:from-emerald-500/5 dark:via-teal-500/5"></div>

          <div className="relative flex flex-col items-center gap-8 p-8 md:flex-row md:items-start md:p-10">
            {/* Avatar with Enhanced Styling */}
            <div className="relative group">
              <div className="absolute inset-0 transition-opacity duration-300 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 blur-xl opacity-20 group-hover:opacity-30"></div>
              <div
                onClick={handleAvatarClick}
                className="relative flex items-center justify-center w-32 h-32 overflow-hidden transition-all duration-300 bg-white border-4 rounded-full cursor-pointer border-emerald-200 dark:bg-gray-800 dark:border-emerald-800 hover:border-emerald-400 dark:hover:border-emerald-500 hover:scale-105"
              >
                <img
                  src={editedProfile.avatar_blob || placeholderAvatar}
                  alt="User Avatar"
                  className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110"
                />
                {uploading && (
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white bg-gradient-to-br from-emerald-600/90 to-teal-600/90 backdrop-blur-sm">
                    Uploading...
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 opacity-0 bg-gradient-to-br from-emerald-600/80 to-teal-600/80 group-hover:opacity-100">
                  <div className="flex flex-col items-center gap-1">
                    <FontAwesomeIcon
                      icon={faCamera}
                      className="text-2xl text-white"
                    />
                    <span className="text-xs font-semibold text-white">
                      Change Photo
                    </span>
                  </div>
                </div>
              </div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleAvatarChange}
                className="hidden"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1 w-full">
              <div className="flex flex-col items-center justify-between gap-6 md:items-start md:flex-col">
                <div className="flex flex-col w-full gap-4 text-center md:text-start">
                  {editing ? (
                    <div className="space-y-4">
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
                    </div>
                  ) : (
                    <>
                      <div>
                        <h2 className="text-3xl font-bold text-transparent break-all md:text-4xl bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text">
                          {user.first_name} {user.last_name}
                        </h2>
                        <p className="flex items-center justify-center gap-2 mt-3 text-base font-semibold text-emerald-600 dark:text-emerald-400 md:justify-start">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          {user.position_title || "Position Title"}
                        </p>
                      </div>
                      <p className="max-w-2xl text-sm leading-relaxed text-gray-600 break-all dark:text-gray-400">
                        {user.bio || "Bio"}
                      </p>
                    </>
                  )}
                </div>
                {editing ? (
                  <div className="flex flex-col w-full gap-3 sm:flex-row whitespace-nowrap">
                    <button
                      className="flex items-center justify-center gap-3 px-6 py-3.5 font-bold text-gray-700 transition-all duration-300 bg-white border-2 border-gray-300 shadow-lg rounded-2xl hover:bg-gray-50 hover:border-gray-400 hover:shadow-xl hover:scale-105 dark:bg-stone-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-stone-600 group"
                      onClick={() => {
                        setEditing(false);
                        setEditedProfile(user);
                        setSocialLinks(
                          Array.isArray(user.social_links)
                            ? user.social_links
                            : []
                        );
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faTimes}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      Cancel
                    </button>
                    <button
                      className="flex items-center justify-center gap-3 px-6 py-3.5 font-bold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl hover:scale-105 group"
                      onClick={handleSave}
                    >
                      <FontAwesomeIcon
                        icon={faUpload}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      Save Changes
                    </button>
                  </div>
                ) : (
                  <button
                    className="flex items-center gap-3 px-6 py-3.5 font-bold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl hover:scale-105 whitespace-nowrap group"
                    onClick={() => setEditing(true)}
                  >
                    <FontAwesomeIcon
                      icon={faPen}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 gap-8">
          {/* Contact Information Card */}
          <div className="relative overflow-hidden bg-white border border-gray-200 shadow-2xl dark:bg-stone-800 dark:border-gray-700 rounded-3xl">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 blur-3xl"></div>
            <div className="relative p-8 space-y-6">
              <h3 className="flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-emerald-600 dark:text-emerald-400"
                  />
                </div>
                Contact Information
              </h3>
              <div className="space-y-4">
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
            </div>
          </div>

          {/* Professional & Social Card */}
          <div className="relative overflow-hidden bg-white border border-gray-200 shadow-2xl dark:bg-stone-800 dark:border-gray-700 rounded-3xl">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-teal-500/10 to-emerald-500/10 blur-3xl"></div>
            <div className="relative p-8 space-y-6">
              <h3 className="flex items-center gap-3 text-xl font-bold text-gray-900 dark:text-white">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/30 dark:to-emerald-900/30">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="text-teal-600 dark:text-teal-400"
                  />
                </div>
                Professional Details
              </h3>
              <div className="space-y-4">
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
                  clickable
                />

                {/* Social Links Section */}
                <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="flex items-center gap-3 mb-5 text-base font-bold text-gray-900 dark:text-white">
                    <FontAwesomeIcon
                      icon={faLinkSimple}
                      className="text-emerald-600 dark:text-emerald-400"
                    />
                    Social Links
                  </h4>
                  {editing ? (
                    <div className="space-y-3">
                      {socialLinks.map((link, idx) => (
                        <div
                          key={idx}
                          className="flex flex-col gap-3 p-4 transition-colors duration-200 border-2 border-gray-200 sm:flex-row rounded-2xl dark:border-gray-700 dark:bg-stone-900/30 hover:border-emerald-300 dark:hover:border-emerald-700"
                        >
                          <select
                            className="flex-1 px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 border-2 border-gray-300 rounded-xl dark:bg-stone-700 dark:text-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            value={link.platform}
                            onChange={(e) =>
                              handleSocialLinkChange(
                                idx,
                                "platform",
                                e.target.value
                              )
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
                            className="flex-1 px-4 py-3 text-sm font-medium text-gray-700 break-all transition-all duration-200 border-2 border-gray-300 rounded-xl dark:bg-stone-700 dark:border-gray-600 dark:text-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            placeholder="URL"
                            value={link.url}
                            onChange={(e) =>
                              handleSocialLinkChange(idx, "url", e.target.value)
                            }
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveSocialLink(idx)}
                            className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white transition-all duration-300 bg-red-600 shadow-lg rounded-xl hover:bg-red-700 hover:scale-105 sm:w-auto hover:shadow-xl"
                            title="Remove"
                          >
                            <FontAwesomeIcon icon={faTimes} />
                            <span className="sm:hidden">Remove</span>
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={handleAddSocialLink}
                        className="flex items-center justify-center w-full gap-3 px-6 py-3.5 font-bold text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl hover:from-emerald-700 hover:to-teal-700 hover:shadow-xl hover:scale-105 group"
                      >
                        <FontAwesomeIcon
                          icon={faPlus}
                          className="transition-transform duration-300 group-hover:rotate-90"
                        />
                        Add Social Link
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {socialLinks.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 p-4 text-gray-700 break-all transition-all duration-300 border-2 border-gray-200 group rounded-2xl hover:border-emerald-400 hover:shadow-lg dark:border-gray-700 dark:text-gray-300 dark:hover:border-emerald-600 dark:bg-stone-900/20"
                        >
                          <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 group-hover:scale-110">
                            <FontAwesomeIcon
                              icon={getSocialIcon(link.platform)}
                              className="text-lg text-emerald-600 dark:text-emerald-400"
                            />
                          </div>
                          <span className="font-medium transition-colors duration-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                            {formatSocialDisplay(link)}
                          </span>
                        </a>
                      ))}
                      {socialLinks.length === 0 && (
                        <div className="p-6 text-center border-2 border-gray-300 border-dashed dark:border-gray-600 rounded-2xl">
                          <FontAwesomeIcon
                            icon={faLinkSimple}
                            className="mb-2 text-3xl text-gray-400"
                          />
                          <p className="text-sm italic text-gray-400 dark:text-gray-500">
                            No social links added yet
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function EditableInfoItem({
  icon,
  text,
  fallback,
  field,
  isEditing,
  onChange,
  clickable,
}) {
  const displayText = text?.trim() || fallback;

  return (
    <div className="flex items-start gap-4 p-4 transition-all duration-300 border-2 border-transparent rounded-2xl hover:bg-gray-50 dark:hover:bg-stone-900/30">
      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-all duration-300 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
        <FontAwesomeIcon
          icon={icon}
          className="text-base text-gray-700 dark:text-gray-300"
        />
      </div>
      {isEditing ? (
        <div className="flex flex-col flex-1 gap-2">
          <label className="text-xs font-bold tracking-wide text-gray-600 uppercase dark:text-gray-400">
            {fallback}
          </label>
          <input
            className="w-full px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 border-2 border-gray-300 rounded-xl dark:bg-stone-700 dark:border-gray-600 dark:text-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 hover:border-emerald-300 dark:hover:border-emerald-700"
            value={text || ""}
            placeholder={fallback}
            onChange={(e) => onChange(field, e.target.value)}
          />
        </div>
      ) : text?.trim() ? (
        <div className="flex flex-col flex-1 gap-1">
          <span className="text-xs font-bold tracking-wide text-gray-500 uppercase dark:text-gray-500">
            {fallback}
          </span>
          {clickable ? (
            <a
              href={text}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-800 break-all transition-colors hover:text-emerald-600 dark:text-gray-200 dark:hover:text-emerald-400"
            >
              {displayText}
            </a>
          ) : (
            <span className="text-sm font-medium text-gray-800 break-all dark:text-gray-200">
              {displayText}
            </span>
          )}
        </div>
      ) : (
        <div className="flex flex-col flex-1 gap-1">
          <span className="text-xs font-bold tracking-wide text-gray-500 uppercase dark:text-gray-500">
            {fallback}
          </span>
          <span className="text-sm italic text-gray-400 dark:text-gray-600">
            Not specified
          </span>
        </div>
      )}
    </div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-bold tracking-wide text-gray-700 uppercase dark:text-gray-400">
        {label}
      </label>
      <input
        className="w-full px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 border-2 border-gray-300 rounded-xl dark:bg-stone-700 dark:border-gray-600 dark:text-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 hover:border-emerald-300 dark:hover:border-emerald-700"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function Textarea({ label, value, onChange }) {
  const maxLength = 101;
  const remaining = maxLength - (value?.length || 0);
  const isNearLimit = remaining <= 11;

  return (
    <div>
      <div className="flex justify-between mb-2">
        <label className="text-sm font-bold tracking-wide text-gray-700 uppercase dark:text-gray-400">
          {label}
        </label>
        <span
          className={`text-xs font-bold transition-colors ${
            isNearLimit
              ? "text-red-500 animate-pulse"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {value?.length || 0}/{maxLength}
        </span>
      </div>
      <textarea
        className="w-full px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 border-2 border-gray-300 rounded-xl dark:bg-stone-700 dark:border-gray-600 dark:text-gray-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 hover:border-emerald-300 dark:hover:border-emerald-700"
        value={value || ""}
        maxLength={maxLength}
        rows={4}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
