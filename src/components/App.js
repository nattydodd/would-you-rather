import React, { Fragment, Component } from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path='/' exact component={Home} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
