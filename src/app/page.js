import Image from 'next/image';
import Results from './components/Results';
import Genre from './components/Genre';

const API_KEY = process.env.API_KEY;
let results = [];

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  // genre จะดึงค่า genre จาก SearchParams
  const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`, { next: { revalidate: 10000 } });

  if (!res.ok) {
    console.log(`HTTPS Status ${res.status}`);
    throw new Error('Failed to fetch data')
  };
  const data = await res.json()
  const results = data.genres



  return (
    <>
      <Genre />
      <Results results={results} />
    </>
  );


}
