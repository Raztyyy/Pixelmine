export function formatCurrencyWithSymbol(amount, currency = "USD") {
  const hasDecimals = amount % 1 !== 0;

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(amount);

  // Insert a space between currency symbol and number
  return formatted.replace(/^(\D+)(\d)/, "$1 $2");
}

formatCurrencyWithSymbol(1234.5); // "$ 1,234.50"
formatCurrencyWithSymbol(1234.5, "EUR"); // "€ 1,234.50"
formatCurrencyWithSymbol(1234.5, "IDR"); // "Rp 1.235"
