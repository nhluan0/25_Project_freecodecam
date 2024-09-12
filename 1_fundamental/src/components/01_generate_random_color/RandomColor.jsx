import { useState } from 'react'
import { RandomNumber, RgbToHex } from './ConvertRgbToHexColor'

const RandomColor = () => {
  const [toggle, setToggle] = useState(false)
  const [background, setBackground] = useState('')

  const handleRandomHexColor = () => {
    setToggle(false)

    const containerDiv = document.getElementById('bg')
    let rs = '#'

    if (containerDiv) {
      // tao random color
      for (let i = 0; i < 3; i++) {
        let numberRandom = RandomNumber()
        rs += RgbToHex(numberRandom)
      }
    }
    if (rs) {
      containerDiv.style.backgroundColor = rs
      setBackground(rs)
    }
  }
  const handleRandomRgbColor = () => {
    setToggle(true)

    const containerDiv = document.getElementById('bg')
    let rs = ''
    let red = ''
    let white = ''
    let green = ''
    if (containerDiv) {
      red = RandomNumber()
      white = RandomNumber()
      green = RandomNumber()
      rs = `rgb(${red},${white},${green})`
    }
    if (rs) {
      containerDiv.style.backgroundColor = rs
      setBackground(rs)
    }
  }
  return (
    <div className="bg" id="bg" style={{ width: '100vw', height: '100vh' }}>
      <div className="d-flex justify-content-center my-1">
        <button className="btn btn-info" onClick={handleRandomHexColor}>
          Hex_Color
        </button>
        <button className="btn btn-success mx-1" onClick={handleRandomRgbColor}>
          RGB_Color
        </button>
        <button
          className="btn btn-warning"
          onClick={() => {
            toggle ? handleRandomRgbColor() : handleRandomHexColor()
          }}
        >
          Random_Color
        </button>
      </div>
      {toggle ? (
        <div className="text-center fs-3 text-white mt-5">RGB_CoLor</div>
      ) : (
        <div className="text-center fs-3  text-white mt-5">Hex_Color</div>
      )}
      {background && (
        <h1 className="text-center text-white mt-5">{background}</h1>
      )}
    </div>
  )
}

export default RandomColor
