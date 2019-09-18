import React from "react";
import Filter from "./Filter";
import { filterArray } from "../api/FilterArray";

function FilterList(props) {
  return (
    <section className="filterlist">
      {filterArray.map(filter => {
        return (
          <Filter
            key={filter.description}
            filter={filter}
            onChange={props.onFilterChange}
            selectedValue={props.selectedFilters[filter.name]}
          />
        );
      })}
    </section>
  );
}

export default FilterList;
