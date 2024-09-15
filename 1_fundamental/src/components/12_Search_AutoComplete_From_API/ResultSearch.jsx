import React from 'react'

const ResultSearch = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((user, index) => {
          return <li key={index}>{user}</li>
        })}
      </ul>
    </div>
  )
}

export default ResultSearch
