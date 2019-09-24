import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import SpotsList from "./components/SpotsList";
import styled from "styled-components";

const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  text-align: center;
  height: 100vh;
`;

const MainBody = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

function App() {
  const [filters, setFilters] = React.useState({
    Kategorie: "museum"
  });
  function handleFilterChange(name, value) {
    // create a new Object
    const newFilters = { ...filters };
    newFilters[name] = value;
    setFilters(newFilters);
  }
  return (
    <MainStyle>
      <Header />
      <MainBody>
        <FilterList
          selectedFilters={filters}
          onFilterChange={handleFilterChange}
        />
        <SpotsList selectedFilter={filters} test="6" />
      </MainBody>
    </MainStyle>
  );
}

export default App;
