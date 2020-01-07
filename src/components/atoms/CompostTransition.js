import React from 'react'
import styled from 'styled-components'
import SvgPhase1 from '../svg/Phase1';
import SvgPhase2 from '../svg/Phase2';
import CompostStatus from './CompostStatus';

class CompostTransition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      day: '',
    }

    this.getTemperature = this.getTemperature.bind(this);
    this.getDays = this.getDays.bind(this);

  }

  componentDidMount() {
      this.getTemperature()
      this.getDays()
  }

  getTemperature() {
      let currentTemperature = 62;
      this.setState({temperature: currentTemperature});
  }

  getDays() {
      let currentDay = 50;
      this.setState({day: currentDay});
  }

  getPlantState(){

  }

  render() {

    // Fase 1 actually starts at day 1, but if it gets hot too quick on day 1 or 2 the compost might fail.
    if(this.state.temperature >= 20 && this.state.temperature < 40 && this.state.day >= 3 && this.state.day < 14 || this.state.temperature >= 20 && this.state.temperature < 30 && this.state.day < 3) {
        //status = 'Je zit in fase 1, restafval al in bak gedaan en wormen bovenop gelegd';
        return (
          <div>
              <CompostStatus text="De compost is in een goede staat! Fase 1"> </CompostStatus>
              <SvgPhase1 />
          </div>
        )

    // Fase 2 actually starts at day 14, but if it gets hot too quick on day 7 or earlier the compost might fail.
    } else if(this.state.temperature >= 40 && this.state.temperature <=60 && this.state.day >= 7 && this.state.day < 56 || this.state.temperature >=40 && this.state.temperature < 50 && this.state.day >= 4 && this.state.day < 7) { // 56 = 8 weeks
        // status = 'Je zit in fase 2, 5cm restafval aan compost toevoegen, om de 3-4 dagen 2.5 cm restafval toevoegen tot dag 56';
        return <CompostStatus text="De compost is in een goede staat! Fase 2 "> </CompostStatus>

    // Fase 3
    } else if(this.state.temperature >= 60 && this.state.temperature <= 65 && this.state.day >= 7 && this.state.day < 112) {
        //status = 'Je zit in fase 3, om de 2-3 dagen restafval toevoegen, worm castings zijn te zien'
        return (
          <div>
              <CompostStatus text="De compost is in een goede staat! Fase 3 "> </CompostStatus>
              <SvgPhase2 />
          </div>
        )

    // Fase 4
    } else if(this.state.temperature >= 40 && this.state.temperature <= 50 && this.state.day >= 56) {
        //status = 'Je zit in fase 3, om de 2-3 dagen restafval toevoegen, worm castings zijn te zien'
        return <CompostStatus text="De compost is in een goede staat! Fase 4"> </CompostStatus>

    // Fase 1 conception
    } else if(this.state.temperature > 30 && this.state.day < 3) {
        return <CompostStatus text='Oei, de compost is aan het mislukken! De compostbeestjes zijn te snel en te hard aan het werk'> </CompostStatus>
    } else if(this.state.temperature >= 20 && this.state.temperature < 40 && this.state.day > 14) {
        return <CompostStatus text='Oei, de compost is aan het mislukken! De compostbeestjes zijn helemaal niet aan het werk'> </CompostStatus>

    // Fase 2 conception
    } else if(this.state.temperature > 50 && this.state.day < 7) {
        return <CompostStatus text='Oei, de compost is aan het mislukken! De compostbeestjes zijn te snel en te hard aan het werk'> </CompostStatus>
    } else if(this.state.temperature >= 40 && this.state.temperature <=60 && this.state.day == 3) {
        return <CompostStatus text='Oei, de compost is aan het mislukken! De compostbeestjes zijn te snel en te hard aan het werk'> </CompostStatus>
    } else if(this.state.temperature >= 40 && this.state.temperature <=60 && this.state.day > 56) {
        return <CompostStatus text='Oei, de compost is aan het mislukken! De compostbeestjes zijn helemaal niet aan het werk'> </CompostStatus>

    // Fase 3 conception

    } else if(this.state.temperature > 65) {
        return <CompostStatus text='Er is teveel methaangas vrijgekomen!'> </CompostStatus>

    } else if(this.state.temperature >= 60 && this.state.temperature <= 65 && this.state.day > 112) {
        return <CompostStatus text='Oei, de compost hoort nu af te koelen'> </CompostStatus>

    // Fase 4

    } else {
        //status = 'Error'
        return <CompostStatus text='Error'> </CompostStatus>
    }
  }
}

export default CompostTransition;