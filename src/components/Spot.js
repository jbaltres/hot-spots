import React from "react";
import styled from "styled-components";
import New from "../pages/New";
import TonicSearchbar from "./TonicSearchbar";
import ZutatenSearchbar from "./ZutatenFilter";

const SpotStyle = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.backgroundColor};
  width: 350px;
  border: solid 0.5px;
  margin: 15px;
  flex: 1 0 30%;
  border-radius: 10px;
  justify-content: flex-start;
`;

const Spotimg = styled.img`
  margin: 10px;
  height: 130px;
  width: 140px;
`;

const SpotContent = styled.div`
  text-align: start;
`;

const SpotCategory = styled.span`
  background-color: red;
  color: white;
  border-radius: 20px;
  padding-left: 6px;
  padding-right: 6px;
  width: fit-content;
  margin-right: 6px;
`;

const SpotDistance = styled.span`
  background-color: #00a878;
  color: white;
  border-radius: 20px;
  padding-left: 6px;
  padding-right: 6px;
  margin-right: 6px;
  width: fit-content;
`;

const SpotRating = styled.span`
  color: white;
  background-color: blue;
  border-radius: 20px;
  padding: 3px 6px 3px 6px;
  width: fit-content;
`;

const Auswahl = styled.button`
width: 70px;
height: 40px;
background-color: green;
color: white;
`;

const BadgeContainer = styled.div`
margin: 10px 0px`;

const Container1 = styled.span`

`;

const Container2 = styled.div`

`;

function Spot({ drink }) {

  const [hallo, sethallo] = React.useState("");
  
  const gefiltertesHallo = hallo >= drink.title? drink.title : "sehr leer" 
console.log(gefiltertesHallo)
  if (gefiltertesHallo === "sehr leer"){
    return (
      <SpotStyle backgroundColor="#CCC" onClick={() => sethallo(hallo + drink.title)}>
        <Container1>
        <Spotimg src={drink.imgSrc} alt={drink.title} />
        
          <h3>{drink.title}</h3>
          <BadgeContainer>
          <SpotCategory> {drink.country}</SpotCategory>
  
          <SpotDistance>{drink.price} €</SpotDistance>
  
          <SpotRating>{drink.taste}</SpotRating>
          </BadgeContainer>
          </Container1>
        
      </SpotStyle>
    );
  }
return (
    <SpotStyle backgroundColor="#CCC" onClick={() => sethallo(hallo + drink.title)}>
      <Container1>
      <Spotimg src={drink.imgSrc} alt={drink.title} />
      
        <h3>{drink.title}</h3>
        <SpotCategory> {drink.country}</SpotCategory>

        <SpotDistance>{drink.price} €</SpotDistance>

        <SpotRating>{drink.taste}</SpotRating>
        
        </Container1>
        <Container2>
        <TonicSearchbar fS={gefiltertesHallo}/>
        <ZutatenSearchbar fS={gefiltertesHallo}/>
        </Container2>
      
    </SpotStyle>
  );
}

export default Spot;
