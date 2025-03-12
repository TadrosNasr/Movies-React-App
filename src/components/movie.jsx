// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { addFavourite } from '../redux/store/slices/FavouriteSlice';
// const Movie = (props) => {
//     const imgPath = 'https://image.tmdb.org/t/p/w500/';

//     const dispatch = useDispatch();
//     const handleFav = () => {
//         dispatch(addFavourite(props));

//     }
//     return ( 
        
//     <div className=" card border border-2 border-warning my-2 mx-3 d-flex col-9 col-sm-5 col-lg-3" >
//         <img src={imgPath + props.poster_path} class="card-img-top rounded-2 w-100" style={{ height: "23rem" }} alt={props.title} />
//         <div className="card-body">
//             <h4 className="card-title fw-bold">{props.title}</h4>
//             {/* <p className="card-text">{props.release_date}</p> */}
//             <h5 className="card-text fw-bold text-warning"><span className='text-dark'>Rating: </span>{props.vote_average}</h5>
//             <div className='d-flex justify-content-center'>
//                 <Link to={`${props.id}`}>
//                     <input type="button" value="View Details" className="btn btn-warning" />
//                 </Link>
//                 <input type="button" value="&hearts;" onClick={handleFav} className="mx-2 btn btn-outline-danger"/>
//           </div>
//         </div>
//     </div>

    

//     );
// }

// export default Movie;



import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const imgPath = 'https://image.tmdb.org/t/p/w500/';


const ExpandMore = styled((props) => {

  const { expand, ...other } = props;

  

  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function Movie(props) {

  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };
  const handleFav = () => {
    dispatch(addFavourite(props));
    }

  return (
    <Card sx={{ maxWidth: 345 }} className='border border-2 border-warning my-2 mx-3 d-flex flex-column col-9 col-sm-5 col-lg-3'>

      <CardMedia
        component="img"
        height="194"
        image={imgPath + props.poster_path}
        alt={props.title}
        class="card-img-top rounded-2 w-100" style={{ height: "27rem" }}
      />
      <CardContent>
        <Typography variant="h5" sx={{ color: 'text.black', fontWeight:"bold" }}>
          {props.title}
        </Typography>

        <Typography variant="h5" sx={{ color: 'text.black', fontWeight:"bold" }}>
          {props.release_date}
        </Typography>

        <Typography variant="body" sx={{ color: 'text.black', fontWeight:"bold" }}>
          Rating: <span className="card-text fw-bold text-warning">{props.vote_average}</span>
        </Typography>
        
        
      </CardContent>
      <CardActions className='d-flex justify-content-center mb-3'>
        <IconButton aria-label="add to favorites" onClick={handleFav}>
          <FavoriteIcon />
          
        </IconButton>

        <Link to={`${props.id}`}>
           <input type="button" value="View Details" className="btn btn-warning" />
        </Link>
        
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
       
        
      </CardActions>
    </Card>
  );
}
