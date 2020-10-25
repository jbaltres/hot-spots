import React from "react";
import Spot from "./Spot";
import { gins } from "../api/SpotArray";
import styled from "styled-components";

const SpotsListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-grow: 1;
  align-content: flex-start;
`;

function SpotsList({ selectedFilter, tasteObject }) {
  console.log(selectedFilter);
  const filteredSpots = gins.filter(gin => {
    console.log(gin.taste[0])
      switch (selectedFilter.Preis) {
        case "0€-10€":
          if (gin.price >= 10) {
            return false;
          }
          break;
        case "10€-15€":
          if (11 > gin.price || gin.price > 15) {
            return false;
          }
          break;
        case "15€-20€":
          if (15 > gin.price || gin.price > 20) {
            return false;
            }
          break;
        case "20€-30€":
          if (20 > gin.price || gin.price > 30 ) {
            return false;
            }
           break;
        case "30€-50€":
            if (31 > gin.price || gin.price > 50) {
              return false;
              }
            break;
        case "50€-100€":
            if (50 > gin.price || gin.price > 100) {
              return false;
              }
            break;
        case ">100€":
            if (gin.price < 101) {
              return false;
              }
            break;          

        default:
          break;
      }

console.log("Geschmack 1 ist"+tasteObject.Geschmack1)   


  /*    if (tasteObject.Geschmack1 !== "kräftig") {
          return false;
      }
  */

 switch (tasteObject.Geschmack1) {
  case "kräftig":
    if (gin.taste.includes("kräftig") !== true) {
      return false;
    }
break;


  default:
    break;
  }

  switch (tasteObject.Geschmack2) {
    case "fruchtig":
      if (gin.taste.includes("fruchtig") !== true) {
        return false;
      }
  break;
  
  
    default:
      break;
    }

    switch (tasteObject.Geschmack3) {
      case "süß":
        if (gin.taste.includes("süß") !== true) {
          return false;
        }
    break;
    
    
      default:
        break;
      }

    

    switch (selectedFilter.Land) {
      case "portugal":
        if (gin.country !== "portugal") {
          return false;
        }
        break;
      case "deutschland":
        if (gin.country !== "deutschland") {
          return false;
        }
        break;
      case "schweiz":
        if (gin.country !== "schweiz") {
          return false;
        }
        break;
      case "spanien":
        if (gin.country !== "spanien") {
          return false;
        }
        break;

      default:
        break;
      }

    return true;
  });

  return (
    <SpotsListStyle>
      {filteredSpots.map(spot => {
        return <Spot key={spot.title} drink={spot} />;
      })}
    </SpotsListStyle>
  );
}

export default SpotsList;
