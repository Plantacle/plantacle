import React from 'react'
import styled from 'styled-components'
import SvgPhase1 from '../svg/Phase1';
import SvgPhase2 from '../svg/Phase2';
import SvgPhase3 from '../svg/Phase3';
import SvgPhase4 from '../svg/Phase4';
import CompostStatus from './CompostStatus';
import { measurementsApi } from '../App';

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

  async getTemperature() {
      const result = await measurementsApi.getLatest()
      console.log(result.data.temperature)
      this.setState({temperature: result.data.temperature});   //result.data.temperature
  }

  getDays() {
      let currentDay = 3;
      this.setState({day: currentDay});
  }

  render() {

    // Fase 1 actually starts at day 1, but if it gets hot too quick on day 1 or 2 the compost might fail.
    if(this.state.temperature >= 10 && this.state.temperature < 40 && this.state.day >= 1 && this.state.day < 14 || this.state.temperature >= 20 && this.state.temperature < 30 && this.state.day < 3) {
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
        return (
            <div>
                <CompostStatus text="De compost is in een goede staat! Fase 2 "> </CompostStatus>
                <SvgPhase2 />
            </div>
        )

    // Fase 3
    } else if(this.state.temperature >= 60 && this.state.temperature <= 65 && this.state.day >= 7 && this.state.day < 112) {
        //status = 'Je zit in fase 3, om de 2-3 dagen restafval toevoegen, worm castings zijn te zien'
        return <div>
            <CompostStatus text="De compost is in een goede staat! Fase 3 "> </CompostStatus>
            <SvgPhase3 />
        </div>

    // Fase 4
    } else if(this.state.temperature >= 40 && this.state.temperature <= 50 && this.state.day >= 56) {
        //status = 'Je zit in fase 3, om de 2-3 dagen restafval toevoegen, worm castings zijn te zien'
        return (
        <div>
            <CompostStatus text="De compost is in een goede staat! Fase 4"> </CompostStatus>
            <SvgPhase4 />
        </div>
        )

    // Fase 1 conception
    } else if(this.state.temperature > 30 && this.state.day < 3) {
        return (
            <div>
            <CompostStatus text='De compostbeestjes zijn te snel en te hard aan het werk'> </CompostStatus>
            <SvgPhase1 />
            </div>
        )
    } else if(this.state.temperature >= 10 && this.state.temperature < 40 && this.state.day > 14) {
        return (
            <div>
                <CompostStatus text='De compostbeestjes zijn helemaal niet aan het werk'> </CompostStatus>
                <SvgPhase1 />
            </div>
        )

    // Fase 2 conception
    } else if(this.state.temperature > 50 && this.state.day < 7) {
        return (
            <div>
            <CompostStatus text='De compostbeestjes zijn te snel en te hard aan het werk'> </CompostStatus>
            <SvgPhase2 />
            </div>
        )
    } else if(this.state.temperature >= 40 && this.state.temperature <=60 && this.state.day == 3) {
        return (
            <div>
            <CompostStatus text='De compostbeestjes zijn te snel en te hard aan het werk'> </CompostStatus>
            <SvgPhase2 />
            </div>
        )
    } else if(this.state.temperature >= 40 && this.state.temperature <=60 && this.state.day > 56) {
        return (
            <div>
                <CompostStatus text='De compostbeestjes zijn helemaal niet aan het werk'> </CompostStatus>
                <SvgPhase2 />
            </div>
        )

    // Fase 3 conception

    } else if(this.state.temperature > 65) {
        return (
            <div>
                <CompostStatus text='Er is teveel methaangas vrijgekomen'> </CompostStatus>
                <SvgPhase3 />
            </div>
        )

    } else if(this.state.temperature >= 60 && this.state.temperature <= 65 && this.state.day > 112) {
        return (
            <div>
                <CompostStatus text='Oei de compost hoort nu af te koelen'> </CompostStatus>
                <SvgPhase3 />
            </div>
        )

    // Fase 4

    } else {
        //status = 'Error'
        return <CompostStatus text='Er is iets misgegaan'> </CompostStatus>
    }
  }
}

export default CompostTransition;
