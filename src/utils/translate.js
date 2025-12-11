// src/utils/translate.js
export function translateToLanguage(lang) {
  // The Google Translate menu is inside an iframe
  const frame = document.querySelector("iframe.goog-te-menu-frame");
  if (!frame) return;

  const innerDoc = frame.contentDocument || frame.contentWindow.document;

  // Find the language span in the iframe
  const langSpan = Array.from(innerDoc.querySelectorAll("span.text")).find(
    (span) => span.innerText.includes(lang)
  );

  // Click the language option
  if (langSpan) langSpan.click();
}
