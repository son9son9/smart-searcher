import { useEffect } from "react";
import styled from "styled-components";
import Header from "./components/header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const StyledMain = styled.main`
  padding: 20px;
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 24rem;
  height: 3.5rem;
  background-color: transparent;
  padding: 2px;

  border: 3px solid transparent;
  border-radius: 10px;
  background-image: linear-gradient(#fff, #fff), linear-gradient(to right, #667eea 0%, #764ba2 100%, #6b8dd6 100%);
  /* border-image-slice: 1; */
  background-origin: border-box;
  background-clip: content-box, border-box;

  transition: 100ms;

  &:active {
    transform: scale(0.98);
  }
`;
const SearchInput = styled.input.attrs((props) => ({
  type: "text",
}))`
  /* init */
  border: none;

  width: 85%;
  height: 100%;
  padding: 0 12px 0 12px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

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

  display: flex;
  align-items: center;
  justify-content: center;

  width: 13%;
  height: 100%;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  background-color: transparent;
  transition: 0.05s;

  img {
    width: 1.7rem;
    height: auto;
  }
`;
const Comment = styled.p``;

const Main = () => {
  // useEffect(() => {}, []);

  const onSearch = (e) => {
    console.log(e);
  };

  return (
    <>
      <Header></Header>
      <Wrapper>
        <StyledMain>
          <SearchBar>
            <SearchInput></SearchInput>
            <SearchButton onClick={onSearch}>
              <img src={process.env.PUBLIC_URL + "/assets/search-icon64px.png"} alt=""></img>
            </SearchButton>
          </SearchBar>
          {/* <Comment style={{ padding: "10px 0 10px 0" }} id={"comment"}></Comment> */}
        </StyledMain>
      </Wrapper>
    </>
  );
};

export default Main;
