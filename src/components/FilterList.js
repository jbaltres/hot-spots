import React from "react";
import Filter from "./Filter";
import { filter } from "../api/FilterArray";

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
      })}
    </section>
  );
}

export default FilterList;
