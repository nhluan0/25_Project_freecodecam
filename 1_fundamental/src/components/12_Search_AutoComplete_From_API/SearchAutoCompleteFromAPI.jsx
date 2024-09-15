import React, { useEffect, useState } from 'react'
import ResultSearch from './ResultSearch'

const SearchAutoCompleteFromAPI = () => {
  const [users, setUsers] = useState([])
  const [userSearch, setUserSearch] = useState('')
  const [resultUsers, setResultUsers] = useState([])

  useEffect(() => {
    getUsersFromApi()
  }, [])

  async function getUsersFromApi() {
    try {
      const res = await fetch('https://dummyjson.com/users')
      const data = await res.json()

      const userList = data.users
      if (userList && userList.length > 0) {
        let rs = userList.map((user) => user.firstName)
        setUsers(rs)
      }
    } catch (error) {
      console.log(error)
    }
  }
  console.log(users)
  const handleSearch = () => {
    if (userSearch && userSearch.trim()) {
      const rsUsers = users.filter(
        (item) => item.toLowerCase().indexOf(userSearch.toLowerCase()) !== -1
      )
      setResultUsers(rsUsers)
    }
  }
  return (
    <div className="container_wraped">
      <div className="d-flex mt-1">
        <input
          type="text"
          value={userSearch}
          onChange={(e) => setUserSearch(e.target.value)}
          placeholder="Enter name need search..."
        />
        <button className="btn btn-sm btn-info" onClick={handleSearch}>
          search
        </button>
      </div>
      {resultUsers && resultUsers.length > 0 && (
        <ResultSearch users={resultUsers} />
      )}
    </div>
  )
}

export default SearchAutoCompleteFromAPI
