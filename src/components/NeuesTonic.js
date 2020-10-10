import React from "react"
import styled from "styled-components"
import { gins, tonicwaters } from "../api/SpotArray";
import TonicSearchbar from "./TonicSearchbar";

const StyledDiv = styled.div`

margin:15px 10px;
border: solid;
background-color: papayawhip`;



function  NeuesTonic({ntonic}){
console.log(ntonic)
    return(
<>
<StyledDiv>{ntonic.title}<p>{ntonic.price}</p>{ntonic.country}
        
        </StyledDiv>
       
        </>
    );
}

export default NeuesTonic;

