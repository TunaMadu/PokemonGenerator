import styled from "styled-components";

// styled compoennts are literal components p nice!
const StyledButton = styled.button`
  font-size: 2rem;
  font-weight: 600;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #5251a4;
  color: white;
`;

function Button({ children, handleOnClick }) {
  return (
    <StyledButton onClick={() => (handleOnClick ? handleOnClick() : "")}>
      {children}
    </StyledButton>
  );
}

export default Button;
