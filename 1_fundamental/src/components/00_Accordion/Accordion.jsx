import { useState } from 'react'
import { data } from './Data'
import './Styles.css'
const Accordion = () => {
  const [index, setIndex] = useState(0)
  const [statusMutil, setStatusMutil] = useState(false)
  const [arrayMutil, setArrayMutil] = useState([])

  const handleOnclickExpandContent = (currentId) => {
    setArrayMutil([])
    const indexCopy = index
    if (indexCopy === currentId) {
      setIndex(0)
    } else {
      setIndex(currentId)
    }
  }
  const handleEnableMutil = (currentId) => {
    const cpyMutil = [...arrayMutil]
    let indexCurrentID = cpyMutil.indexOf(currentId)
    if (indexCurrentID === -1) cpyMutil.push(currentId)
    else cpyMutil.splice(indexCurrentID, 1)
    console.log(indexCurrentID)
    console.log(cpyMutil)
    setArrayMutil(cpyMutil)
  }
  return (
    <div className="wraped">
      <btn
        className="btn btn-primary btn-md my-1"
        onClick={() => setStatusMutil(!statusMutil)}
      >
        Enable mutil
      </btn>
      {data.length > 0 &&
        data.map((dataItem) => {
          return (
            <div key={dataItem.id} className="content">
              <div
                className="title"
                onClick={() => {
                  statusMutil
                    ? handleEnableMutil(dataItem.id)
                    : handleOnclickExpandContent(dataItem.id)
                }}
              >
                {dataItem.data} <div>+</div>
              </div>
              {statusMutil
                ? arrayMutil.indexOf(dataItem.id) !== -1 && (
                    <div>{dataItem.contentData}</div>
                  )
                : dataItem.id === index && <div>{dataItem.contentData}</div>}
            </div>
          )
        })}
    </div>
  )
}

export default Accordion
