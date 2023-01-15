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
const SearchBar = styled.input.attrs((props) => ({
  type: "text",
}))`
  /* init */
  border: none;

  width: 30vw;
  height: 60px;
  padding: 0 16px 0 16px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2) inset;

  /* input-text */
  color: #333;
  font-size: 1.1rem;

  &:focus {
    outline: none;
  }
`;
const Comment = styled.p``;

const Main = () => {
  return (
    <Wrapper>
      <Header></Header>
      <StyledMain>
        <SearchBar></SearchBar>
        <Comment style={{ padding: "10px 0 10px 0" }} id={"comment"}>
          Search what you wanna!
        </Comment>
      </StyledMain>
    </Wrapper>
  );
};

export default Main;
