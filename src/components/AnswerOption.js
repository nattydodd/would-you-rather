import React from 'react';

const AnswerOption = (props) => {
  const { text, questionAnswered, votePercentage, userVoted } = props
  return (
    <li>
      <p>{text}</p>
      {questionAnswered &&
        <p>Votes: {votePercentage}%</p>
      }
      <p>{userVoted && 'You Voted!'}</p>
    </li>
  )
}

export default AnswerOption;