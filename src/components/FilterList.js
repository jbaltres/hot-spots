import React from "react";
import Filter from "./Filter";
import { filterArray } from "../api/FilterArray";

function FilterList(props) {
  return (
    <section className="filterlist">
      {filter.map(filter => {
        return (
          <Filter
            key={filter.description}
            filter={filter}
            onChange={props.onFilterChange}
          />
        );

      {filterArray.map(filter => {
        return <Filter key={filter.description} filter={filter} />;

      })}
    </section>
  );
}

export default FilterList;
