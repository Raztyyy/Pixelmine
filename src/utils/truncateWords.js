export function truncateWords(text, wordLimit) {
  const words = text.trim().split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
}
