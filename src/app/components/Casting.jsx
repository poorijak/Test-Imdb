import React, { useEffect, useState } from 'react'
import { fetchCasting } from '../service/api'

export default function Casting({ id }) {
    const [cast, setCasting] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const castFetchFunction = async () => {
            try {
                const castingData = await fetchCasting(id)
                setCasting(castingData)
            } catch (err) {
                console.log("Error fetching cast: ", err)
                setError('Failed to fetch casting data.')
            }
        }
        castFetchFunction()
    }, [id])  // เพิ่ม `id` เป็น dependency ใน useEffect

    if (error) {
        return <div>{error}</div>
    }

    return (
        <div>
            {cast.map((actor) => (
                <div key={actor.id}>
                    <p>{actor.name}</p>
                    {actor.profile_path && (
                        <img
                            src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} 
                            alt={actor.name} 
                            width="100" 
                            height="150"
                        />
                    )}
                </div>
            ))}
        </div>
    )
}
