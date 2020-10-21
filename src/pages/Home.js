import React from "react";
import FilterList from "../components/FilterList";
import SpotsList from "../components/SpotsList";
import Header from "../components/Header";
import styled from "styled-components";
import SecondFilter from "../components/FilterInFilter";

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

  const BodyDescription = styled.div`
  background-color: ${props => props.theme.background};
  width: 100%;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    margin: 20px 0px;
    font-size: 1.2em;
    font-weight: bold; 
    font-style: italic;
  `;

  return (
    <>
      <Header />
      <MainBody>
        <FilterList
          selectedFilters={filters}
          onFilterChange={handleFilterChange}
        />
      <BodyDescription>Klicke aud den Gin deiner Wahl</BodyDescription>  
        <SpotsList selectedFilter={filters} test="6" />
      </MainBody>
    </>
  );
}
