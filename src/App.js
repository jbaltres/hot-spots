import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import SpotsList from "./components/SpotsList";

function App() {
  function handleFilterChange(category, filter) {
    console.log(category, filter);
  }
  return (
    <div className="App">
      <Header />
      <main className="main">
        <FilterList onFilterChange={handleFilterChange} />
        <SpotsList />
      </main>
    </div>
  );
}

export default App;
