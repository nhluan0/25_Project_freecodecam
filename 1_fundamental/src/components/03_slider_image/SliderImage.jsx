import { useEffect, useState } from 'react'
import './Styles.css'
const SliderImage = ({ url, limit, page }) => {
  const [dataImage, setDataImage] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (url) {
      getDataImage()
    }
  }, [url, limit, page])
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide() // Automatically go to the next slide every 3 seconds
    }, 3000)

    return () => clearInterval(intervalId) // Cleanup the interval on component unmount
  }, [currentIndex, dataImage.length])
  async function getDataImage() {
    try {
      setLoading(true)
      const response = await fetch(`${url}page=${page}&limit=${limit}`)
      const data = await response.json()
      console.log(data)
      if (data) {
        setDataImage(data)

        setLoading(false)
      }
    } catch (e) {
      setError(e.message)
      setLoading(false)
    }
  }
  function prevSlide() {
    {
      currentIndex == 0
        ? setCurrentIndex(dataImage.length - 1)
        : setCurrentIndex(currentIndex - 1)
    }
  }
  function nextSlide() {
    {
      currentIndex == dataImage.length - 1
        ? setCurrentIndex(0)
        : setCurrentIndex((c) => c + 1)
    }
  }
  if (loading) {
    return <div>Loading data ...</div>
  }
  if (error !== null) {
    return <div>Error while get data with error: {error}</div>
  }
  return (
    <div className="container_wraped">
      <div className="container_image">
        {dataImage.length > 0 &&
          dataImage.map((data) => {
            return (
              <div
                className={currentIndex == data.id ? 'active' : 'inActive'}
                key={data.id}
              >
                <img src={data.download_url} alt={data.url}></img>
              </div>
            )
          })}
        <div className="btn_image">
          {dataImage.length > 0 &&
            dataImage.map((data) => (
              <button
                key={data.id}
                className={
                  data.id == currentIndex ? `btn-slide` : 'btn-inactive'
                }
                onClick={() => setCurrentIndex(data.id)}
              ></button>
            ))}
        </div>
        <button className="left-arrow" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="right-arrow" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  )
}

export default SliderImage
