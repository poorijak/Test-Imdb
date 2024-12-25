import React from 'react'

export default function MovieItems({movie}) {
  return (
    <div>
      <div>
        {movie.length > 0 ? (
          movie.map((movieItem) => (
            <p key={movieItem.id}>{movieItem.name || movieItem.original_title}</p>
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>

    </div>
  )
}
