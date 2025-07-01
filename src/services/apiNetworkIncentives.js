const API_URL = import.meta.env.VITE_API_URL;

export async function getValue() {
  try {
    const res = await fetch(`${API_URL}/api/incentives`);

    if (!res.ok) {
      throw new Error("Failed to fetch incentives data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Pixelmine Network Incentives data could not be loaded");
  }
}

// export async function getValue() {
//   // Simulated delay to mimic a real API call
//   await new Promise((resolve) => setTimeout(resolve, 300));

//   // Return mock JSON data (same shape as real API)
//   return [
//     {
//       id: 1,
//       incentives: "002",
//       activity_points: "2000",
//       pixelpoint: "6262",
//       converted_incentives: [
//         { value: "450000", currency: "JPY" },
//         { value: "31000.00", currency: "USD" },
//       ],
//       created_at: "2025-06-24T07:34:14.000Z",
//       updated_at: "2025-06-26T01:19:29.000Z",
//     },
//   ];
// }
