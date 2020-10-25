import React from "react";
import FilterList from "../components/FilterList";
import SpotsList from "../components/SpotsList";
import Header from "../components/Header";
import styled from "styled-components";
import SecondFilter from "../components/FilterInFilter";
import Checkbox from "../components/Checkbox";

export default function Home({ history, location }) {
  const params = new URLSearchParams(location.search);
  const [filters, setFilters] = React.useState({
    Land: params.get("Land") || "",
    Preis: params.get("Preis") || "",
    GKategorie: params.get("GKategorie") || "",
  });
  
  console.log(filters)

const [checkedkräftig,setCheckedkräftig] = React.useState(false);
const [checkedfruchtig,setCheckedfruchtig] = React.useState(false);
const [checkedsüß,setCheckedsüß] = React.useState(false);


const inputfieldvalueKräftig = checkedkräftig ? "kräftig" : "";
const inputfieldvalueFruchtig = checkedfruchtig ? "fruchtig" : "";
const inputfieldvalueSüß = checkedsüß ? "süß" : "";

const geschmackObject = {Geschmack1:inputfieldvalueKräftig, Geschmack2:inputfieldvalueFruchtig, Geschmack3:inputfieldvalueSüß}

console.log(geschmackObject)

const geschmacksArrayString = JSON.stringify(geschmackObject.Geschmack1+ geschmackObject.Geschmack2+ geschmackObject.Geschmack3)

console.log("Dies ist der String:"+geschmacksArrayString)

  function handleFilterChange(name, value) {
    // create a new Object
    const newFilters = { ...filters };
    newFilters[name] = value;

    setFilters(newFilters);
    history.push(
      `/?Land=${newFilters.Land}&?Preis=${newFilters.Preis}&?GKategorie=${newFilters.GKategorie}
`
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

      Kräftig  
      <Checkbox checked={checkedkräftig} setChecked={setCheckedkräftig} inputfieldvalue={inputfieldvalueKräftig} />
      Fruchtig
      <Checkbox checked={checkedfruchtig} setChecked={setCheckedfruchtig} inputfieldvalue={inputfieldvalueFruchtig}  />
      Süß
      <Checkbox checked={checkedsüß} setChecked={setCheckedsüß} inputfieldvalue={inputfieldvalueSüß} />
      <BodyDescription>Klicke aud den Gin deiner Wahl</BodyDescription>  
        <SpotsList selectedFilter={filters} tasteObject={geschmackObject} />
      </MainBody>
    </>
  );
}
