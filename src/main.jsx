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
  width: 20rem;
  height: 3rem;
  border: 3px solid transparent;
  border-image: linear-gradient(to right, #667eea 0%, #764ba2 100%, #6b8dd6 100%);
  border-image-slice: 1;

  transition: 100ms;

  &:active {
    transform: scale(0.98);
  }
`;
const SearchInput = styled.input.attrs((props) => ({
  type: "text",
}))`
  /* init */
  /* border: none; */

  width: 85%;
  height: 100%;
  padding: 0 16px 0 16px;
  background-color: transparent;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2) inset;

  transition: 100ms;

  /* input-text */
  color: #333;
  font-size: 1.1rem;

  &:focus {
    outline: none;
  }
`;
const SearchButton = styled.button.attrs((props) => ({ type: "button" }))`
  /* position */
  /* position: absolute;
  right: 0; */

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
          Search what you want !
        </Comment>
      </StyledMain>
    </Wrapper>
  );
};

export default Main;
