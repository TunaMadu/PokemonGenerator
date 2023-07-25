import { useReducer } from "react";
import Button from "./ui/Button";
import usePokemonApi from "./hooks/usePokemonApi";
import { randomNumberGenerator } from "./utils/helpers/helpers";

const initialState = {
  isActive: false,
  randomValue: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "active":
      return { ...state, isActive: true };
    case "unActive":
      return {
        ...state,
        isActive: false,
        randomValue: null,
      };
    case "generate":
      return { ...state, randomValue: action.payload };
    default:
      throw new Error("No action found");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isActive, randomValue } = state;

  const { pokemon } = usePokemonApi(randomValue);

  // pretty neat object destructuering we have here, when in doubt defaults!
  const {
    weight,
    id,
    name,
    types: typing,
    sprites: { front_default: frontSprite, back_default: backSprite } = {},
  } = pokemon;

  function onShow() {
    if (!isActive) return dispatch({ type: "active" });

    return dispatch({ type: "unActive" });
  }

  function onGenerate() {
    dispatch({ type: "generate", payload: randomNumberGenerator() });
  }

  return (
    <main>
      <h1>Generate a random pokemon!</h1>

      <Button handleOnClick={onShow}>
        {!isActive ? "Start generating today" : <>&larr;</>}
      </Button>

      {isActive && (
        <Button handleOnClick={onGenerate}>{"Generate a pokemon!"}</Button>
      )}
      {randomValue && (
        <section>
          <h2>
            {name} : {id}
          </h2>
          <img src={frontSprite} />
          <img src={backSprite} />
          <ul>
            {typing?.map((types, index) => (
              <li key={index}>{types.type.name}</li>
            ))}
            <li>Pokemon Weight: {weight}</li>
          </ul>
        </section>
      )}
    </main>
  );
}

export default App;
