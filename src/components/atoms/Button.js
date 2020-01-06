import React from 'react'
import styled from 'styled-components';

const BigButton = styled.input`
  background: #FFC759;
  width: 343px;
  height: 48px;
  color: #FFFFFF;
  border: none;
  border-radius: 6px;
  font-weight: 500;
`

function Button(props) {
  return (
    <BigButton
      type="submit" value={props.value}
    />
  );
}

export default Button