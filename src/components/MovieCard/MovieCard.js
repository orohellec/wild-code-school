import React, {useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import useStyles from './useStyles';


const MovieCard = (props) => {
  const classes = useStyles();

  useEffect(() => {

  })

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
        <Link>Voir</Link>
        <p>{props.voteAverage}/10</p>
      </CardActions>
    </Card>
  );
}

export default MovieCard;
