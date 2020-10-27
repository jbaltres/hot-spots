import React from "react"
import styled from "styled-components"
import { ingredients } from "../api/SpotArray";
import NeueZutat from "./NeueZutat";

const StyledDiv = styled.div`

margin:15px 10px;
border:  1px solid;
display: flex;
flex-wrap: wrap;
justify-content: center`;



function  ZutatenSearchbar({fS}){

let filteredIngredients = [];

for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i].gin.includes(fS)) {
        filteredIngredients.push(ingredients[i]);
    }
}

return (
    <>
    <p>Dazu passende Zutaten:</p>
    <StyledDiv>
        {filteredIngredients.map(ingredient => {
          return <NeueZutat key={ingredient.title} nZutat={ingredient}/>
        })}
      </StyledDiv>
    </>
  );}


export default ZutatenSearchbar;