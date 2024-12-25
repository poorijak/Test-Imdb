import React, { useState } from 'react';

export default function GenreFilter({ genres, selectedGenre, setSelectedGenre }) {
    return (
        <div>
            {
                [{ id: 0, name: 'All' }, ...(genres || [])].map((genre) => (
                    <button
                        key={genre.id}
                        className={`px-2 w-30 h-10 rounded-full mx-2 
                        ${selectedGenre === genre.id ? 'bg-amber-500' : 'bg-slate-500'}`} // ใช้ selectedGenre ตรวจสอบว่า genre ไหนถูกเลือก
                        onClick={() => setSelectedGenre(genre.id)} // เมื่อกดปุ่ม จะ set selectedGenre ให้เป็น id ของ genre ที่เลือก
                    >
                        {genre.name}
                    </button>
                ))
            }
        </div>
    );
}

