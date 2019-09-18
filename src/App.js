import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import SpotsList from "./components/SpotsList";

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
    <div className="App">
      <Header />
      <main className="main">
        <FilterList
          selectedFilters={filters}
          onFilterChange={handleFilterChange}
        />
        <SpotsList selectedFilter={filters} test="6" />
      </main>
    </div>
  );
}

export default App;
