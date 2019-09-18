import React from "react";

function Filter(props) {
  console.log(props.selectedFilters);
  return (
    <div className="filter">
      <select
        onChange={event => {
          props.onChange(props.filter.description, event.target.value);
        }}
        value={props.selectedValue}
      >
        <option value=""> Select: {props.filter.description}</option>
        {props.filter.options.map(data => {
          return <option key={data}>{data}</option>;
        })}
      </select>
    </div>
  );
}

export default Filter;
