import React from 'react'
import Measurement from '../../components/atoms/Measurement';

class Measurements extends React.Component {
  render() {

    return (

          <div className="measurements">

            <Measurement temperature={this.props.temperature} name="temperature"> </Measurement>
            <Measurement  methane={this.props.methane} name="methane"> </Measurement>
            <Measurement humidity={this.props.humidity} name="moist"> </Measurement>

          </div>
    )
  }
}


export default Measurements;
