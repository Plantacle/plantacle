import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  color: #FFC759;
  letter-spacing: 3px;
  font-weight: 700;
  font-size: 30px;

  @media (min-width: 991.98px) { // Tablets
    font-size: 35px;
  }

`;

class CurrentDay extends React.Component {
  render() {
    return(
      <div>
        <Title> DAG {this.props.day} </Title>
      </div>
    )
  }
}


export default CurrentDay;
