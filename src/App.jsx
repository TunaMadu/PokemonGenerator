import { useReducer } from "react";
import Button from "./ui/Button";
import PokemonDisplay from "./features/PokemonDisplay";
import { pokemonApi } from "./utils/helpers/helpers";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./ui/Header";
import AppLayout from "./features/AppLayout";
import Container from "./ui/Container";

const initialState = {
  isActive: false,
  isLoading: false,
  pokemon: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "click/active":
      return { ...state, isActive: true };
    case "click/deactivate":
      return {
        ...state,
        isActive: false,
        isLoading: false,
        pokemon: {},
      };
    case "click/generate":
      return {
        ...state,
        isLoading: true,
        pokemon: action.payload.pokemon,
      };

    default:
      throw new Error("No action found");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isActive, isLoading, pokemon } = state;

  function onShow() {
    if (!isActive) return dispatch({ type: "click/active" });
    return dispatch({ type: "click/deactivate" });
  }

  async function onGenerate() {
    const data = await pokemonApi();

    dispatch({
      type: "click/generate",
      payload: {
        pokemon: data,
      },
    });
  }

  return (
    <>
      <GlobalStyle />

      <AppLayout>
        <Header />

        <Container>
          <Button handleOnClick={onShow}>
            {!isActive ? "Start generating today" : <>&larr;</>}
          </Button>

          {isActive && (
            <Button handleOnClick={onGenerate}>{"Generate a pokemon!"}</Button>
          )}
        </Container>

        {isLoading && <PokemonDisplay pokemon={pokemon} />}
      </AppLayout>
    </>
  );
}

export default App;
