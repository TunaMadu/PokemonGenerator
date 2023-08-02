import styled from "styled-components";

const StyledHeader = styled.h1`
  font-size: 3.6rem;
  margin-block: 5rem;
  text-align: center;
`;

export default function Header() {
  return <StyledHeader>Generate a random pokemon!</StyledHeader>;
}
