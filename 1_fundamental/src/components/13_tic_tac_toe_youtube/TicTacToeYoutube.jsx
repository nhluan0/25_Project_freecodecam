import { useEffect, useState } from 'react'
import './style.css'

function Square({ value, onclick }) {
  return <button onClick={onclick}>{value}</button>
}

const TicTacToeYoutube = () => {
  const [square, setSquare] = useState(Array(9).fill(''))
  const [isTurn, setIsTurn] = useState(true)
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    if (checkWinner(square)) {
      setWinner(`The winner is ${checkWinner(square)} ! please restart game`)
    } else if (!checkWinner(square) && square.every((item) => item !== '')) {
      setWinner(`X and Y draw ! please restart game`)
    } else {
      setWinner(`The next player is ${isTurn ? 'X' : 'O'}`)
    }
  }, [square, isTurn])
  function handleOnClick(index) {
    let arr = [...square]
    if (arr[index] || checkWinner(arr)) return
    arr[index] = isTurn ? 'X' : 'O'
    setIsTurn(!isTurn)
    setSquare(arr)
  }
  function checkWinner(squares) {
    const template = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < template.length; i++) {
      const [x, y, z] = template[i]
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x] // Return 'X' or 'O' as the winner
      }
    }
    return null
  }
  function handleRestart() {
    setSquare(Array(9).fill(''))
    setIsTurn(true)
    setWinner(null)
  }

  return (
    <div className="tic_tac_toe_container">
      <div>
        <Square value={square[0]} onclick={() => handleOnClick(0)} />
        <Square value={square[1]} onclick={() => handleOnClick(1)} />
        <Square value={square[2]} onclick={() => handleOnClick(2)} />
        <Square value={square[3]} onclick={() => handleOnClick(3)} />
        <Square value={square[4]} onclick={() => handleOnClick(4)} />
        <Square value={square[5]} onclick={() => handleOnClick(5)} />
        <Square value={square[6]} onclick={() => handleOnClick(6)} />
        <Square value={square[7]} onclick={() => handleOnClick(7)} />
        <Square value={square[8]} onclick={() => handleOnClick(8)} />
      </div>
      <h1>{winner}</h1>
      <button className="btn btn-md btn-success" onClick={handleRestart}>
        restart
      </button>
    </div>
  )
}

export default TicTacToeYoutube
