import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './Layout';
import Overview from '../pages/Overview';
import Tasks from '../pages/Tasks';
import RegisterForm from '../pages/RegisterForm'
import LoginForm from '../pages/LoginForm'
import Navigation from '../components/organisms/Navigation'
import {AuthenticationApi, Configuration, UsersApi, MeasurementsApi} from 'plantacle-api-client'

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
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZTE1MjJjN2I3MmY2Zjc4ZmU4ZGYyZWQiLCJpYXQiOjE1Nzg3MDUyMjQsImV4cCI6MTU3ODczNDAyNH0.0jlb-3XZr0i2cxILILlvH7tBk7T4DrgpHkKc2pctEbA"
})

export const authenticationApi = new AuthenticationApi(apiConfig);
export const measurementsApi = new MeasurementsApi(apiConfig);


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      test: ''
    }

    this.myCallback = this.myCallback.bind(this);

  }

  componentDidMount() {
    this.myCallback();
  }

  myCallback(dataFromChild){
      this.setState({test: 'hallohallohallohallo'});
  }

  render() {

    return (

          <Router>
            <Switch>

              <Route path="/overview" render={()=><Overview callbackFromParent={this.myCallback} />}/>
              <Route path="/tasks" render={()=><Tasks test={this.state.test} />}/>
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
