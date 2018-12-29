import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../actions/shared';
import Login from './Login';
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
      poll.optionOne.votes.includes(this.props.authedUser.id) ||
      poll.optionTwo.votes.includes(this.props.authedUser.id)
    );
  }

  getUnansweredPolls() {
    const pollsArray = Object.keys(this.props.questions).map(key => this.props.questions[key])
    return pollsArray.filter(poll =>
      !poll.optionOne.votes.includes(this.props.authedUser.id) &&
      !poll.optionTwo.votes.includes(this.props.authedUser.id)
    );
  }

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

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    questions
  }
}

export default connect(mapStateToProps)(Home);