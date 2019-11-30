import React from 'react'
import styled from 'styled-components';

const Check = styled.input`
background-color: #fff;
border: 1px solid #ccc;
border-radius: 100%;
cursor: pointer;
width: 28px;
`;

class Checkbox extends React.Component{
    render(){
        return(
        <div>
            <Check type="checkbox"/>
        </div>
        )
    }
}

export default Checkbox;
