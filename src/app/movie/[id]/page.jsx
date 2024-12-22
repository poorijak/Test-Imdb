import Image from 'next/image';
import React from 'react'
const API_KEY = process.env.API_KEY

export default async function page({ params }) {
    const movieId = params.id
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
    const movie = await res.json()
    console.log(movie)
    
    return (
        <div className='w-11/12 mx-auto mt-10'>
            <div className='flex flex-col md:flex-row'>
                <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} width={500} height={300} className='rounded-lg'></Image>
                <div className="p-5">
                    <h1 className='font-bold mb-4'>{movie.title}</h1>
                    <p className='mb-3'>{movie.overview}</p>
                    <p className='mb-2'><span className='font-semibold mr-2'>Release Date : </span> {movie.release_date || movie.first_air_date}</p>
                    <p><span className='font-semibold mr-2'>Rating : </span>{movie.vote_average} / 10</p>
                </div>

            </div>
        </div>
    )
}