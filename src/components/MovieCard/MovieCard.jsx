import React from 'react'

const MovieCard = () => {
  return (
    <li className='cardMovie'>
      <div>
        <img className='cardMovie__imgs' src='https://www.gonvill.com.mx/imagenes/9788445/978844500068.JPG' alt='pelicula' />
        <div>
          <h3 className='cardMovie__title'>El señor de los anillos</h3>
        </div>
      </div>
    </li>
  )
}

export default MovieCard
