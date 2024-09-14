import { useEffect, useState } from 'react'
import './styles.css'

const UseLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key)
      // If `storedValue` exists, parse it; otherwise, return the default value
      return storedValue ? JSON.parse(storedValue) : defaultValue
    } catch (error) {
      console.error('Error reading from localStorage', error)
      return defaultValue
    }
  })

  useEffect(() => {
    try {
      // Only save the value if it’s not null or undefined
      if (value !== undefined) {
        localStorage.setItem(key, JSON.stringify(value))
      }
    } catch (error) {
      console.error('Error saving to localStorage', error)
    }
  }, [key, value])

  return [value, setValue]
}

export default UseLocalStorage
