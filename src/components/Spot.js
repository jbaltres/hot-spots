import React from "react";
import styled from "styled-components";

const SpotStyle = styled.header`
  display: flex;
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

function Spot({ drink }) {

  const [hallo, sethallo] = React.useState("");
  
  const gefiltertesHallo = hallo >= drink.title? drink.title : "sehr leer" 
console.log(gefiltertesHallo)
  
return (
    <SpotStyle backgroundColor="#CCC">
      <Spotimg src={drink.imgSrc} alt={drink.title} />
      <SpotContent>
        <h3>{drink.title}</h3>
        <SpotCategory> {drink.country}</SpotCategory>

        <SpotDistance>{drink.price} €</SpotDistance>

        <SpotRating>{drink.taste}</SpotRating>
        <details>
          {drink.description}
          <summary>
            Super Beschreibungstext
            <span role="img" alt="Affe">
              🦉
            </span>
          </summary>
        </details>
        <Auswahl onClick={() => sethallo(hallo + drink.title)}>Click me!</Auswahl> {gefiltertesHallo}
      </SpotContent>
    </SpotStyle>
  );
}

export default Spot;
