import { useEffect, useState } from 'react'
import Search from './Search'
import './style.css'
const WeatherApp = () => {
  const [search, setSearch] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchWeather('Nha Trang')
  }, [])
  async function fetchWeather(city) {
    setLoading(true)
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bbe6144ddceb9535077182b707a79298&lang=vn`
      )
      const data = await res.json()
      setLoading(false)
      setWeatherData(data)
      console.log(data)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  function handleSearch() {
    if (search) fetchWeather(search)
  }
  return (
    <div className="container_app_weather">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <h1 className="text-center">Loading please</h1>
      ) : (
        <div>
          <div className="city_name p-2">
            <h2 className="text-center fst-italic">
              {weatherData?.name} , <span>{weatherData?.sys?.country}</span>
            </h2>
            <div className="text-center fst-italic fw-bold">
              {new Date().toLocaleDateString('vi-VN', {
                weekday: 'long', // full day name (e.g., "Thứ hai")
                year: 'numeric', // full year (e.g., "2024")
                month: 'long', // full month name (e.g., "Tháng Chín")
                day: 'numeric', // day of the month (e.g., "16")
              })}
            </div>
            <h3 className="text-center p-1">
              {(weatherData?.main?.temp - 273.15).toFixed(2)} °C
            </h3>
            <h6 className="text-center">
              {weatherData?.weather[0]?.description}
            </h6>
            <div className="container_wind_humidity ">
              <div className="column_wind_humidity">
                <h6 className="text-center">{weatherData?.wind?.speed}</h6>
                <h6 className="text-center">Tốc dộ gió</h6>
              </div>
              <div className="column_wind_humidity">
                <h6 className="text-center">{weatherData?.main?.humidity}</h6>
                <h6 className="text-center">Độ ẩm</h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default WeatherApp
