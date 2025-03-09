import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFavourite } from '../redux/store/slices/FavouriteSlice';

const Details = () => {
    const [movie, setMovie] = useState([]);
    const {id} = useParams();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(id);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`)
            .then(response => {
                console.log(response.data);
                setMovie(response.data);
                setLoading(false);
                setError(null);
                console.log(response);
            })
            .catch(error => {
                setMovie([]);
                setLoading(false);
                setError(error);
            });
    }, []);

    return (
        <div>
            <div className='container my-5 d-flex flex-column justify-content-center col-11'>
                <div className=' d-flex flex-row justify-content-center align-items-center'>
                    <img className='w-25 h-25 rounded-2 border border-2 border-warning' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <h1 className='fw-bold text-warning'>{movie.title}</h1>
                        <span className='col-10 my-3 mx-auto '>{movie.overview}</span>
                        <p>Release Date: <span className='text-info'>{movie.release_date}</span></p>
                        <p>Rating: <span className='text-info'>{movie.vote_average}</span></p>
                    </div>
                </div>

            </div>
            
        </div>
    );
}

export default Details;
