export function formatCurrencyWithSymbol(
  amount,
  currency = "USD",
  fixedDecimals = 2
) {
  if (amount == null || isNaN(amount)) return "";

  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: fixedDecimals,
    maximumFractionDigits: fixedDecimals,
  }).format(amount);

  return formatted.replace(/^(\D+)(\d)/, "$1 $2");
}
