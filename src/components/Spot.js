import React from "react";

function Spot({ spot }) {
  return (
    <div className="spot">
      <img className="spot__img" src={spot.imgSrc} alt={spot.title} />
      <div className="spot__content">
        <h3>{spot.title}</h3>
        <span className="spot__category"> {spot.categories[0]}</span>

        <span className="spot__distance">{spot.distance} min</span>

        <span className="spot__rating">{spot.rating}</span>
        <details>
          {spot.description}
          <summary>
            Super Beschreibungstext
            <span role="img" alt="Affe">
              🦉
            </span>
          </summary>
        </details>
      </div>
    </div>
  );
}

export default Spot;
