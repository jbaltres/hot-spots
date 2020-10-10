import React from "react"
import styled from "styled-components"
import { tonicwaters } from "../api/SpotArray";
import NeuesTonic from "./NeuesTonic";

const StyledDiv = styled.div`

margin:15px 10px;
border: solid;
background-color: papayawhip`;



function  TonicSearchbar({fS}){
console.log(fS)

let filteredTonics = [];

for (let i = 0; i < tonicwaters.length; i++) {
    if (tonicwaters[i].gin.includes(fS)) {
        filteredTonics.push(tonicwaters[i]);
    }
}

return (
    <>
    <StyledDiv>
        {filteredTonics.map(result => {
          return <NeuesTonic key={result.title} ntonic={result}/>
        })}
      </StyledDiv>
    </>
  );}


export default TonicSearchbar;