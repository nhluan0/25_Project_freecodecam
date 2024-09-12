import { useEffect, useState } from 'react'
import './Styles.css'
const LoadMoreButton = () => {
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)
  const [inactive, setInactive] = useState(false)

  useEffect(() => {
    loadProducts()
  }, [count])
  useEffect(() => {
    if (data.length == 100) {
      setInactive(true)
    }
  }, [count])

  async function loadProducts() {
    try {
      setLoading(true)
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count == 0 ? 0 : count * 20
        }`
      )
      const products = await response.json()
      console.log(products)
      if (products && products.products && products.products.length > 0) {
        setLoading(false)
        setData([...data, ...products.products])
      }
    } catch (e) {
      setErr(e.message)
      setLoading(false)
    }
  }
  if (loading) {
    return <div>Loading , please waiting !</div>
  }
  if (err !== null) {
    return <div>Error opp!</div>
  }
  return (
    <div className="container_wraped">
      <div className="container_image">
        {data &&
          data.length > 0 &&
          data.map((item) => {
            return (
              <div key={item.id} className="image">
                <img src={item.thumbnail} />
                <h6 className="text-center">{item.title}</h6>
              </div>
            )
          })}
      </div>
      <div className="container_btn mb-2 ">
        <button
          disabled={inactive}
          className=""
          onClick={() => setCount((c) => c + 1)}
        >
          Load more products
        </button>
        {inactive ? <div>data reached 100 products </div> : null}
      </div>
    </div>
  )
}

export default LoadMoreButton
