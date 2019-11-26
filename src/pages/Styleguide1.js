import React from 'react'
import Measurement from '../components/atoms/Measurement';


class Styleguide1 extends React.Component {
  render() {
    return (
      <div>

        <Measurement name="temperature"> </Measurement>
        <Measurement name="methane"> </Measurement>
        <Measurement name="moist"> </Measurement>

      </div>
    )
  }
}


export default Styleguide1;
