import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <p>Copyright 2023. Songsong All rights reserved.</p>
    </StyledFooter>
  );
}

export default Footer;
