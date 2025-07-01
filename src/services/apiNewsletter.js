const API_URL = import.meta.env.VITE_API_URL;

export async function subscribe(email) {
  try {
    const response = await fetch(`${API_URL}/api/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json(); // Read this early to use in both paths

    if (!response.ok) {
      throw new Error(data.error || "Subscription failed.");
    }

    return data; // { message: "Subscribed successfully", id: ... }
  } catch (error) {
    console.error(error);
    // Ensure message is a string
    throw new Error(
      typeof error.message === "string"
        ? error.message
        : "Subscription failed. Please try again."
    );
  }
}
