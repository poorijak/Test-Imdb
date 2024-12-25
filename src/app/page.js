import Image from 'next/image';
import Results from './components/Results';
import Genre from './components/Genre';
import axios from 'axios';
import MovieTrend from './components/MovieTrend';
import Series from '@/app/components/Series'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';

  // ดึงข้อมูลจาก TMDB API
  let results = [];
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`
    );

    results = res.data.results; // ดึงรายการ Movies/TV Shows
  } catch (error) {
    console.error('Error fetching data:', error);
    
  } 

  return (
    <>
      <Results results={results} />
      <Genre />
      <MovieTrend/>
      <Series/>
    </>
  );
}
