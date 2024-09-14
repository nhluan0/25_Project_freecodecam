import { modalData } from './data'

const Modal = ({ setOpen }) => {
  return (
    <div className="container_model">
      <p className="close" onClick={() => setOpen(false)}>
        X
      </p>
      {modalData &&
        modalData.length > 0 &&
        modalData.map((item) => {
          return (
            <div key={item.id} className={`element_common ${item.classname}`}>
              {item.content}
            </div>
          )
        })}
    </div>
  )
}

export default Modal
