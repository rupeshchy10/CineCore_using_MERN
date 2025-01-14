import React from 'react'
import { TMDB_IMG_URL } from '../utils/constant.js'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-2'>
      <img src={`${TMDB_IMG_URL}/${posterPath}`} alt="Movie-Image"/>
    </div>
  )
}

export default MovieCard