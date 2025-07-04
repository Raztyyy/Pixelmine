const API_URL = import.meta.env.VITE_API_URL;

export async function signupAction({ request }) {
  const formData = await request.formData();

  const payload = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    contactPersonNumber: formData.get("contactPersonNumber"),
    companyName: formData.get("companyName"),
    companyAddress: formData.get("companyAddress"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  if (payload.password !== payload.confirmPassword) {
    return { message: "Passwords do not match", type: "error" };
  }

  try {
    const res = await fetch(`${API_URL}/api/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      return { message: data.error || "Signup failed", type: "error" };
    }

    return { message: "Account created successfully!", type: "success" };
  } catch (err) {
    console.error(err);
    return { message: "Server error. Please try again.", type: "error" };
  }
}
