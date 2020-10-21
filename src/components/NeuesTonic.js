import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`

margin:15px 10px;`;

const StyledImg = styled.img`

margin:15px 10px;
border: solid;
background-color: papayawhip;
width: 70px;
height: 70px;
object-fit: cover
`;

const StyledFilterContentBody = styled.div``;

function  NeuesTonic({ntonic}){
console.log(ntonic)
    return(
<>
<StyledDiv>
    <StyledImg src={ntonic.imgSrc}/>
    <StyledFilterContentBody>{ntonic.title}<br/>{ntonic.price}€</StyledFilterContentBody>
        
        </StyledDiv>
       
        </>
    );
}

export default NeuesTonic;

