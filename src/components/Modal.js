import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You Win!</h1>
          <p className="solution">{solution}</p>
          <p>You found the solution in {turn} guesses 🥳</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>Oops!</h1>
          <p className="solution">The answer was: {solution}</p>
          <p>Better Luck Next Time!</p>
        </div>
      )}
    </div>
  )
}
