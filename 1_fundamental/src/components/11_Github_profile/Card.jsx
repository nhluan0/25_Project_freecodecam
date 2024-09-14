import React from 'react'

const Card = ({ info }) => {
  return (
    <div>
      <div className="container_info">
        <div className="image">{info && <img src={info.avatar_url} />}</div>
        {info && (
          <div className="info">
            <p>
              url :{' '}
              <a href={info.html_url} target="#">
                infomation
              </a>
            </p>
            <p>Name :{info.name}</p>
            <p>Location : {info.location}</p>
            <p>
              organizations_url:{' '}
              <a href={info.organizations_url}>organizations_url</a>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
