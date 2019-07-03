import React, {useState, useEffect} from 'react';

const MovieDetailsPage = (props) => {
  const [data, setData] = useState([]);
  const movieId = props.match.params.id;

  useEffect(
    () => {
      (async () => {
        const res =
          await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_MD_API_KEY}&language=fr`);
        const resJson = await res.json();
        setData(resJson);
      })()
    },
    [movieId]
  )

  console.log(data);

  //genres => array object name
  //poster_path
  //original title
  //overview
  //release_date
  //title
  //vote_average
  //vote_count

  return (
    <h1>{props.match.params.id}</h1>
  )
}

export default MovieDetailsPage;