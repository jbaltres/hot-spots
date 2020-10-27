import React from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import defaultTheme from "./themes/default";
import rudundwiß from "./themes/rudundwiß";
import dark from "./themes/dark";

const MainStyle = styled.div`
  display: flex;
  color: ${props => props.theme.main};
  flex-direction: column;
  margin: 0;
  text-align: center;
  background: ${props => props.theme.background};
`;

const MainBodyStyle = styled.div`
background-image:url(https://images.unsplash.com/photo-1453825012366-3738046cb6c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80);
background-position: center;
background-color: black;
color: white;
background-repeat: no-repeat;
background-attachment: fixed;
min-height: 100vh;
`;

function App() {
  return (
    <MainBodyStyle>
      <MainStyle>
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/new/" component={New} />
        </Router>
      </MainStyle>
    </MainBodyStyle>
  );
}

export default App;
