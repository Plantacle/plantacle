import React from 'react'
import Measurement from '../components/atoms/Measurement';


class Styleguide1 extends React.Component {
  render() {
    return (
      <div>

        <Measurement name="temperature" value="66°c"> </Measurement>
        <Measurement name="methane" value="5,42"> </Measurement>
        <Measurement name="moist"  value="15 %"> </Measurement>

      </div>
    )
  }
}


export default Styleguide1;
