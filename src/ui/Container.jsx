import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
