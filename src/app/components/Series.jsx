'use client'
import axios from 'axios'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Slider from './Slider/Slider'
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

    console.log(resultTren);


    return (

        <>
            <h2 className="text-6xl font-bold m-10 flex justify-center">Series Treding</h2>
            <div className='w-full'>
                <Slider resultTren={resultTren} />
            </div>
        </>
    )
}
