import React from 'react'
import styled from 'styled-components';
import Methane from '../svg/Methane';
import Moist from '../svg/Moist';
import Temperature from '../svg/Temperature';

const Wrapper = styled.div`
  height: 32px;
  width: 32px;
  margin-bottom: 30px;
`;

const Circle = styled.div`
  border-radius: 50%;
  border-color: #324BB8;
  border-style: solid;
  border-width: 1px;
  height: 32px;
  margin-bottom: 5px;
  width: 32px;
`;

const TitleCircle = styled.p`
  color: #324BB8;
  font-weight: 700;
  font-size: 10px;
  text-align: center;
`;

class Measurement extends React.Component {
  render() {
    const name = this.props.name;

     if (name === "methane") {
       return (
         <Wrapper>
           <Circle> <Methane width="23" height="23" /> </Circle>
           <TitleCircle> {this.props.value} </TitleCircle>
         </Wrapper>
       )
     } else if (name === "moist") {
       return (
         <Wrapper>
           <Circle> <Moist width="23" height="23" /> </Circle>
           <TitleCircle> {this.props.value} </TitleCircle>
         </Wrapper>
       )
     } else if (name === "temperature") {
      return (
        <Wrapper>
          <Circle> <Temperature width="23" height="23" /> </Circle>
          <TitleCircle> {this.props.value} </TitleCircle>
        </Wrapper>
      )
    }

  }
}


export default Measurement;
