import React, { Fragment, Component } from 'react';
import Home from './Home';
import Nav from './Nav';
import Question from './Question';
import Login from './Login';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getQuestions } from '../actions/shared';
import { getInitialUsers } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getQuestions())
    this.props.dispatch(getInitialUsers())
  }

  render() {
    if (!this.props.authedUser) {
      return (
        <Login />
      )
    }
    return (
      <Router>
        <Fragment>
          <Nav />
          <Route path='/' exact component={Home} />
          <Route path='/questions/:id' component={Question} />
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App);
