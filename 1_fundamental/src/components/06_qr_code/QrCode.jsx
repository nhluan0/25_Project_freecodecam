import { useState } from 'react'
import { QRCode } from 'react-qr-code'
import './Styles.css'
const QrCode = () => {
  const [input, setInput] = useState('')
  const [qrCode, setQrcode] = useState('')
  function generateQrCode() {
    if (input) {
      setQrcode(input)
      setInput('')
    }
  }

  return (
    <div className="container  container-wraped">
      <div className="container-input">
        <h1>Generate Qr Code</h1>
        <input
          placeholder="nhap gia tri Qr"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button
          className=""
          disabled={qrCode ? true : false}
          onClick={generateQrCode}
        >
          Generate Qr Code
        </button>
      </div>

      <div className="container-qrCode text-center">
        <h3 className="text-center">My qr code </h3>
        <QRCode value={qrCode} size={250} />
      </div>
    </div>
  )
}

export default QrCode
