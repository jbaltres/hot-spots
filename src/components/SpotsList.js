import React from "react";
import Spot from "./Spot";
import { spot } from "../api/SpotArray";
import styled from "styled-components";

const SpotsListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #f3c178;
  width: 100%;
  flex-grow: 1;
  align-content: flex-start;
`;

function SpotsList({ selectedFilter }) {
  console.log(selectedFilter);
  const filteredSpots = spot.filter(spotbla => {
    if (selectedFilter.Kategorie) {
      if (!spotbla.categories.includes(selectedFilter.Kategorie)) {
        return false;
      }
    }

    if (selectedFilter.Distanz) {
      switch (selectedFilter.Distanz) {
        case "<2 min":
          if (spotbla.distance >= 2) {
            return false;
          }
          break;
        case "<5 min":
          if (spotbla.distance >= 5) {
            return false;
          }
          break;

        default:
          break;
      }
    }

    switch (selectedFilter.Bewertung) {
      case "⭐️":
        if (spotbla.rating !== "⭐️") {
          return false;
        }
        break;
      case "⭐️⭐️":
        if (spotbla.rating !== "⭐️⭐️") {
          return false;
        }
        break;
      case "⭐️⭐️⭐️":
        if (spotbla.rating !== "⭐️⭐️⭐️") {
          return false;
        }
        break;
      case "⭐️⭐️⭐️⭐️":
        if (spotbla.rating !== "⭐️⭐️⭐️⭐️") {
          return false;
        }
        break;
      case "⭐️⭐️⭐️⭐️⭐️⭐️⭐️":
        if (spotbla.rating !== "⭐️⭐️⭐️⭐️⭐️⭐️⭐️") {
          return false;
        }
        break;

      default:
        break;
    }

    return true;
  });
  return (
    <SpotsListStyle>
      {filteredSpots.map(spot => {
        return <Spot key={spot.title} spot={spot} />;
      })}
    </SpotsListStyle>
  );
}

export default SpotsList;
