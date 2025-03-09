import { v4 as uuid } from 'uuid';
import Movie from './movie';
// import Details from './Details';
// import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { MoviesContext } from '../context/AppContext';
const Movies2 = () => {
    const { movies, loading, error } = useContext(MoviesContext);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error!</h1>;

    return (
        <>
            <h1 className='alert bg-warning w-50 my-3 mx-auto p-3 border border-2 border-white'>All Time Best Movies</h1>
            <div className='d-flex flex-wrap justify-content-center gap-4'>
                {movies.map(m => <Movie key={m.id} {...m} /> )}
            </div>
            {/* <div className='d-flex flex-wrap justify-content-center gap-4'>
                {movies.map(m => <Details key={uuid()} {...m} />)}
            </div> */}
        </>
    );
};
// <Link to={`/${id}`}> <Movie key={uuid()} {...m} /> </Link>
export default Movies2;