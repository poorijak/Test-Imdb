'use client'; //
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
const API_KEY = process.env.NEXT_PUBLIC_API_KEY
import axios from 'axios';
import Casting from '@/app/components/Casting';

export default async function page({ params }) { // param คือ parameter ของ dynamic router => movie/[id] param คือ id
    const { id } = await params
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    const movie = await res.json()
    const genre = movie.genres
    console.log(movie)
    





    return (
        <div className='w-11/12 mx-auto mt-10'>
            <div className='flex flex-col md:flex-row'>
                <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} width={500} height={300} className='rounded-lg' alt={movie.original_title || movie.name}></Image>
                <div className="p-5">
                    <h1 className='font-bold mb-4'>{movie.title}</h1>
                    <p className='mb-3'>{movie.overview}</p>
                    <p className='mb-2'><span className='font-semibold mr-2'>Release Date : </span> {movie.release_date || movie.first_air_date}</p>
                    <p><span className='font-semibold mr-2'>Rating : </span>{movie.vote_average} / 10</p>
                    <div className=''>
                        <p className='font-semibold flex gap-2'>Genre :
                            <span className='font-normal gap-2  flex'>
                                {
                                    genre.map((genres) => (
                                        <div key={genres.id}>
                                            <span>{genres.name}</span>
                                        </div>
                                    ))
                                }
                            </span>
                        </p>
                    </div>
                        <Link href={movie.homepage} target='blank'>Wacth now!</Link>
                </div>
                <Casting id={id}/>

            </div>
        </div>
    )
}
