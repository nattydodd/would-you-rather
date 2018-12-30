import React from 'react';

const AnswerOption = (props) => {
  const { text, questionAnswered, votePercentage, userVoted, vote, option } = props;
  return (
    <li>
      <p>{text}</p>
      {questionAnswered ?
        <p>Votes: {votePercentage}%</p> :
        <button onClick={() => vote(option)}>
          VOTE
        </button>
      }
      <p>
        {userVoted && 'You Voted!'}
      </p>
    </li>
  )
}

export default AnswerOption;