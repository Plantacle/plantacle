import React from 'react'
import styled from 'styled-components';

const BigButton = styled.button`
  background: #FFC759;
  width: 343px;
  height: 48px;
  color: #FFFFFF;
  border: none;
  border-radius: 6px;
  font-weight: 500;
`;

class Button extends React.Component {
    render(){
        return(
         <BigButton>Login</BigButton>
        )
    }
}

export default Button;