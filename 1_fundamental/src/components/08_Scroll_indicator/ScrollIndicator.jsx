import { useEffect, useState } from 'react'
import './styles.css'
export default function ScrollIndicator() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    getData()
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll)
  }, [percentage])

  function handleWindowScroll() {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight,
    //   document.documentElement.scrollTop
    // )
    let percent =
      (document.documentElement.scrollTop /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight)) *
      100
    setPercentage(percent)
    console.log(percent)
  }
  async function getData() {
    try {
      setLoading(true)
      const response = await fetch('https://dummyjson.com/products?limit=100')
      const data = await response.json()
      setData(data.products)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
      setErrorMessage(error.message)
      setLoading(false)
    }
  }
  //   console.log(data)
  if (loading) {
    return <div>Loading ...! please wait</div>
  }
  if (errorMessage) {
    return <div>Error {errorMessage}</div>
  }
  return (
    <div className="container_scroll">
      <div className="scroll_head">
        <h1>Scroll indicator</h1>
        <div className="scroll" style={{ width: `${percentage}%` }}></div>
      </div>

      {data &&
        data.length > 0 &&
        data.map((item) => {
          return <h5 key={item.id}>{item.title}</h5>
        })}
    </div>
  )
}
