import styled from "styled-components";
import Header from "./components/header";

const Wrapper = styled.div`
  display: grid;
  justify-content: space-around;
  height: 100vh;
`;
const StyledMain = styled.main`
  padding: 20px;
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;
const SearchInput = styled.input.attrs((props) => ({
  type: "text",
}))`
  /* init */
  border: none;

  width: 560px;
  height: 60px;
  padding: 0 16px 0 16px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2) inset;

  transition: 100ms;

  /* input-text */
  color: #333;
  font-size: 1.1rem;

  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.98);
  }
`;
const SearchButton = styled.button.attrs((props) => ({ type: "button" }))`
  /* position */
  position: absolute;
  right: 0;

  width: 60px;
  height: 40px;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0px 4px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  transition: 0.05s;

  &:active {
    transform: scale(0.95);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  }
`;
const Comment = styled.p``;

const Main = () => {
  return (
    <Wrapper>
      <Header></Header>
      <StyledMain>
        <SearchBar>
          <SearchInput></SearchInput>
          <SearchButton></SearchButton>
        </SearchBar>
        <Comment style={{ padding: "10px 0 10px 0" }} id={"comment"}>
          Search what you wanna!
        </Comment>
      </StyledMain>
    </Wrapper>
  );
};

export default Main;
