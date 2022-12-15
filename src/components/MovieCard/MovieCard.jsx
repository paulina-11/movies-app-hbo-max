import React from 'react'

const MovieCard = ({
  title,
  description,
  likes,
  image,
  date
}) => {
  return (
    <ul>
      <li className='cardMovie'>
        <div>
          <img className='cardMovie__imgs' src={image} alt={title} />
          <div>
            <h3 className='cardMovie__title'>{title}</h3>
            <p className='cardMovie__description'>{description}</p>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default MovieCard
