import React from 'react';
import MovieGrid from '../MovieGrid/MovieGrid';
import MovieCard from '../MovieCard/MovieCard';

const CardsList = (props) => {
  const data = props.data;

  return (
    <MovieGrid>
      {data.results.map((movie) => {
        return (
          <MovieCard 
            key={movie.id} 
            id={movie.id}
            title={movie.title}
            popularity={movie.popularity}
            posterPath={movie.poster_path}
            voteAverage={movie.vote_average}
            voteCount={movie.vote_count}
            overview={movie.overview}
            releaseDate={movie.release_date}
          />
        )
      })}
    </MovieGrid>
  )
}

export default CardsList;