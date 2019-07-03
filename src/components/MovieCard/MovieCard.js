import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import axiosAuth from '../../helper/axiosAuth';

import useStyles from './useStyles';

const MovieCard = (props) => {
  const classes = useStyles();

  const handleAddToWishlist = async (e) => {
    e.preventDefault();
    console.log('propsID', props.id);
    
    try {
      const res = await axiosAuth.post('http://localhost:4000/add-movie-to-wishlist', {movieId: props.id});
      if (res.status === 200) {
        console.log('add to wishlist');
      }
    } catch(error) {
      console.log(error);
    }
  }

  // const handleRemoveToWishList = async (e) => {
  //   e.preventDefault();
  //   console.log('propsId', props.id);
  //   const movieId = props.id;
  //   try {
  //     const res = await axiosAuth.delete(`http://localhost:4000/remove-movie-to-wishList/${movieId}`);
  //     console.log('remove res', res);
  //   } catch(error) {
  //     console.log(error);
  //   }
  // }

  const addToWhishList = () => {
    if (props.userAuth) {
      return(
        <button onClick={handleAddToWishlist}>Ajouter à la liste</button>
      )
    }
  }

  const removeToWhishList = () => {
    if (props.wishListPage) {
      return(
        <button onClick={(e) => props.handleRemoveToWishList(e, props.id)}>Supprimer de la liste</button>
      )
    }
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.title}
        subheader={props.releaseDate}
      />
      <CardMedia
        className={classes.media}
        image={`http://image.tmdb.org/t/p/w185${props.posterPath}`}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.overview}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link component={RouterLink} to={`/movie/${props.id}`}>Voir</Link>
        <p>{props.voteAverage}/10</p>
        <div>
          {addToWhishList()}
          {removeToWhishList()}
        </div>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
