import React from 'react'

const API_KEY = process.env.API_KEY;

export default async function Genre() {
    const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en`)
    if (!res.ok) {
        console.log('API err :', res.status);
        
    }
    const data = await res.json()
    const genre = data.genres

    // console.log(genre);
    
  return (
    <div>
        {
            genre.map((genres) => (
                <div key={genres.id}>
                    <p>{genres.name}</p>
                </div>
            ))
        }
    </div>
  )
}
