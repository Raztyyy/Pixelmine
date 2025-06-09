import supabase from "../../services/supabase";

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email").toLowerCase();

  // Check if the email already exists (ignore is_active)
  const { data: existing, error: fetchError } = await supabase
    .from("newsletter")
    .select("id")
    .eq("email", email)
    .maybeSingle();

  if (fetchError) {
    console.error(fetchError);
    return { error: "Something went wrong. Please try again." };
  }

  if (existing) {
    return { error: "You're already subscribed to Pixelmine." };
  }

  // Insert new subscriber
  const { error: insertError } = await supabase
    .from("newsletter")
    .insert([{ email, is_active: true }]);

  if (insertError) {
    // Handle unique constraint violation
    if (insertError.code === "23505") {
      return { error: "You're already subscribed to Pixelmine." };
    }
    return { error: "Subscription failed. Please try again later." };
  }

  return {
    success:
      "Thanks for signing up! We’ll keep you in the loop with the latest updates, insights, and announcements.",
  };
}
