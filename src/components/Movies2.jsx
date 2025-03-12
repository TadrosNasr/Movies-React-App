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
    {/* slider */}
    <div id="carouselExampleAutoplaying" className="carousel slide mx-auto my-5 mt-5 " style={{ height:  "71vh" }} data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active"> {/* style={{ height: '90vh', width: '95vw'}} */}
                <img src="https://pixel.disco.ott.showmax.com/uuid/04fa9049-3be1-3a44-8b8e-0e92750c90cf/COVER_TITLE_WIDE?language=en-US&proposition=SHOWMAX&version=400de697-7557-30fe-adf3-b18e9c27722c" style={{ height:  "75vh"}} className="d-block col-12 col-lg-9 mx-auto img-fluid" alt="Slide 3" />
            </div>

            <div className="carousel-item "> 
                <img src="https://www.tallengestore.com/cdn/shop/products/Midway_2019_-_Hollywood_War_WW2_Original_Movie_Poster_41a0a72c-d984-4c8c-b1a4-a07243829752.jpg?v=1582782925"  style={{ height:  "75vh"}} className="d-block col-12 col-lg-9 mx-auto img-fluid" alt="Slide 1" />
            </div>
            
            <div className="carousel-item">
                <img src="https://blog.philo.com/wp-content/uploads/2023/09/John-Wick_Chapter-4.jpg" style={{ height:  "75vh"}} className="d-block col-12 col-lg-9 mx-auto" alt="Slide 2" />
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

    {/* movies */}
            <h1 className='alert bg-warning  mt-5 mx-auto p-3 col-10 col-md-4 border border-2 text-dark border-white'>All Time Best Movies</h1>
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