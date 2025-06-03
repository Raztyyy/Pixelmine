export function formatDate(input) {
  const date = new Date(input);
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase();
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

// // Example usage
// const inputDate = "2025-06-03 01:18:21.712616";
// const formatted = formatDate(inputDate);
// console.log(formatted); // Output: 03 JUN 2025
