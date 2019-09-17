import React from "react";

function Filter(props) {
  return (
    <div className="filter">
      <select
        onChange={event => {
          props.onChange(props.filter.description, event.target.value);
        }}
      >
        <option> {props.filter.description}</option>
        <option>{props.filter.option1}</option>
        <option>{props.filter.option2}</option>
        <option>{props.filter.option3}</option>
        <option>{props.filter.option4}</option>
      </select>
    </div>
  );
}

export default Filter;
