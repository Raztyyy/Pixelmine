export function formatCurrencyWithSymbol(amount, currency = "USD") {
  if (amount == null || isNaN(amount)) return "";

  const str = String(amount);
  const decimals = str.includes(".") ? str.split(".")[1].length : 0;

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);

  return formatted.replace(/^(\D+)(\d)/, "$1 $2");
}
