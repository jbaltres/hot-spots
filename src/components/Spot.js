import React from "react";
import styled from "styled-components";
import New from "../pages/New";
import TonicSearchbar from "./TonicSearchbar";
import ZutatenSearchbar from "./ZutatenFilter";

const SpotStyle = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.backgroundColor};
  max-width: 350px;
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
  background-color: rgba(172, 87, 242,0.6);
  color: white;
  border-radius: 20px;
  padding:6px;
  width: fit-content;
  margin: 10px;
`;

const LinkButton = styled.a`
  background-color: rgb(58, 189, 80);
  color: white;
  padding:6px;
  width: fit-content;
  margin: 10px;
  display: flex;
  text-decoration: none;
`;

const SpotDistance = styled.span`
  background-color: rgba(52, 105, 250,0.6);
  color: white;
  border-radius: 20px;
  padding:6px;
  margin: 10px;
  width: fit-content;
`;

const SpotRating = styled.span`
  color: white;
  background-color: rgba(172, 87, 242,0.6);
  border-radius: 20px;
  padding: 3px 6px 3px 6px;
  width: fit-content;
  margin: 10px
`;

const Auswahl = styled.button`
width: 70px;
height: 40px;
background-color: green;
color: white;
`;

const BadgeContainer = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
`;

const RatingWrapper = styled.div`
display: flex;
`;

const Container1 = styled.span`
`;

const DescriptionWrapper = styled.div`
display: flex;
flex-direction:row;
align-items: center
flex-wrap:wrap
`;

const Container2 = styled.div`

`;

function Spot({ drink }) {

  const [hallo, sethallo] = React.useState("");
  
  const gefiltertesHallo = hallo >= drink.title? drink.title : "sehr leer" 
console.log(gefiltertesHallo)
  if (gefiltertesHallo === "sehr leer"){
    return (
      <SpotStyle backgroundColor="rgba(0,0,0,0.85)" onClick={() => sethallo(hallo + drink.title)}>
        <Container1>
        <Spotimg src={drink.imgSrc} alt={drink.title} />
        
          <h3>{drink.title}</h3>
          <BadgeContainer>
          <DescriptionWrapper>Herkunft: <SpotCategory>{drink.country}</SpotCategory></DescriptionWrapper>
          <DescriptionWrapper>Preis/l:<SpotDistance>{drink.price}€</SpotDistance></DescriptionWrapper>
          <DescriptionWrapper>Geschmack:{drink.taste.map(drink=>{return <DescriptionWrapper> 
            <RatingWrapper>
              <SpotRating> {drink} </SpotRating>
            </RatingWrapper>
          </DescriptionWrapper>})}
          </DescriptionWrapper>         
          </BadgeContainer>
          </Container1>
        <LinkButton href={drink.link} target="_blank">Mehr Infos</LinkButton>
      </SpotStyle>
    );
  }
return (
    <SpotStyle backgroundColor="rgba(0,0,0,0.85)" onClick={() => sethallo(hallo + drink.title)}>
        <Container1>
        <Spotimg src={drink.imgSrc} alt={drink.title} />
        
          <h3>{drink.title}</h3>
          <BadgeContainer>
          <DescriptionWrapper>Herkunft: <SpotCategory>{drink.country}</SpotCategory></DescriptionWrapper>
          <DescriptionWrapper>Preis/l:<SpotDistance>{drink.price}€</SpotDistance></DescriptionWrapper>
          <DescriptionWrapper>Geschmack:{drink.taste.map(drink=>{return <DescriptionWrapper> 
            <RatingWrapper>
              <SpotRating> {drink} </SpotRating>
            </RatingWrapper>
          </DescriptionWrapper>})}
          </DescriptionWrapper>         
          </BadgeContainer>
          </Container1>
        <LinkButton href={drink.link} target="_blank">Mehr Infos</LinkButton>
        <Container2>
        <TonicSearchbar fS={gefiltertesHallo}/>
        <ZutatenSearchbar fS={gefiltertesHallo}/>
        </Container2>
      
    </SpotStyle>
  );
}

export default Spot;
