import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './Layout';
import Overview from '../pages/Overview';
import Tasks from '../pages/Tasks';

function App() {
  return (

    <React.Fragment>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Overview} />
            <Route path="/tasks" component={Tasks} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>

  );
}

export default App;
