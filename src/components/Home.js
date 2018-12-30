import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../actions/shared';
import PollsList from './PollsList';

class Home extends Component {

  state = {
    showAnswered: true
  }

  componentDidMount() {
    this.props.dispatch(getQuestions());
  }

  getAnsweredPolls() {
    const pollsArray = Object.keys(this.props.questions).map(key => this.props.questions[key])
    return pollsArray.filter(poll =>
      poll.optionOne.votes.includes(this.props.authedUser) ||
      poll.optionTwo.votes.includes(this.props.authedUser)
    );
  }

  getUnansweredPolls() {
    const pollsArray = Object.keys(this.props.questions).map(key => this.props.questions[key])
    return pollsArray.filter(poll =>
      !poll.optionOne.votes.includes(this.props.authedUser) &&
      !poll.optionTwo.votes.includes(this.props.authedUser)
    );
  }

  render() {
    const { users, authedUser } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <h3>Logged in as: {users[authedUser].name}</h3>
        <table>
          <thead>
            <tr>
              <th onClick={() => this.setState({ showAnswered: true })}>
                Answered
              </th>
              <th onClick={() => this.setState({ showAnswered: false })}>
                Unanswered
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
    questions,
    users
  }
}

export default connect(mapStateToProps)(Home);