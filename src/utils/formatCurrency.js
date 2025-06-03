export function formatCurrency(amount) {
  const hasDecimals = amount % 1 !== 0;

  return new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: hasDecimals ? 2 : 0,
    maximumFractionDigits: 2,
  }).format(amount);
}

// Example usage:
// console.log(formatCurrency(1234));       // "1,234"
// console.log(formatCurrency(1234.5));     // "1,234.50"
// console.log(formatCurrency(1234.05));    // "1,234.05"
// console.log(formatCurrency(1000000.12)); // "1,000,000.12"
// console.log(formatCurrency(1000.0));     // "1,000"
