import { useEffect, useState } from "react";
import Button from "./ui/Button";
import { POKE_API } from "./utils/constants/constants";
import { randomNumberGenerator } from "./utils/helpers/helpers";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [randomValue, setRandomValue] = useState(1);
  const [pokemon, setPokemon] = useState({});

  // pretty neat object destructuering we have here, when in doubt defaults!
  const {
    weight,
    id,
    name,
    types: typing,
    sprites: { front_default: frontSprite, back_default: backSprite } = {},
  } = pokemon;

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

  function onActive() {
    setIsActive(!isActive);
  }

  function onGenerate() {
    setRandomValue(randomNumberGenerator());
  }

  return (
    <main>
      <h1>Generate a random pokemon!</h1>

      <Button handleOnClick={onActive}>
        {!isActive ? "Start generating today" : <>&larr;</>}
      </Button>

      {isActive && (
        <>
          <Button handleOnClick={onGenerate}>{"Generate a pokemon!"}</Button>

          <section>
            <h2>
              {name} : {id}
            </h2>
            <img src={frontSprite} />
            <img src={backSprite} />
            <ul>
              {typing.map((types, index) => (
                <li key={index}>{types.type.name}</li>
              ))}
              <li>Pokemon Weight: {weight}</li>
            </ul>
          </section>
        </>
      )}
    </main>
  );
}

export default App;
