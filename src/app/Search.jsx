'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

function Search() {
    const [search , setSearch] = useState('')
    const router = useRouter();
    const handleSubmit = (e) => {
      e.preventDefault();
      router.push(`/search/${search}`);
    }
  return (
    <div>
        <form  className='flex justify-between px-5 max-w-6xl mx-auto' onSubmit={handleSubmit}>
            <input type="text" placeholder='Search keywords...' className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1' value={search} onChange={(e) => setSearch(e.target.value)}
            />
            <button className='text-amber-500 disabled:text-gray-400' disabled={!search}>search</button>
        </form>
    </div>
  )
}

export default Search