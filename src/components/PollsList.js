import React from 'react';

const PollsList = (props) => {
  return (
    <tbody>
      {props.polls.map(poll => (
        <tr key={poll.id}>
          <td>
            {poll.id}
          </td>
        </tr>
      ))}
    </tbody>
  )
}

export default PollsList;