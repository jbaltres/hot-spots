import React from "react";
import Filter from "./Filter";
import { filterArray } from "../api/FilterArray";
import styled from "styled-components";
import rudundwiß from "../themes/rudundwiß";


const FilterListStyle = styled.section`
  display: flex;
  flex-grow: 0;
  color: ${props => props.theme.main};
  background: ${props => props.theme.background};
  @media (max-width: 320px) {
    flex-direction: column;
    align-items: center;
  };
`;

const CheckboxWrapper = styled.div`
display: flex;
flex-direction: column;
background-color: rgba(0,0,0,0.85);
`;


function FilterList({ selectedFilters, onFilterChange }) {


  return (
    <FilterListStyle>
      {filterArray.map(filter => {
        return (
          <Filter
            key={filter.description}
            filter={filter}
            onChange={onFilterChange}
            selectedValue={selectedFilters[filter.description]}
          />
        );
      })}
    </FilterListStyle>
  );
}

export default FilterList;
