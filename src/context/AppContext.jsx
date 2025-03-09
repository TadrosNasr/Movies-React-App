import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';


export const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const fetchMovies = async () => {

            try {
                const response = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7');
                setMovies(response.data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);


    return (
        <MoviesContext.Provider value={{ movies, loading, error }}>
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesProvider;
