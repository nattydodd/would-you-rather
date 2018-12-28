import React, { Component } from 'react';
import { getInitialUsers } from '../actions/shared';
import { connect } from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getInitialUsers())
  }

  render() {
    return (
      <div>
        <h1>
          Login
        </h1>
      </div>
    )
  }
}

export default connect()(App);