'use client';
import { useState, useEffect } from 'react';
import { fetchMovieTrending } from '../service/api'; // import ฟังก์ชัน fetchMovieTrending
import Slider from './Slider2/SliderMovie';

export default function MovieTrend() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const trendingMovies = await fetchMovieTrending(); // ดึงข้อมูลมา
                setMovie(trendingMovies); // ตั้งค่า state ด้วยข้อมูลที่ได้
            } catch (err) {
                console.log('Error fetching trending movies:', err);
            }
        };

        fetchMovies();
    }, []); // ใช้ [] เพื่อให้ useEffect ทำงานแค่ครั้งเดียวเมื่อ component mount

    return (
        <>
            <h2 className="text-6xl font-bold m-10 flex justify-center">Movie Trending</h2>
            <div className='max-w-full'>
                <Slider movie={movie} />
            </div>
        </>
    );
}
