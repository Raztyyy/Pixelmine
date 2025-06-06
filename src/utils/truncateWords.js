export function truncateWords(text, charLimit) {
  return text.length > charLimit ? text.slice(0, charLimit) + "..." : text;
}
