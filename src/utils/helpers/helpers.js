import { POKE_API, POKE_ENTRY_MAXIMUM } from "../constants/constants";

export function randomNumberGenerator() {
  return Math.floor(Math.random() * POKE_ENTRY_MAXIMUM) + 1;
}

export async function pokemonApi() {
  const res = await fetch(`${POKE_API}/pokemon/${randomNumberGenerator()}`);

  return await res.json();
}
