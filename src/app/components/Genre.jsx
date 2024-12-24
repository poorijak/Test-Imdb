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
        <div className='flex flex-wrap gap-2 justify-center'>
        {
            genre.map((genres) => (
                <button key={genres.id} className='px-6 py-2  bg-gray-800 rounded-full hover:bg-amber-500 transition-colors duration-300'>
                    {genres.name}
                </button>
            ))
        }
        </div>
    </div>
  )
}
