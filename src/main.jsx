import styled from "styled-components";

const StyledMain = styled.main`
  padding: 20px;
  height: 100vh;
`;

const Main = () => {
  return (
    <StyledMain>
      <h2>About me</h2>
      <p>I'm a web developer and designer. I love building beautiful and functional websites.</p>
    </StyledMain>
  );
};

export default Main;
