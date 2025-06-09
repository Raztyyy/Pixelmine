import supabase from "./supabase";

export async function subscribe(email) {
  const { data, error } = await supabase
    .from("newsletter")
    .insert([{ email }])
    .select(); // Optional: returns the inserted row(s)

  if (error) {
    console.error(error);
    throw new Error("Subscription failed. Please try again.");
  }

  return data;
}
