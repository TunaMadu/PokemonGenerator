import styled from "styled-components";

const StyledSection = styled.section`
  padding: 5rem;

  display: grid;
  justify-items: center;
  row-gap: 2rem;
`;
const StyledHeader = styled.header`
  font-size: 3.8rem;
  color: #ff441f;
  text-align: center;
`;

const StyledDiv = styled.div`
  display: flex;
  width: 50%;
`;

const StyledTypes = styled.li`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 1rem;
`;

function PokemonDisplay({ pokemon }) {
  const {
    weight,
    id,
    name,
    types: typing,
    sprites: { front_default: frontSprite, back_default: backSprite } = {},
  } = pokemon;

  return (
    <StyledSection>
      <StyledHeader>
        <h1>
          Poke ID :{id}
          <br />
          {name}
        </h1>
      </StyledHeader>
      <StyledDiv>
        <img src={frontSprite} />
        <img src={backSprite} />
      </StyledDiv>

      <ul>
        <StyledTypes>
          {typing?.map((types, index) => (
            <span key={index}>{types.type.name}</span>
          ))}
        </StyledTypes>
        <li>
          Pokemon Weight: {calcWeight(weight)} kg /{" "}
          {kgToPounds(calcWeight(weight))} lbs
        </li>
      </ul>
    </StyledSection>
  );
}

function calcWeight(weight) {
  const temp = weight / 10;
  return temp;
}

function kgToPounds(convertedWeight) {
  return Math.floor(convertedWeight * 2.2);
}
export default PokemonDisplay;
