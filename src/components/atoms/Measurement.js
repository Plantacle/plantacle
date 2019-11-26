import React from 'react'
import styled from 'styled-components';
import Methane from '../svg/Methane';
import Moist from '../svg/Moist';
import Temperature from '../svg/Temperature';

const Circle = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border-color: #324BB8;
  border-style: solid;
  border-width: 2px;
  margin-top: 10px;
`;

<<<<<<< HEAD
class Measurement extends React.Component {
  render() {
    const name = this.props.name;

     if (name === "methane") {
       return (
         <div>
         <Circle> <Methane width="20" height="20" /> </Circle>
         </div>
       )
     } else if (name === "moist") {
       return (
         <div>
         <Circle> <Moist width="20" height="20" /> </Circle>
         </div>
       )
     } else if (name === "temperature") {
      return (
        <div>
        <Circle> <Temperature width="20" height="20" /> </Circle>
        </div>
      )
    }

    return <div></div>;

  }
}
=======
export const Measurement = () => (
  <Circle>
 sdasdasd
  </Circle>
)
>>>>>>> master

export default Measurement;
