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
    GinKategorie: params.get("GinKategorie") || "",
  });
  
  console.log(filters)

const [checkedHerb,setCheckedHerb] = React.useState(false);
const [checkedFruchtig,setCheckedFruchtig] = React.useState(false);
const [checkedSüßlich,setCheckedSüßlich] = React.useState(false);
const [checkedTrocken,setCheckedTrocken] = React.useState(false);
const [checkedWürzig,setCheckedWürzig] = React.useState(false);
const [checkedWacholder,setCheckedWacholder] = React.useState(false);
const [checkedZitrus,setCheckedZitrus] = React.useState(false);
const [checkedKräuter,setCheckedKräuter] = React.useState(false);
const [checkedFloral,setCheckedFloral] = React.useState(false);

const [visible,setVisible] = React.useState(true);

const inputfieldvalueHerb = checkedHerb ? "Herb" : "";
const inputfieldvalueFruchtig = checkedFruchtig ? "Fruchtig" : "";
const inputfieldvalueSüßlich = checkedSüßlich ? "Süßlich" : "";
const inputfieldvalueTrocken = checkedTrocken ? "Trocken" : "";
const inputfieldvalueWürzig = checkedWürzig ? "Würzig" : "";
const inputfieldvalueWacholder = checkedWacholder ? "Wacholder" : "";
const inputfieldvalueZitrus = checkedZitrus ? "Zitrus" : "";
const inputfieldvalueKräuter = checkedKräuter ? "Kräuter" : "";
const inputfieldvalueFloral = checkedFloral ? "Floral" : "";

const geschmackObject = {Geschmack1:inputfieldvalueHerb, Geschmack2:inputfieldvalueFruchtig, Geschmack3:inputfieldvalueSüßlich, Geschmack4:inputfieldvalueTrocken,Geschmack5:inputfieldvalueWürzig,Geschmack6:inputfieldvalueWacholder,Geschmack7:inputfieldvalueZitrus,Geschmack8:inputfieldvalueKräuter,Geschmack9:inputfieldvalueFloral}

console.log(geschmackObject)

const geschmacksArrayString = JSON.stringify(geschmackObject.Geschmack1+ geschmackObject.Geschmack2+ geschmackObject.Geschmack3)

