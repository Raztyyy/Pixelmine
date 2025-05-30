import supabase from "./supabase";

export async function getValue() {
  const { data, error } = await supabase
    .from("pixelmine_network_incentives")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("Pixelmine Network Incentives data could not be loaded");
  }

  return data;
}
