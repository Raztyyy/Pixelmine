// GoogleTranslate.jsx
import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    if (document.getElementById("google-translate-script")) return;

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      if (!document.getElementById("google_translate_element")) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,fil,ja,zh-CN,es,fr,de",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div
      id="google_translate_element"
      className="w-full max-w-xs p-2 mt-4 bg-white border rounded-lg dark:bg-stone-800 dark:border-stone-700"
    ></div>
  );
}