console.log("Dies ist der String:"+geschmacksArrayString)

  function handleFilterChange(name, value) {
    // create a new Object
    const newFilters = { ...filters };
    newFilters[name] = value;

    setFilters(newFilters);
    history.push(
      `/?Land=${newFilters.Land}&?Preis=${newFilters.Preis}&?GinKategorie=${newFilters.GinKategorie}
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

 const CheckboxesFilterWrapper = styled.div`
 display:flex;
 flex-wrap:wrap;
 align-items:center;
 background-color: rgba(0,0,0,0.85);
 padding-left: 15px;
 padding-right: 15px;
 `;
 
const CheckboxStyleHerb = styled.div`
display: ${visible ? "none" : "flex"};
cursor: pointer;
border: solid green 1px;
margin: 5px 3px;
padding: 5px;
background: ${checkedHerb ? 'green': 'black'};
color: ${checkedHerb ? 'black': 'green'};
`;

const CheckboxStyleFruchtig = styled.div`
display: ${visible ? "none" : "flex"};
cursor: pointer;
border: solid green 1px;
margin: 5px 3px;
padding: 5px;
background: ${checkedFruchtig ? 'green': 'black'};
color: ${checkedFruchtig ? 'black': 'green'};
`;

const CheckboxStyleSüßlich = styled.div`
display: ${visible ? "none" : "flex"};
cursor: pointer;
border: solid green 1px;
margin: 5px 3px;
padding: 5px;
background: ${checkedSüßlich ? 'green': 'black'};
color: ${checkedSüßlich ? 'black': 'green'};
`;

const CheckboxStyleTrocken = styled.div`
display: ${visible ? "none" : "flex"};
cursor: pointer;
border: solid green 1px;
margin: 5px 3px;
padding: 5px;
background: ${checkedTrocken ? 'green': 'black'};
color: ${checkedTrocken ? 'black': 'green'};
`;

const CheckboxStyleWürzig = styled.div`
display: ${visible ? "none" : "flex"};
cursor: pointer;
border: solid green 1px;
margin: 5px 3px;
padding: 5px;
background: ${checkedWürzig ? 'green': 'black'};
color: ${checkedWürzig ? 'black': 'green'};
`;

const CheckboxStyleWacholder = styled.div`
display: ${visible ? "none" : "flex"};
cursor: pointer;
border: solid green 1px;
margin: 5px 3px;
padding: 5px;
background: ${checkedWacholder ? 'green': 'black'};
color: ${checkedWacholder ? 'black': 'green'};
`;

const CheckboxStyleZitrus = styled.div`
display: ${visible ? "none" : "flex"};
cursor: pointer;
border: solid green 1px;
margin: 5px 3px;
padding: 5px;
background: ${checkedZitrus ? 'green': "black"};
color: ${checkedZitrus ? 'black': 'green'};
`;

const CheckboxStyleKräuter = styled.div`
display: ${visible ? "none" : "flex"};
cursor: pointer;
border: solid green 1px;
margin: 5px 3px;
padding: 5px;
background: ${checkedKräuter ? 'green': 'black'};
color: ${checkedKräuter ? 'black': 'green'};
`;

const CheckboxStyleFloral = styled.div`
display: ${visible ? "none" : "flex"};
cursor: pointer;
border: solid green 1px;
margin: 5px 3px;
padding: 5px;
background: ${checkedFloral ? 'green': 'black'};
color: ${checkedFloral ? 'black': 'rgba(11,156,49,1)'};
 `;

const FilterTrigger = styled.div`
cursor: pointer;
border: ${visible? "solid green 1px" : ""};
margin: 5px 3px;
padding: 5px;
background: black;
color: green;
height: 30px
`;

  return (
    <>
      <Header />
      <MainBody>
        <FilterList
          selectedFilters={filters}
          onFilterChange={handleFilterChange}
        />
      <CheckboxesFilterWrapper>
        <CheckboxStyleFloral onClick={e => setVisible(visible===false)}>◀</CheckboxStyleFloral>
        <FilterTrigger onClick={e => setVisible(!visible)}>Geschmack </FilterTrigger> &nbsp; &nbsp; &nbsp;
        <CheckboxStyleHerb onClick={e => setCheckedHerb(!checkedHerb)} inputfieldvalue={inputfieldvalueHerb} >
          Herb  
        </CheckboxStyleHerb>
        <CheckboxStyleFruchtig onClick={e => setCheckedFruchtig(!checkedFruchtig)} inputfieldvalue={inputfieldvalueFruchtig}>
          Fruchtig
        </CheckboxStyleFruchtig>
        <CheckboxStyleSüßlich onClick={e => setCheckedSüßlich(!checkedSüßlich)} inputfieldvalue={inputfieldvalueSüßlich}>
          Süß
        </CheckboxStyleSüßlich>
        <CheckboxStyleTrocken onClick={e => setCheckedTrocken(!checkedTrocken)} inputfieldvalue={inputfieldvalueTrocken}>
          Trocken
        </CheckboxStyleTrocken>
        <CheckboxStyleWürzig onClick={e => setCheckedWürzig(!checkedWürzig)} inputfieldvalue={inputfieldvalueWürzig}>  
          Würzig
        </CheckboxStyleWürzig>
        <CheckboxStyleWacholder onClick={e => setCheckedWacholder(!checkedWacholder)} inputfieldvalue={inputfieldvalueWacholder}>  
          Wacholder
        </CheckboxStyleWacholder>
        <CheckboxStyleZitrus onClick={e => setCheckedZitrus(!checkedZitrus)} inputfieldvalue={inputfieldvalueZitrus}>  
          Zitrus
        </CheckboxStyleZitrus>
        <CheckboxStyleKräuter onClick={e => setCheckedKräuter(!checkedKräuter)} inputfieldvalue={inputfieldvalueKräuter}>
          Kräuter
        </CheckboxStyleKräuter>
        <CheckboxStyleFloral onClick={e => setCheckedFloral(!checkedFloral)} inputfieldvalue={inputfieldvalueFloral}>  
          Floral
        </CheckboxStyleFloral>  
      </CheckboxesFilterWrapper>
      <BodyDescription>Klicke aud den Gin deiner Wahl</BodyDescription>  
        <SpotsList selectedFilter={filters} tasteObject={geschmackObject} />
      </MainBody>
    </>
  );
}
