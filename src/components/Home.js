import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from './Login';

class Home extends Component {
  render() {
    if (!this.props.authedUser) {
      return (
        <Login />
      )
    }

    return (
      <div>
        <h1>Home</h1>
        <table>
          <thead>
            <tr>
              <th>
                Answered
              </th>
              <th>
                Unanswered
              </th>
            </tr>
          </thead>
          <tbody>
            {/* TODO: Render List of Polls */}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Home);