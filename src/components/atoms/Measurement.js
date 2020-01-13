import React from 'react'
import styled from 'styled-components';
import Methane from '../svg/Methane';
import Moist from '../svg/Moist';
import Temperature from '../svg/Temperature';
import { measurementsApi } from '../App';

const Wrapper = styled.div`
  height: 32px;
  width: 32px;
  margin-bottom: 30px;

  @media (min-width: 991.98px) { // Tablets
    margin-bottom: 45px;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  border-color: #324BB8;
  border-style: solid;
  border-width: 1px;
  height: 32px;
  margin-bottom: 5px;
  width: 32px;

  @media (min-width: 991.98px) { // Tablets
    width: 44px;
    height: 43px;
  }

`;

const TitleCircle = styled.p`
  color: #324BB8;
  font-weight: 700;
  font-size: 10px;
  text-align: center;

  @media (min-width: 991.98px) { // Tablets
    width: 44px;
    height: 43px;
    font-size: 12px;
  }

`;


const Measurement = (props) => {
    const name = props.name;

     if (name === "methane") {
       return (
         <Wrapper>
           <Circle>
              <Methane width="23" height="23"> </Methane>
           </Circle>
           <TitleCircle> {props.methane} </TitleCircle>
         </Wrapper>
       )
     } else if (name === "moist") {
       return (
         <Wrapper>
           <Circle> <Moist width="23" height="23" /> </Circle>
           <TitleCircle> {props.humidity} % </TitleCircle>
         </Wrapper>
       )
     } else if (name === "temperature") {
      return (
        <Wrapper>
          <Circle> <Temperature width="23" height="23" /> </Circle>
          <TitleCircle> {props.temperature}</TitleCircle>
        </Wrapper>
      )
    }

}


export default Measurement;
