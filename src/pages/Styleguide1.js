import React from 'react'
import Measurement from '../components/atoms/Measurement';


class Styleguide1 extends React.Component {
  render() {
    return (
      <div>
          <div className="measurements">

            <Measurement name="temperature" value="66°c"> </Measurement>
            <Measurement name="methane" value="5,42"> </Measurement>
            <Measurement name="moist"  value="15 %"> </Measurement>

          </div>


          <br />
          <br />
          <br />



          <div className="measurements">

            <Measurement name="temperature" value="66°c"> </Measurement>
            <Measurement name="methane" value="5,42"> </Measurement>
            <Measurement name="moist"  value="15 %"> </Measurement>

          </div>
      </div>
    )
  }
}


export default Styleguide1;
