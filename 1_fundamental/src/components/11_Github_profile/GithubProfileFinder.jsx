import { useEffect, useState } from 'react'
import './style.css'
import Card from './Card'

const GithubProfileFinder = () => {
  const [searchUsername, setSearchUsername] = useState('')
  const [info, setInfo] = useState('')

  useEffect(() => {
    if (searchUsername.trim() !== '') getDatFromGithubApi(searchUsername)
  }, [])
  async function getDatFromGithubApi(username) {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`)
      const data = await res.json()
      setInfo(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  function handleSearch() {
    if (searchUsername.trim() !== '') getDatFromGithubApi(searchUsername)
  }
  console.log(info)
  return (
    <div className="github_container">
      <div className="search_username">
        <input
          type="text"
          value={searchUsername}
          onChange={(e) => setSearchUsername(e.target.value)}
          placeholder="Enter name need search"
        />
        <button className="btn btn-sm btn-info" onClick={handleSearch}>
          search
        </button>
      </div>
      {info && searchUsername && <Card info={info} />}
    </div>
  )
}

export default GithubProfileFinder
