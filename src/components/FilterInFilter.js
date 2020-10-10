import React from "react";
import { gins, tonicwaters } from "../api/SpotArray";
import styled from "styled-components";
import NeuerGin from "./NeuerGin";

const SpotsListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-grow: 1;
  align-content: flex-start;
  background: aliceblue
`;






function SecondFilter(){


    const results = gins.filter(gin => gin.price > 10);
  

return (
  <>
  <SpotsListStyle>
      {results.map(result => {
        return <NeuerGin key={result.title} ndrink={result}/>
      })}
    </SpotsListStyle>
  </>
);}


export default SecondFilter;




