import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import FilterList from "./components/FilterList";
import SpotsList from "./components/SpotsList";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <FilterList />
        <SpotsList />
      </main>
    </div>
  );
}

export default App;
