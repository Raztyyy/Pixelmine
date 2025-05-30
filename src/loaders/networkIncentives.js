import { getValue } from "../services/apiNetworkIncentives";

export async function networkIncentivesLoader() {
  const value = await getValue();
  return value;
}
