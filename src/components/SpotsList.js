import React from "react";
import Spot from "./Spot";
import { spot } from "../api/SpotArray";

function SpotsList({ selectedFilter }) {
  console.log(selectedFilter);
  const filteredSpots = spot.filter(spotbla => {
    if (!selectedFilter) {
      return true;
    }
    if (selectedFilter.name === "Kategorie") {
      return spotbla.categories.includes(selectedFilter.value);
    }
    if (selectedFilter.name === "Distanz") {
      switch (selectedFilter.value) {
        case "<2 min":
          return spotbla.distance < 2;
        case "<5 min":
          return spotbla.distance < 5;

        default:
          break;
      }
    }
    if (selectedFilter.name === "Bewertung") {
      switch (selectedFilter.value) {
        case "⭐️":
          return spotbla.rating === "⭐️";
        case "⭐️⭐️":
          return spotbla.rating === "⭐️⭐️";
        case "⭐️⭐️⭐️":
          return spotbla.rating === "⭐️⭐️⭐️";
        case "⭐️⭐️⭐️⭐️":
          return spotbla.rating === "⭐️⭐️⭐️⭐️";
        case "⭐️⭐️⭐️⭐️⭐️⭐️⭐️":
          return spotbla.rating === "⭐️⭐️⭐️⭐️⭐️⭐️⭐️";

        default:
          break;
      }
    }
    return true;
  });
  return (
    <div className="spotslist">
      {filteredSpots.map(spot => {
        return <Spot key={spot.title} spot={spot} />;
      })}
    </div>
  );
}

export default SpotsList;
