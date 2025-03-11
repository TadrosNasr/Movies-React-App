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
    <div id="carouselExampleAutoplaying" className="carousel slide d-flex justify-content-center align-items-center mx-auto my-5 mt-5" style={{ height: 600}} data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item "  style={{ height: 600}}> 
                <img src="https://www.tallengestore.com/cdn/shop/products/Midway_2019_-_Hollywood_War_WW2_Original_Movie_Poster_41a0a72c-d984-4c8c-b1a4-a07243829752.jpg?v=1582782925"  style={{ height: 600}} className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item" style={{ height: 600}}>
                <img src="https://blog.philo.com/wp-content/uploads/2023/09/John-Wick_Chapter-4.jpg" style={{ height: 600}} className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item active" style={{ height: 600}}>
                <img src="https://pixel.disco.ott.showmax.com/uuid/04fa9049-3be1-3a44-8b8e-0e92750c90cf/COVER_TITLE_WIDE?language=en-US&proposition=SHOWMAX&version=400de697-7557-30fe-adf3-b18e9c27722c" style={{ height: 600}} className="d-block w-100" alt="Slide 3" />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
            <h1 className='alert bg-warning w-50 mt-5 mx-auto p-3 border border-2 text-dark border-white'>All Time Best Movies</h1>
            <div className='d-flex flex-wrap justify-content-center gap-4 w-100'>
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