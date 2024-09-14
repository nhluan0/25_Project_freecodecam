import { useState } from 'react'
import './styles.css'
import { data } from './Data'
const Tabs = () => {
  const [indexCurrent, setIndexCurrent] = useState(0)

  function handleOnclickTab(currentIndex) {
    setIndexCurrent(currentIndex)
  }
  return (
    <div className="container_wraped">
      <div className="tab">
        {data &&
          data.length > 0 &&
          data.map((item, index) => {
            return (
              <p
                key={index}
                className={
                  indexCurrent == index ? 'tag_label' : 'tag_label text-dark'
                }
                onClick={() => handleOnclickTab(index)}
                style={{
                  backgroundColor: `${
                    indexCurrent == index ? '#be2185' : '#9acd32'
                  }`,
                }}
              >
                {item.label}
              </p>
            )
          })}
      </div>
      {data && data[indexCurrent] && (
        <div className="tab_content">{data[indexCurrent].content}</div>
      )}
    </div>
  )
}

export default Tabs
