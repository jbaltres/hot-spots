import React from "react";
import Filter from "./Filter";
import { filterArray } from "../api/FilterArray";

function FilterList() {
  return (
    <section className="filterlist">
      {filterArray.map(filter => {
        return <Filter key={filter.description} filter={filter} />;
      })}
    </section>
  );
}

export default FilterList;
