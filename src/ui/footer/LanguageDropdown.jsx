import { translateToLanguage } from "../../utils/translate";

const languages = [
  { code: "en", label: "English" },
  { code: "fil", label: "Tagalog" }, // match iframe text
  { code: "ja", label: "Japanese" },
  { code: "zh-CN", label: "Chinese" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
];

export default function LanguageDropdown() {
  const handleChange = (e) => {
    translateToLanguage(e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      className="w-full p-2 bg-white border rounded-lg dark:bg-stone-800 dark:border-stone-700"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.label}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}
