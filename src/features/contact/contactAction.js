const API_URL = import.meta.env.VITE_API_URL;

export async function action({ request }) {
  const formData = await request.formData();

  const firstName = formData.get("first-name")?.trim();
  const lastName = formData.get("last-name")?.trim();
  const email = formData.get("email")?.toLowerCase().trim();
  const phoneNumber = formData.get("phone-number")?.trim();
  const message = formData.get("message")?.trim();

  if (!firstName || !lastName || !email || !message) {
    return { type: "error", message: "All fields are required." };
  }

  try {
    const res = await fetch(`${API_URL}/api/contact-us`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      return {
        type: "error",
        message: result.message || "Failed to send message.",
      };
    }

    return {
      type: "success",
      message: result.message || "Your message has been sent!",
    };
  } catch (error) {
    console.error(error);
    return {
      type: "error",
      message: "Something went wrong. Please try again later.",
    };
  }
}
