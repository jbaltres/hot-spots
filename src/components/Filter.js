import React from "react";
import styled from "styled-components";

const FilterStyle = styled.div`
  flex-grow: 1;
  background-color: rgba(0,0,0,0.83);
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
  padding: 20px 0px;
  @media (max-width: 768px) {
    height: 30px;
    width: 130px;
  };
`;

const Dropdown = styled.select`
  border: ${props => (props.value ? "purple solid 8px" : "green solid 3px")};
  color: ${props => (props.value ? "blue" : "black")};
  background-color: ${props => props.backgroundColor};
  max-width:90%
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
        backgroundColor="white"
      >
        <option value=""> {props.filter.description}</option>
        {props.filter.options.map(data => {
          return <option key={data}>{data}</option>;
        })}
      </Dropdown>
    </FilterStyle>
  );
}

export default Filter;
