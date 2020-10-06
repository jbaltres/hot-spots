import React from "react";
import FilterList from "../components/FilterList";
import SpotsList from "../components/SpotsList";
import Header from "../components/Header";
import styled from "styled-components";

export default function Home({ history, location }) {
  const params = new URLSearchParams(location.search);
  const [filters, setFilters] = React.useState({
    Land: params.get("Land") || "",
    Preis: params.get("Preis") || "",
    Geschmack: params.get("Geschmack") || ""
  });
  function handleFilterChange(name, value) {
    // create a new Object
    const newFilters = { ...filters };
    newFilters[name] = value;

    setFilters(newFilters);
    history.push(
      `/?Land=${newFilters.Land}&?Preis=${newFilters.Preis}&?Geschmack=${newFilters.Geschmack}`
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
