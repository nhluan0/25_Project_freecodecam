import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './Styles.css'
const StarRating = ({ numOfStar = 5 }) => {
  const [hover, setHover] = useState(0)
  const [indexId, setIndexId] = useState(0)

  function handleOnClick(currentIndex) {
    setIndexId(currentIndex)
  }
  function handleOnMouseEnter(currentIndex) {
    setHover(currentIndex)
  }
  function handleOnMouseDown() {
    setHover(indexId)
  }
  return (
    <div className="d-flex justify-content-center ">
      {[...Array(numOfStar)].map((_, index) => {
        index += 1
        return (
          <FaStar
            className={index <= (hover || indexId) ? `active` : `inActive`}
            key={index}
            style={{
              cursor: 'pointer',
            }}
            onClick={() => handleOnClick(index)}
            onMouseEnter={() => handleOnMouseEnter(index)}
            onMouseDown={() => handleOnMouseDown}
            size={40}
          />
        )
      })}
    </div>
  )
}

export default StarRating
