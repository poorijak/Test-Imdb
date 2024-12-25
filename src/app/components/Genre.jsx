'use client'
import GenreFilter from './GenreFilter';
import { useState, useEffect } from 'react';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Genre() {
    const [genres, setGenres] = useState([])  // เก็บ genre ที่ fetch มา
    const [selectedGenre, setSelectedGenre] = useState(null) // เก็บ Genres ที่เลือก
    const [movie, setMovie] = useState([]) // เก็บ movie ที่ filter ด้วย Genres 

    useEffect(() => {
        
            .then((res) => res.json())
            .then((data) => setGenres(data.genres))
            .catch((err) => console.log('Genres error is: ', err))


        try {
            const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
            if (!res.ok) {
                console.log(`HTTPS Status ${res.status}`);
                throw new Error('Failed to fetch data')
            }
            const data = res.data

        }

        catch {
            console.log(`HTTPS Status ${res.status}`);
            throw new Error('Failed to fetch data')
        }

    }, [])

    // ⭡ คือการ fetch genre มาเก็บไว้ใน const genres

    useEffect(() => {
        if (selectedGenre) {
            fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${selectedGenre}`)
                .then((res) => res.json())
                .then((data) => setMovie(data.results))
                .catch((err) => console.log('Movie Error is : ', err))
        }
    }, [])

    // ^ คือการ fetch Movie ที่เอาไว้แสดงผลโดยมีการกรองด้วย filter มาเก็บไว้ใน const movie




    // console.log(genre);

    return (
        <div>
            <div className='flex flex-wrap gap-2 justify-center pb-5'>
                <GenreFilter genres={genres} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />

            </div>
        </div>
    )
}
