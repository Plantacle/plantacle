import React from 'react'
import styled from 'styled-components';

const Input = styled.input`
    width: 343px;
    height: 48px;
    padding-left: 50px;
    margin-bottom: 20px;
    border: none;
    letter-spacing: 2px;
    font-weight: 100;
    ::placeholder{
        color: lightgrey;
    }
`;

class ConfirmPasswordField extends React.Component{
    render(){
        return(
        <div>
            <Input type="password" placeholder="Wachtwoord"/>
        </div>
        )
    }
}

export default ConfirmPasswordField;