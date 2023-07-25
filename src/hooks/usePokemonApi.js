import { useEffect, useState } from "react";
import { POKE_API } from "../utils/constants/constants";

function usePokemonApi(randomValue) {
  const [pokemon, setPokemon] = useState({});

  useEffect(
    function () {
      async function getPokemon() {
        const res = await fetch(`${POKE_API}/pokemon/${randomValue}`);
        const data = await res.json();
        setPokemon(data);
      }
      getPokemon();
    },
    [randomValue]
  );
  return { pokemon };
}

export default usePokemonApi;
