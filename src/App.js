import React from "react";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import SpotsList from "./components/SpotsList";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <FilterList />
        <SpotsList />
      </main>
    </div>
  );
}

export default App;
