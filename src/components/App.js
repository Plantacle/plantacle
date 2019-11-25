import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoMatch from '../pages/NoMatch';
import Overview from '../pages/Overview';
import Tasks from '../pages/Tasks';

function App() {
  return (

    <React.Fragment>

      <Router>
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route path="/tasks" component={Tasks} />
          <Route component={NoMatch} />
        </Switch>
      </Router>

    </React.Fragment>

  );
}

export default App;
