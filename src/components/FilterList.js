import React from "react";
import Filter from "./Filter";
import { filter } from "../api/FilterArray";

function FilterList() {
  return (
    <section className="filterlist">
      {filter.map(filter => {
        return <Filter key={filter.description} filter={filter} />;
      })}
    </section>
  );
}

export default FilterList;
