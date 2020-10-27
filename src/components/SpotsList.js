import React from "react";
import Spot from "./Spot";
import { gins } from "../api/SpotArray";
import styled from "styled-components";

const SpotsListStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-grow: 1;
  justify-content: space-around;
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center
  };
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
  

 switch (tasteObject.Geschmack1) {
  case "Herb":
    if (gin.taste.includes("Herb") !== true) {
      return false;
    }
break;


  default:
    break;
  }

  switch (tasteObject.Geschmack2) {
    case "Fruchtig":
      if (gin.taste.includes("Fruchtig") !== true) {
        return false;
      }
  break;
  
  
    default:
      break;
    }

    switch (tasteObject.Geschmack3) {
      case "Süßlich":
        if (gin.taste.includes("Süßlich") !== true) {
          return false;
        }
    break;
    
    
      default:
        break;
      }
switch (tasteObject.Geschmack4) {
      case "Trocken":
        if (gin.taste.includes("Trocken") !== true) {
          return false;
        }
    break;
    
    
      default:
        break;
      }
switch (tasteObject.Geschmack5) {
      case "Würzig":
        if (gin.taste.includes("Würzig") !== true) {
          return false;
        }
    break;
    
    
      default:
        break;
      }     
switch (tasteObject.Geschmack6) {
      case "Wacholder":
        if (gin.taste.includes("Wacholder") !== true) {
          return false;
        }
    break;
    
    
      default:
        break;
      } 
      switch (tasteObject.Geschmack7) {
        case "Zitrus":
          if (gin.taste.includes("Zitrus") !== true) {
            return false;
          }
      break;
      
      
        default:
          break;
        }

switch (tasteObject.Geschmack8) {
      case "Kräuter":
        if (gin.taste.includes("Kräuter") !== true) {
          return false;
        }
    break;
    
    
      default:
        break;
      }
switch (tasteObject.Geschmack9) {
      case "Floral":
        if (gin.taste.includes("Floral") !== true) {
          return false;
        }
    break;
    
    
      default:
        break;
      }

    

    switch (selectedFilter.Land) {
      case "Deutschland":
        if (gin.country !== "Deutschland") {
          return false;
        }
        break;
      case "Spanien":
        if (gin.country !== "Spanien") {
          return false;
        }
        break;
      case "Großbritanien":
        if (gin.country !== "Großbritanien") {
          return false;
        }
        break;
      case "Schottland":
        if (gin.country !== "Schottland") {
          return false;
        }
        break;
      case "Japan":
        if (gin.country !== "Japan") {
          return false;
        }
        break;

      default:
        break;
      }


    switch (selectedFilter.GinKategorie) {
      case "London Dry Gin":
        if (gin.category !== "London Dry Gin") {
          return false;
        }
        break;
      case "Dry Gin / Destillierter Gin":
        if (gin.category !== "Dry Gin / Destillierter Gin") {
          return false;
        }
        break;
      case "(Sloe Gin)":
        if (gin.category !== "(Sloe Gin)") {
          return false;
        }
        break;
      case "New Western Dry Gin":
        if (gin.category !== "New Western Dry Gin") {
          return false;
        }
        break;
      case "Old Tom Gin":
        if (gin.category !== "Old Tom Gin") {
          return false;
        }
        break;
      case "Reserve Gin / Aged Gin":
        if (gin.category !== "Reserve Gin / Aged Gin") {
          return false;
        }
        break;
      case "Cordial Gin":
        if (gin.category !== "Cordial Gin") {
          return false;
        }
        break;
      case "Pink Gin":
        if (gin.category !== "Pink Gin") {
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
