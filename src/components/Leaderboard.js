import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles/Leaderboard.module.scss';

class Leaderboard extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Leaderboard</h1>
        {Object.keys(this.props.users).map((id, index) => {
          const user = this.props.users[id]
          return (
            <div key={user.id} className={styles.card}>
              <span className={styles.ranking}>{index + 1}</span>
              <h2 className={styles.userName}>{user.name}</h2>
              <img alt="User Avatar" width="35px" src={user.avatarURL} />
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