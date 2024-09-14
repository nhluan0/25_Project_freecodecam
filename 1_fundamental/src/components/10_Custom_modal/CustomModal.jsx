import { useState } from 'react'

import './styles.css'
import Modal from './Modal'
const CustomModal = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="container_wraped">
      <button
        className="btn btn-sm btn-success my-1"
        onClick={() => setOpen(!open)}
      >
        open modal
      </button>
      {open && (
        <div className="container_modal" onClick={() => setOpen(!open)}></div>
      )}
      {open && <Modal setOpen={setOpen} />}
    </div>
  )
}

export default CustomModal
