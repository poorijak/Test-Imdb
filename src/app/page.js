import Image from 'next/image';

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';
  try {
    const res = await fetch(`https://api.themoviedb.org/3${genre === 'fetchTopRated' ? `/movie/top/_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`)
    const data = await res.json();
    const results = data.results
    console.log(results)
  }
  catch (err) {
    console.log(err)
  }

    return (
    <>

    </>
  );


}
