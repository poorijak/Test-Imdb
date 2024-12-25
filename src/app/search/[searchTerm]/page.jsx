import Results from '@/app/components/Results';
import React from 'react'

export default async function page({params}) {
    const searchTerm = params.searchTerm; 
    // เข้าถึง searchTerm จาก params ซึ่งเป็น object
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${searchTerm}&language=en-US&include_adult=false`);
    const data = await res.json();
    const results = data.results;

  return (
    <div>
      {
        results && results.length === 0 ? (
            <h1 className='text-center'>No Results found</h1>
        ) : (
            <Results results={results} />
        )
      }
    </div>
  )
}
