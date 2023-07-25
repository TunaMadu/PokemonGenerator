import { POKE_ENTRY_MAXIMUM } from "../constants/constants";

export function randomNumberGenerator() {
  return Math.floor(Math.random() * POKE_ENTRY_MAXIMUM) + 1;
}
