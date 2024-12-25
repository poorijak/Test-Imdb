'use client'
import GenreFilter from './GenreFilter';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieItems from './MovieItems';


const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export default function Genre() {
    const [genres, setGenres] = useState([])  // เก็บ genre ที่ fetch มา
    const [selectedGenre, setSelectedGenre] = useState(0) // เก็บ Genres ที่เลือก
    const [movie, setMovie] = useState([]) // เก็บ movie ที่ filter ด้วย Genres 


    useEffect(() => {
        let fetchGenre = async () => {
            try {
                const res = await axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
                setGenres(res.data.genres)

                // ^ fetch genre จาก api

            }
            catch (error) {
                console.log("Error Genres fetching : ", error)
            }
        }

        fetchGenre();
    }, [])



    // ⭡ คือการ fetch genre มาเก็บไว้ใน const genres

    useEffect(() => {
        if (selectedGenre !== undefined) {
            let fetchMovie = async () => {
                try {
                    let url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US` 
                    if (selectedGenre !== 0 ) { // ตรวจสอบค่า selectGenre id ถ้าไม่เท่ากับ 0 ให้ add url เพิ่ม 
                        url += `&with_genres=${selectedGenre}` // urlตามด้วย id ของ Genre ที่เลือก
                    }
                    const res = await axios.get(url)
                    setMovie(res.data.results)
                }

                catch (error) {
                    console.log('movieError is : ', error)
                }
            }

            fetchMovie();
        }


    }, [selectedGenre])

    // ^ คือการ fetch Movie ที่เอาไว้แสดงผลโดยมีการกรองด้วย filter มาเก็บไว้ใน const movie






    return (
        <div>
            <div className="flex flex-wrap gap-2 justify-center pb-5 max-w-6xl mx-auto">
                <GenreFilter genres={genres} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />
                <div>
                    <MovieItems movie={movie}/>
                </div>
            </div>

        </div>
    )
}
