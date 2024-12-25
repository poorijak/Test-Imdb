import React, { useState } from 'react'

export default function GenreFilter({ genres, selectedGenres, setSelectedGenre }) {

    const [selectedActive, setSelectedActive] = useState('All')



    return (
        <div>
            <button className='px-8 py-3 bg-slate-500 rounded-full mx-2'>All</button>
            {
                genres.map((genre) => (
                    <button key={genre.id} className='px-2 w-30 h-10 bg-slate-500 rounded-full mx-2' onClick={() => setSelectedGenre(genre)}>{genre.name}</button>
                ))
            }
        </div>
    )
}
