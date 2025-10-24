// ui/LanguageToggle.jsx
import { useLanguage } from "../context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/pro-solid-svg-icons";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const isEN = language === "en";

  return (
    <button
      className="fixed z-50 flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-900 transition border rounded-md shadow-lg top-24 lg:top-44 right-6 bg-white/80 backdrop-blur-md border-white/20 hover:bg-white/100"
      onClick={() => toggleLanguage(isEN ? "jp" : "en")}
    >
      <FontAwesomeIcon icon={faLanguage} className="w-5 h-5" />
      {isEN ? "EN" : "JP"}
    </button>
  );
}
