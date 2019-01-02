import React, { Component } from 'react';
import { connect } from 'react-redux';
import PollsList from './PollsList';
import styles from './styles/Home.module.scss';

class Home extends Component {

  state = {
    showAnswered: false
  }

  getAnsweredPolls() {
    const pollsArray = Object.keys(this.props.questions)
      .map(key => this.props.questions[key])

    return pollsArray.filter(poll =>
      poll.optionOne.votes.includes(this.props.authedUser) ||
      poll.optionTwo.votes.includes(this.props.authedUser)
    );
  }

  getUnansweredPolls() {
    const pollsArray = Object.keys(this.props.questions)
      .map(key => this.props.questions[key])

    return pollsArray.filter(poll =>
      !poll.optionOne.votes.includes(this.props.authedUser) &&
      !poll.optionTwo.votes.includes(this.props.authedUser)
    );
  }

  render() {
    const { users, authedUser } = this.props;
    const { showAnswered } = this.state;
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>
          Home
        </h1>
        <h3 className={styles.name}>
          Logged in as: {users[authedUser].name}
        </h3>
        <table className={styles.table}>
          <thead>
            <tr className={styles['table-head-row']}>
              <th
                onClick={() => this.setState({ showAnswered: false })}
                className={showAnswered === true ?
                  styles['table-head-title'] :
                  styles['table-head-title-active']}
              >
                Unanswered
              </th>
              <th
                onClick={() => this.setState({ showAnswered: true })}
                className={showAnswered === true ?
                  styles['table-head-title-active'] :
                  styles['table-head-title']}
              >
                Answered
              </th>
            </tr>
          </thead>
          <PollsList
            polls={
              this.state.showAnswered ?
                this.getAnsweredPolls()
              : this.getUnansweredPolls()
            }
          />
        </table>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  return {
    authedUser,
    users,
    questions: Object.keys(questions)
      .map(id => questions[id])
      .sort((a, b) => b.timestamp + - a.timestamp)
  }
}

export default connect(mapStateToProps)(Home);