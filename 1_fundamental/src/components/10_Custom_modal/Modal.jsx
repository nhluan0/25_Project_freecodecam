const Modal = ({ setOpen, header, body, footer }) => {
  return (
    <div className="container_model">
      <p className="close" onClick={() => setOpen(false)}>
        X
      </p>
      {header ? (
        <div className="element_common header">{header}</div>
      ) : (
        <div>header</div>
      )}
      {body ? (
        <div className="element_common body">{body}</div>
      ) : (
        <div>body</div>
      )}
      {footer ? (
        <div className="element_common footer">{footer}</div>
      ) : (
        <div>footer</div>
      )}
    </div>
  )
}

export default Modal
