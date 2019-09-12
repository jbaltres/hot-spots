import React from "react";

function Spot(props) {
  return (
    <div className="spot">
      {props.spot.title}
      {/* <img
        className="spot__img"
        src="https://rp-online.de/imgs/32/2/2/4/4/1/9/0/7/tok_e310a54e0e8dc30bde7bb2595d8ba812/w940_h528_x470_y264_1b70c410752b73ef.jpg"
        alt="Description"
      />
      <div className="spot__content">
        <h3>Kölner Dom</h3>
        <div>Kategorie</div>

        <span>Entfernung</span>
        <span>Bewertung</span>
        <details>
          Hier steht etwas geiles drinn was aber keiner lesen kann.
          <summary>
            Super Beschreibungstext
            <span role="img" alt="Affe">
              🦉
            </span>
          </summary>
        </details>
      </div> */}
    </div>
  );
}

export default Spot;
