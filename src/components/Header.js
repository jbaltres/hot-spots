import React from "react";
import styled from "styled-components";

const Title = styled.header`
  background-color: ${props => props.theme.background};
  height: 70px;
  width: 100%;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

function Header() {
  return (
    <Title>
      <h1>Hot-Spots</h1>
    </Title>
  );
}

export default Header;
