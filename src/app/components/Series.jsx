'use client'
import axios from 'axios'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Slider from './Slider/Slider'
import { fetchTvTrending } from '../service/api'
export default function MovieTrend() {

    const [series , setSeries] = useState([])

    useEffect(() => {
        const fetchSeries = async() => {
            try {
                const seriesTrending = await fetchTvTrending();
                setSeries(seriesTrending);
            }
            catch (error) {
                console.log('error conmponents fetchSeries : ' , error);
                
            }
        }

        fetchSeries();
    } , [])

    return (

        <>
            <h2 className="text-6xl font-bold m-10 flex justify-center">Series Treding</h2>
            <div className='w-full'>
                <Slider series={series} />
            </div>
        </>
    )
}
