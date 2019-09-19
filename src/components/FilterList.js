import React from "react";
import Filter from "./Filter";
import { filterArray } from "../api/FilterArray";
import styled from "styled-components";

const FilterListStyle = styled.section`
  display: flex;
  width: 100%;
  height: 100px;
  background-color: #d8f1a0;
  align-items: center;
  justify-content: space-around;
  border: solid 1px;
  flex-grow: 0;
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
