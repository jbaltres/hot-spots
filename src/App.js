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
background-image:url(https://www.eyeforspirits.com/wp-content/upLoads/2020/01/wacholder-2.jpg);
background-position: left;
color: white;
background-repeat: no-repeat;
background-attachment: fixed;
min-height: 100vh;
min-width: 50vw;
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
