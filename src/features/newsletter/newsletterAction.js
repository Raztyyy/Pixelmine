const API_URL = import.meta.env.VITE_API_URL;

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email")?.toLowerCase();

  if (!email) {
    return {
      message: "Email is required.",
      type: "error",
    };
  }

  try {
    const response = await fetch(`${API_URL}/api/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        message: result.error || "Subscription failed. Please try again.",
        type: "error",
      };
    }

    return {
      message:
        "Thanks for signing up! We’ll keep you in the loop with the latest updates, insights, and announcements.",
      type: "success",
    };
  } catch (err) {
    console.error(err);
    return {
      message: "Something went wrong. Please try again later.",
      type: "error",
    };
  }
}
