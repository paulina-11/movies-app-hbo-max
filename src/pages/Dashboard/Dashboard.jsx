import React, { useEffect } from 'react'
import { GET_MOVIES } from '../../graphql/Queries'
import { useLazyQuery } from '@apollo/client'
import MovieCard from '../../components/MovieCard'

const Dashboard = () => {
  useEffect(() => {
    getMovies()
  }, [])
  const [getMovies, { error, data }] = useLazyQuery(GET_MOVIES)
  return (
    <div className='movieContainer'>
      {
        data && data.getMovies.map(({
          _id,
          title,
          description,
          likes,
          image,
          date
        }) => (
          <div key={_id}>
            <MovieCard
              title={title}
              description={description}
              likes={likes}
              image={image}
              date={date}
            />
          </div>
        ))
      }

    </div>
  )
}

export default Dashboard
