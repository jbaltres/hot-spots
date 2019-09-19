import React from "react";
import styled from "styled-components";

const FilterStyle = styled.div`
  flex-grow: 1;
  background-color: #d8f1a0;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Dropdown = styled.select`
  border: ${props => (props.value ? "purple solid 8px" : "green solid 3px")};
  color: ${props => (props.value ? "red" : "inherit")};
  background-color: ${props => props.backgroundColor};
`;
function Filter(props) {
  console.log(props.selectedFilters);
  return (
    <FilterStyle>
      <Dropdown
        onChange={event => {
          props.onChange(props.filter.description, event.target.value);
        }}
        value={props.selectedValue}
        backgroundColor="red"
      >
        <option value=""> Select: {props.filter.description}</option>
        {props.filter.options.map(data => {
          return <option key={data}>{data}</option>;
        })}
      </Dropdown>
    </FilterStyle>
  );
}

export default Filter;
