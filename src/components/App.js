import React, { Fragment, Component } from 'react';
import Home from './Home';
import Nav from './Nav';
import Question from './Question';
import Leaderboard from './Leaderboard';
import Login from './Login';
import Add from './Add';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getQuestions } from '../actions/shared';
import { getUsers } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getQuestions())
    this.props.dispatch(getUsers())
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
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/add' component={Add} />
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
