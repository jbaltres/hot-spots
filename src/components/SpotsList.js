import React from "react";
import Spot from "./Spot";
import { spot } from "../api/SpotArray";

function FilterList() {
  return (
    <div className="spotslist">
      {spot.map(spot => {
        return <Spot key={spot.title} spot={spot} />;
      })}
    </div>
  );
}

export default FilterList;
