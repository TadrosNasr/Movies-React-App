import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavourite } from '../redux/store/slices/FavouriteSlice';

const Favourites = () => {
    const favouriteMovies = useSelector(state => state.favourites.favourites);
    const dispatch =useDispatch();
    console.log(typeof(favouriteMovies));
    const imgPath = 'https://image.tmdb.org/t/p/w500/';

    if (!favouriteMovies || favouriteMovies.length === 0) {
        return (
        <div style={{height: '100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
            <img className='w-25 mt-5' src='public/broken-heart.png'></img>
            <h1 className="d-flex justify-content-center text-center my-4">No Favourites Yet!</h1>

        </div>
    )}
    return (
        <div className="container">
            <h1 className="my-4 text-center text-warning">Favourite Movies</h1>
            <div className="row">
                {favouriteMovies.map(movie => (
                    <div key={movie.id} className="d-flex col-md-3 my-2 gap-2">
                        <div className="card border border-2 border-warning">
                            <img src={imgPath + movie.poster_path} className="card-img-top" alt={movie.title} />
                            <div className="card-body text-center">
                                <h5 className="card-title">{movie.title}</h5>
                                <button className="btn btn-danger" onClick={() => dispatch(removeFavourite(movie))}>
                                Remove 💔
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Favourites;
