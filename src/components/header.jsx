import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 80px;

  position: absolute;
  top: 0;
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Hello</h1>
    </StyledHeader>
  );
}

export default Header;
