export function formatCurrencyWithSymbol(amount, currency = "USD") {
  const hasDecimals = amount % 1 !== 0;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

// Example usage:
// console.log(formatCurrencyWithSymbol(1234.5));         // "$1,234.50"
// console.log(formatCurrencyWithSymbol(1234.5, 'IDR'));  // "Rp1.235"
// console.log(formatCurrencyWithSymbol(1234.5, 'EUR'));  // "€1,234.50"
