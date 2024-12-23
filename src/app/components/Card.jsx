import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiThumbsUp } from "react-icons/fi";

function card({ result }) {
  return (
    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:p-4 m-2'>
      <Link href={`/movie/${result.id}`}>
        <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} width={500} height={500} className='sm:rounded-t-lg group-hover:opacity-20 transition-opacity duration-300' alt={result.original_title || result.name}></Image>
        <div>
          <p className='line-clamp-3 text-md'>{result.overview}</p>
          <h2 className='text-lg font-bold truncate '>{result.original_title || result.name}</h2>
          <p className='flex items-center'>
            <p>{result.release_date || result.first_air_date}</p>
            <FiThumbsUp className='h-5 mr-1 ml-3' />
            <p>{result.vote_count}</p>
          </p>
        </div>
      </Link>
    </div>
  )
}

export default card
