const API_URL = import.meta.env.VITE_API_URL;

export async function getValue() {
  try {
    const res = await fetch(`${API_URL}/api/incentive-summary`);
    if (!res.ok) throw new Error("Failed to fetch incentives summary data");
    return await res.json();
  } catch (error) {
    console.error(error);
    throw new Error(
      "Pixelmine Network Incentives summary data could not be loaded"
    );
  }
}
