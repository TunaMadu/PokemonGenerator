import styled from "styled-components";

const StyledAppLayout = styled.main`
  max-width: 120rem;
  margin-inline: auto;
  padding-inline: 2rem;
`;

export default function AppLayout({ children }) {
  return <StyledAppLayout>{children}</StyledAppLayout>;
}
