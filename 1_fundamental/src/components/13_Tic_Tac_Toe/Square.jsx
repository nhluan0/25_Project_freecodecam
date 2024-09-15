import React, { useState } from 'react'

const Square = ({
  value1,
  value,
  index,
  arrValue,
  setArrValue,
  setValue,
  checkWinner,
  message,
}) => {
  const handleClickSquare = () => {
    if (!value1) {
      let arr = [...arrValue]
      arr[index] = value
      setArrValue([...arr])
      const check = checkWinner(arr, value)
      if (check) return
      setValue(value === 'O' ? 'X' : 'O')
    }
  }
  return (
    <button
      className="square"
      onClick={handleClickSquare}
      disabled={message ? true : false}
    >
      {value1}
    </button>
  )
}

export default Square
