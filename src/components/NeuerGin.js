import React from "react"
import styled from "styled-components"
import { gins, tonicwaters } from "../api/SpotArray";
import TonicSearchbar from "./TonicSearchbar";
import ZutatenSearchbar from "./ZutatenFilter";

const StyledDiv = styled.div`

margin:15px 10px;
border: solid;
background-color: papayawhip`;

const Auswahl = styled.button`
width: 70px;
height: 40px;
background-color: green;
color: white;
`;

function  NeuerGin({ndrink}){

    const [hallo, sethallo] = React.useState("");

    const gefiltertesHallo = hallo >= ndrink.title? ndrink.title : "sehr leer" ;
    console.log(gefiltertesHallo)
    return(
<>

<StyledDiv key={ndrink.title}>{ndrink.title}<p>{ndrink.price}</p>{ndrink.country}
        <Auswahl onClick={() => sethallo(hallo + ndrink.title)}>Click me!</Auswahl> {gefiltertesHallo}
        <TonicSearchbar fS={gefiltertesHallo}/>
        <ZutatenSearchbar fS={gefiltertesHallo}/>
</StyledDiv>        
        </>
    );
}

export default NeuerGin;