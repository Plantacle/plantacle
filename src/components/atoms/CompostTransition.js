import React from 'react'
import styled from 'styled-components'


class CompostTransition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transition: ''
    }
  }

  componentDidMount() {
    this.getTransition()
  }

  getTransition() {

    const temperature = 63;
    const days = 113;
    let status = '';

    // Fase 1 actually starts at day 1, but if it gets hot too quick on day 1 or 2 the compost might fail.
    if(temperature >= 20 && temperature < 40 && days >= 3 && days < 14 || temperature >= 20 && temperature < 35 && days < 3) {
        status = 'Je zit in fase 1, restafval al in bak gedaan en wormen bovenop gelegd';

    // Fase 2 actually starts at day 14, but if it gets hot too quick on day 7 or earlier the compost might fail.
    } else if(temperature >= 40 && temperature <=60 && days >= 7 && days < 56 || temperature >=40 && temperature < 50 && days > 3 && days < 7 ) { // 56 = 8 weeks
        status = 'Je zit in fase 2, 5cm restafval aan compost toevoegen, om de 3-4 dagen 2.5 cm restafval toevoegen tot dag 56';

    // Fase 3
    } else if(temperature >= 60 && temperature <= 65 && days >= 7 && days < 112) {
        status = 'Je zit in fase 3, om de 2-3 dagen restafval toevoegen, worm castings zijn te zien'

    // Fase 4
    } else if(temperature >= 40 && temperature <= 50 && days >= 56) {
        status = 'Je zit in fase 4, afkoelingsfase, blijf elke dag of om de dag restafval toevoegen'



    // Fase 1 conception
    } else if(temperature > 35 && days < 3) {
        status = 'Oei, de compost is aan het mislukken! De compostbeestjes zijn te snel en te hard aan het werk'
    } else if(temperature >= 20 && temperature < 40 && days > 14) {
        status = 'Oei, de compost is aan het mislukken! De compostbeestjes zijn helemaal niet aan het werk'

    // Fase 2 conception
    } else if(temperature > 50 && days < 7) {
        status = 'Oei, de compost is aan het mislukken! De compostbeestjes zijn te snel en te hard aan het werk'

    } else if(temperature >= 40 && temperature <=60 && days > 56) {
        status = 'Oei, de compost is aan het mislukken! De compostbeestjes zijn helmaal niet aan het werk'


    // Fase 3 conception

    } else if(temperature > 65) {
        status = 'Oei te hard aan het werk!!! No no no no'

    } else if(temperature >= 60 && temperature <= 65 && days > 112) {
        status = 'Oei, de compost hoort nu af te koelen'


    // Fase 4




    } else {
        status = 'Error'
    }

    this.setState({transition: status})
  }

  render() {
    return(
      <div>
          <p> {this.state.transition} </p>
      </div>
    )
  }
}

export default CompostTransition;
