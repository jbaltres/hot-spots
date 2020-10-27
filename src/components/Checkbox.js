import React from "react";
import styled from "styled-components"


export default function Checkbox({checked, setChecked, changes}) {
  

const Inputstyle = styled.input`
width: 30px;
font-size: 1.5em;
text-align: center;
width: 15px;
height: 15px;
`;
  

const InputColumn = styled.td`
display:flex;
align-items:center;
align-items:center;
`;


  return (
    <InputColumn>
      <Inputstyle checked={checked} type="checkbox" onChange={e => setChecked(!checked) } onClick={changes}/>
    </InputColumn>
  );
}
