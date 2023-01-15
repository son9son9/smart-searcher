import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  border-bottom: 1px solid black;
`;

function Header() {
  return (
    <StyledHeader>
      <h1>PinPointube</h1>
    </StyledHeader>
  );
}

export default Header;
