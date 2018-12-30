import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  render() {
    return (
      <div>
        <h1>Leaderboard</h1>
        {Object.keys(this.props.users).map(id => {
          const user = this.props.users[id]
          return (
            <div key={user.id}>
              <p>{user.name}</p>
              <img width="35px" src={user.avatarURL} />
              <p>Questions Asked: {user.questions.length}</p>
              <p>Questions Answered: {Object.keys(user.answers).length}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users)
      .map(id => users[id])
      .sort((a, b) =>
        (b.questions.length + Object.keys(b.answers).length) -
        (a.questions.length + Object.keys(a.answers).length)
      )
  }
}

export default connect(mapStateToProps)(Leaderboard);