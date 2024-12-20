import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function card({result}) {
  return (
    <div className='group'>
      <Link href={`/movie/${result.id}`}>
        <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} width={500} height={500} className='sm:rounded-t-lg group-hover:opacity-20 transition-opacity duration-300'></Image>
      </Link>
    </div>
  )
}

export default card
