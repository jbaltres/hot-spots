import React from "react"
import styled from "styled-components"


const StyledImg = styled.img`

margin:15px 10px;
border: solid;
background-color: papayawhip;
width: 70px;
height: 70px;
object-fit: cover
`;

const StyledDiv = styled.div`
margin:15px 10px;
`;

const StyledFilterContentBody = styled.div``;


function  NeueZutat({nZutat}){
console.log(nZutat.imgSrc)
    
    return(
        <StyledDiv>
            <StyledImg src={nZutat.imgSrc}/>
            <StyledFilterContentBody>{nZutat.title}</StyledFilterContentBody>    
        </StyledDiv>       
    );
}

export default NeueZutat;