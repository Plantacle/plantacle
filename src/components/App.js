import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './Layout';
import Overview from '../pages/Overview';
import Tasks from '../pages/Tasks';
import RegisterForm from '../pages/RegisterForm'

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



function App() {
  return (

        <Router>
          <Switch>

            <Route exact path="/" component={Overview} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/register" component={RegisterForm} />

            
            <Route path="/styleguide1" component={Styleguide1} />
            <Route path="/styleguide2" component={Styleguide2} />

          </Switch>
        </Router>


  );
}

export default App;
