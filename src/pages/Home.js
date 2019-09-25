import React from "react";
import FilterList from "../components/FilterList";
import SpotsList from "../components/SpotsList";
import Header from "../components/Header";
import styled from "styled-components";

export default function Home({ history, location }) {
  const params = new URLSearchParams(location.search);
  const [filters, setFilters] = React.useState({
    Kategorie: params.get("Kategorie") || "",
    Distanz: params.get("Distanz") || "",
    Bewertung: params.get("Bewertung") || ""
  });
  function handleFilterChange(name, value) {
    // create a new Object
    debugger;
    const newFilters = { ...filters };
    newFilters[name] = value;

    setFilters(newFilters);
    history.push(
      `/?Kategorie=${newFilters.Kategorie}&?Distanz=${newFilters.Distanz}&?Bewertung=${newFilters.Bewertung}`
    );
  }

  const MainBody = styled.main`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  `;

  return (
    <>
      <Header />
      <MainBody>
        <FilterList
          selectedFilters={filters}
          onFilterChange={handleFilterChange}
        />
        <SpotsList selectedFilter={filters} test="6" />
      </MainBody>
    </>
  );
}
