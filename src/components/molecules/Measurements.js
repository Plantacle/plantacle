import React from 'react'
import Measurement from '../../components/atoms/Measurement';

class Measurements extends React.Component {
  render() {
    return (

          <div className="measurements">

            <Measurement name="temperature"> </Measurement>
            <Measurement name="methane"> </Measurement>
            <Measurement name="moist"> </Measurement>

          </div>
    )
  }
}


export default Measurements;
