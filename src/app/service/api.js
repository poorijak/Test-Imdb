import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchMovieTrending = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US
            `)
        const results = res.data.results
        return results
    }
    catch (error) {
        console.log('Error Movietrending is : ', error)
        throw error;
    }
};

export const fetchTvTrending = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/trending/tv/week?api_key=${API_KEY}&language=en-US`)
        const results = res.data.results
        return results
    }
    catch (err) {
        console.log('Error Tvtrening is : ' , err)
        throw err;
    }
}

export const fetchCasting = async(id) => {
    try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US
`)
        const results = res.data.cast
        return results
    }
    catch(err) {
        console.log("casting error api : " , err)
        throw err;
    }
}

