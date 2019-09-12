import React from "react";

function Spot(props) {
  return (
    <div className="spot">
      {props.spot.title}

      <img
        className="spot__img"
        src="https://rp-online.de/imgs/32/2/2/4/4/1/9/0/7/tok_e310a54e0e8dc30bde7bb2595d8ba812/w940_h528_x470_y264_1b70c410752b73ef.jpg"
        alt="Description"
      />
      <div className="spot__content">
        <h3>{props.spot.title}</h3>
        <div>{props.spot.categories[0]}</div>

        <span>{props.spot.distance}</span>
        <br />
        <span>{props.spot.rating}</span>
        <details>
          {props.spot.description}
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
