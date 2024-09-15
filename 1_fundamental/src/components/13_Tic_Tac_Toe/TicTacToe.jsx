import { useState } from 'react'
import Square from './Square'
import './style.css'

//  0 1 2
//  3 4 5
//  6 7 8
const TicTacToe = () => {
  const [value, setValue] = useState('O')
  const [arrValue, setArrValue] = useState(Array(9).fill(''))
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(1)
  console.log(arrValue)
  const handleRestart = () => {
    setMessage('')
    setStatus(1)
    setArrValue(Array(9).fill(''))
  }
  const checkWinner = (arr, vl) => {
    setMessage('')
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
      const rs = template[i].every((item) => arr[item] == vl)
      if (rs) {
        setMessage(`${vl} winner ! please restart the game`)
        setStatus(1)
        console.log('winner')
        return 'winner'
      }
    }
    setStatus((s) => s + 1)
    if (status == arr.length) {
      setMessage('X and O draw ! please restart the game')
      console.log('draw')
      setStatus(1)
      return 'draw'
    }
    return null
  }
  return (
    <div className="container_wraped">
      <div>
        <div className="roww">
          <Square
            value1={arrValue[0]}
            value={value}
            arrValue={arrValue}
            setValue={setValue}
            setArrValue={setArrValue}
            index={0}
            checkWinner={checkWinner}
            message={message}
          />
          <Square
            value1={arrValue[1]}
            value={value}
            arrValue={arrValue}
            setValue={setValue}
            setArrValue={setArrValue}
            index={1}
            checkWinner={checkWinner}
            message={message}
          />
          <Square
            value1={arrValue[2]}
            value={value}
            arrValue={arrValue}
            setValue={setValue}
            setArrValue={setArrValue}
            index={2}
            checkWinner={checkWinner}
            message={message}
          />
        </div>
        <div className="roww">
          <Square
            value1={arrValue[3]}
            value={value}
            arrValue={arrValue}
            setValue={setValue}
            setArrValue={setArrValue}
            index={3}
            checkWinner={checkWinner}
            message={message}
          />
          <Square
            value1={arrValue[4]}
            value={value}
            arrValue={arrValue}
            setValue={setValue}
            setArrValue={setArrValue}
            index={4}
            checkWinner={checkWinner}
            message={message}
          />
          <Square
            value1={arrValue[5]}
            value={value}
            arrValue={arrValue}
            setValue={setValue}
            setArrValue={setArrValue}
            index={5}
            checkWinner={checkWinner}
            message={message}
          />
        </div>
        <div className="roww">
          <Square
            value1={arrValue[6]}
            value={value}
            arrValue={arrValue}
            setValue={setValue}
            setArrValue={setArrValue}
            index={6}
            checkWinner={checkWinner}
            message={message}
          />
          <Square
            value1={arrValue[7]}
            value={value}
            arrValue={arrValue}
            setValue={setValue}
            setArrValue={setArrValue}
            index={7}
            checkWinner={checkWinner}
            message={message}
          />
          <Square
            value1={arrValue[8]}
            value={value}
            arrValue={arrValue}
            setValue={setValue}
            setArrValue={setArrValue}
            index={8}
            checkWinner={checkWinner}
            message={message}
          />
        </div>
      </div>

      {message ? <h1>{message}</h1> : <h1>{`Next is the player: ${value}`}</h1>}
      <button className="btn btn-sm btn-info" onClick={handleRestart}>
        restart
      </button>
    </div>
  )
}

export default TicTacToe
