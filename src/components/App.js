import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './Layout';
import Overview from '../pages/Overview';
import Tasks from '../pages/Tasks';
import RegisterForm from '../pages/RegisterForm'
import LoginForm from '../pages/LoginForm'
import Navigation from '../components/organisms/Navigation'
import {AuthenticationApi, Configuration, UsersApi, MeasurementsApi} from 'plantacle-api-client'
import moment from 'moment'

import { createGlobalStyle } from 'styled-components';

// Will be deleted later
import Styleguide1 from '../pages/Styleguide1';
import Styleguide2 from '../pages/Styleguide2';

export const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Poppins:300,500,700&display=swap');
    font-family: Poppins !important;
  }
`;

export const apiConfig = new Configuration({
  basePath: "https://app.plantacle.com",
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTE1MjJjN2I3MmY2Zjc4ZmU4ZGYyZWQiLCJpYXQiOjE1Nzg3NTI3NTgsImV4cCI6MTU3ODc4MTU1OH0.c63N0mRtwMNZgnZUUr2Gc8YrVoK5PUJ_VQh4FUaIb_Y"
})

export const authenticationApi = new AuthenticationApi(apiConfig);
export const measurementsApi = new MeasurementsApi(apiConfig);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      temperature: '',
      humidity: '',
      methane: '5,24',
      day: '',
      phase: {
          currentPhase: '',
          status: '',
      }
    }

    this.getMeasurements = this.getMeasurements.bind(this);
    this.getDays = this.getDays.bind(this);
    this.calculatePhase = this.calculatePhase.bind(this);

  }

  componentDidMount() {
      this.getMeasurements()
      this.getDays()
      this.calculatePhase()
  }

  // Get temperature
  async getMeasurements() {

    try {
          const result = await measurementsApi.getLatest()

          this.setState({
              temperature: result.data.temperature,
              humidity: result.data.humidity
         });

       } catch (e) {
         console.log(e);
       }

       return null;
  }

  // Get days
  getDays() {
      let startDate = moment('2020-01-7') // Dummy data
      let currentDate = moment()
      const newDate = currentDate.diff(startDate, 'days');
      this.setState({day: newDate})
  }

   calculatePhase() {

        //const result = await measurementsApi.getLatest()
        const result = {
          data: {
            temperature: 11
          }
        }

        let currentDay = 10;

        console.log(this.state.day);

        // Fase 1 actually starts at day 1, but if it gets hot too quick on day 1 or 2 the compost might fail.
        if(result.data.temperature >= 10 && result.data.temperature <= 40 && currentDay >= 3 && currentDay <= 14 || result.data.temperature >= 10 && result.data.temperature <= 30 && currentDay < 3) {
            //status = 'Je zit in fase 1, restafval al in bak gedaan en wormen bovenop gelegd';

            this.setState(prevState => {

              let phase = Object.assign({}, prevState.phase);
              phase.currentPhase = 'phase1';
              phase.status = 'De compost is in een goede staat!';
              return { phase };

            });

        // Fase 2 actually starts at day 14, but if it gets hot too quick on day 7 or earlier the compost might fail.
      } else if(result.data.temperature >= 40 && result.data.temperature <=60 && currentDay >= 7 && currentDay < 56 || result.data.temperature >=40 && result.data.temperature <= 50 && currentDay >= 3 && currentDay < 7) { // 56 = 8 weeks
            // status = 'Je zit in fase 2, 5cm restafval aan compost toevoegen, om de 3-4 dagen 2.5 cm restafval toevoegen tot dag 56';

            this.setState(prevState => {

              let phase = Object.assign({}, prevState.phase);
              phase.currentPhase = 'phase2';
              phase.status = 'De compost is in een goede staat!';
              return { phase };

            });

        // Fase 3
      } else if(result.data.temperature >= 60 && result.data.temperature <= 65 && currentDay >= 7 && currentDay <= 112) {
            //status = 'Je zit in fase 3, om de 2-3 dagen restafval toevoegen, worm castings zijn te zien'

            this.setState(prevState => {

              let phase = Object.assign({}, prevState.phase);
              phase.currentPhase = 'phase3';
              phase.status = 'De compost is in een goede staat!';
              return { phase };

            });

        // Fase 4
        } else if(result.data.temperature >= 40 && result.data.temperature <= 50 && currentDay >= 56) {
            //status = 'Je zit in fase 3, om de 2-3 dagen restafval toevoegen, worm castings zijn te zien'

            this.setState(prevState => {

              let phase = Object.assign({}, prevState.phase);
              phase.currentPhase = 'phase4';
              phase.status = 'De compost is in een goede staat!';
              return { phase };

            });


        // Fase 1 conception
        } else if(result.data.temperature > 30 && currentDay < 3) {

            this.setState(prevState => {

              let phase = Object.assign({}, prevState.phase);
              phase.currentPhase = 'phase1';
              phase.status = 'De compostbeestjes zijn te snel en te hard aan het werk';
              return { phase };

            });

        } else if(result.data.temperature >= 10 && result.data.temperature < 40 && currentDay > 14) {

            this.setState(prevState => {

              let phase = Object.assign({}, prevState.phase);
              phase.currentPhase = 'phase1';
              phase.status = 'De compostbeestjes zijn niet actief bezig';
              return { phase };

            });

        // Fase 2 conception
        } else if(result.data.temperature > 50 && currentDay < 7) {

            this.setState(prevState => {

              let phase = Object.assign({}, prevState.phase);
              phase.currentPhase = 'phase2';
              phase.status = 'De compostbeestjes zijn te snel en te hard aan het werk';
              return { phase };

            });

        } else if(result.data.temperature >= 50 && result.data.temperature <=60 && currentDay >= 56) {

            this.setState(prevState => {

              let phase = Object.assign({}, prevState.phase);
              phase.currentPhase = 'phase2';
              phase.status = 'De compostbeestjes zijn niet actief bezig';
              return { phase };

            });


        // Fase 3 conception

        } else if(result.data.temperature > 65) {

            this.setState(prevState => {

              let phase = Object.assign({}, prevState.phase);
              phase.currentPhase = 'phase3';
              phase.status = 'Er is teveel methaangas vrijgekomen';
              return { phase };

            });

        } else if(result.data.temperature >= 60 && result.data.temperature <= 65 && currentDay > 112) {

            this.setState(prevState => {

              let phase = Object.assign({}, prevState.phase);
              phase.currentPhase = 'phase3';
              phase.status = 'Oei de compost hoort nu af te koelen';
              return { phase };

            });

        // Fase 4

        } else {

            this.setState({
               phase:{
                 status: 'Er is iets misgegaan'
               }
            });
        }
  }



  render() {
    return (

          <Router>
            <Switch>

              <Route path="/overview" render={()=><Overview currentPhase={this.state.phase.currentPhase} status={this.state.phase.status} day={this.state.day} temperature={this.state.temperature} humidity={this.state.humidity} methane={this.state.methane}/>}/>
              <Route path="/tasks" render={()=><Tasks currentPhase={this.state.phase.currentPhase} humidity={this.state.humidity} />}/>
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/navigation" component={Navigation} />
              <Route path="/styleguide1" component={Styleguide1} />
              <Route path="/styleguide2" component={Styleguide2} />

            </Switch>
          </Router>


    );
  }
}

export default App;
