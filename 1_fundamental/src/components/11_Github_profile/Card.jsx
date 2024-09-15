import React from 'react'

const Card = ({ info }) => {
  const { avatar_url, html_url, name, location, organizations_url } = info || {}
  return (
    <div>
      <div className="container_info">
        <div className="image">{info && <img src={avatar_url} />}</div>
        {info && (
          <div className="info">
            <p>
              url :{' '}
              <a href={html_url} target="_blank">
                infomation
              </a>
            </p>
            <p>Name :{name}</p>
            <p>Location : {location}</p>
            <p>
              organizations_url:{' '}
              <a href={organizations_url}>organizations_url</a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
