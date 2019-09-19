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
  background-color: #f3c178;
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
  background-color: blue;
  border-radius: 20px;
  padding: 3px 6px 3px 6px;
  width: fit-content;
`;

function Spot({ spot }) {
  return (
    <SpotStyle backgroundColor="yellow">
      <Spotimg src={spot.imgSrc} alt={spot.title} />
      <SpotContent>
        <h3>{spot.title}</h3>
        <SpotCategory> {spot.categories[0]}</SpotCategory>

        <SpotDistance>{spot.distance} min</SpotDistance>

        <SpotRating>{spot.rating}</SpotRating>
        <details>
          {spot.description}
          <summary>
            Super Beschreibungstext
            <span role="img" alt="Affe">
              🦉
            </span>
          </summary>
        </details>
      </SpotContent>
    </SpotStyle>
  );
}

export default Spot;
