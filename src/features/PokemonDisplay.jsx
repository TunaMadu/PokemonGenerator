function PokemonDisplay({ pokemon }) {
  const {
    weight,
    id,
    name,
    types: typing,
    sprites: { front_default: frontSprite, back_default: backSprite } = {},
  } = pokemon;

  return (
    <>
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
    </>
  );
}

export default PokemonDisplay;
