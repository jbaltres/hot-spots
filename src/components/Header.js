import React from "react";
import styled from "styled-components";

const Title = styled.header`
  background-color: #00a878;
  height: 60px;
  width: 100%;
`;

const AnnoyingBox = styled.div`
  width: 100px;
  height: 20px;
  background: papayawhip;
`;

function Header() {
  return (
    <Title>
      <h2>Header</h2>
    </Title>
  );
}

export default Header;
