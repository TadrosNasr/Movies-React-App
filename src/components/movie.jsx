import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFavourite } from '../redux/store/slices/FavouriteSlice';
const Movie = (props) => {
    const imgPath = 'https://image.tmdb.org/t/p/w500/';

    const dispatch = useDispatch();
    const handleFav = () => {
        dispatch(addFavourite(props));
    }
    return ( 
        
    <div className=" card border border-2 border-warning my-2 mx-3 d-flex col-3" >
        <img src={imgPath + props.poster_path} class="card-img-top rounded-2 w-100" style={{ height: "23rem" }} alt={props.title} />
        <div className="card-body">
            <h4 className="card-title fw-bold">{props.title}</h4>
            {/* <p className="card-text">{props.release_date}</p> */}
            <h5 className="card-text fw-bold text-warning"><span className='text-dark'>Rating: </span>{props.vote_average}</h5>
            <div className='d-flex justify-content-center'>
                <Link to={`${props.id}`}>
                    <input type="button" value="View Details" className="btn btn-warning" />
                </Link>
                <input type="button" value="&hearts;" onClick={handleFav} className="mx-2 btn btn-danger"/>
            </div>
        </div>
    </div>

    );
}

export default Movie;
