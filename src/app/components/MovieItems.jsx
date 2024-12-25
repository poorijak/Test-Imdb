import Image from 'next/image'
import React from 'react'

export default function MovieItems({ movie }) {
  return (
    <div>
      <div className='max-w-6xl gap-5 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>
        {movie && movie.length > 0 ? (
          movie.map((movieItem) => (
            <div key={movieItem.id} className=''>
              {/* ตรวจสอบว่า movieItem.poster_path หรือ movieItem.backdrop_path มีค่าไหม */}
              <Image 
                src={`https://image.tmdb.org/t/p/original${movieItem.poster_path || movieItem.backdrop_path}`} 
                width={300} 
                height={200} 
                alt={movieItem.name || movieItem.original_title}
                className='rounded-lg ' 
              />
            </div>
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>
    </div>
  )
}
