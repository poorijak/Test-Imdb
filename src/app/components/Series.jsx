'use client'
import axios from 'axios'
import Image from 'next/image'
import { useState, useEffect } from 'react'
export default function MovieTrend() {

    const API_KEY = process.env.NEXT_PUBLIC_API_KEY
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
    const [resultTren, setResultTren] = useState([])

    useEffect(() => {
        let fetchTrending = async () => {
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${API_KEY}&language=en-US
`)
                setResultTren(res.data.results)
            }
            catch (error) {
                console.log('Error trending is : ', error)
            }
        }
        fetchTrending();
    }, [])

    return (

        <>
        <h2 className="text-6xl font-bold m-10 flex justify-center">Series Treding</h2>
            <div className='max-w-6xl gap-5 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'>


                {
                    resultTren.map((result) => (
                        <div key={result.id}>
                            <Image
                                src={`https://image.tmdb.org/t/p/original${result.poster_path || result.backdrop_path}`}
                                width={300}
                                height={200}
                                alt={result.name || result.original_title}
                                className='rounded-lg '
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
}
