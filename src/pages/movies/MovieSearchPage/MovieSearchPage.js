import React, {useState, useEffect} from 'react';
import MovieList from '../../../components/MovieList/MovieList';
import Pagination from '../../../components/Pagination/Pagination';
import Loading from '../../../components/Loading/Loading';

const MovieSearchPage = (props) => {
  const [moviesData, setMoviesData] = useState(null);
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(props.url);
  const query = props.query.toLowerCase().replace(/\s/g, "%20");

  useEffect(
    () => {
      (async () => {
        setUrl(props.url);
        setPage(1);
      })();
    },
    [props.url]
  )

  useEffect(
    () => {
      (async () => {
        if (query) {
          try {
            const res = await fetch(`${url}&query=${query}&page=${page}`); //need to solve page problem
            const resJson = await res.json();
            setMoviesData(resJson);
          }
          catch(err) {
            console.log(err);
          }
        }
      })();
    }, 
    [url, query, page]
  )

  // Pagination method
  const handlePageClick = data => { 
    setPage(data.selected + 1);
  }

  const renderContent = () => {
    if (!moviesData) {
      return <Loading />
    }
    return(
      <React.Fragment>
        <MovieList data={moviesData} userAuth={props.userAuth} />
        <Pagination
          page={page} 
          totalPages={moviesData.total_pages}
          handlePage={handlePageClick}
        />
      </React.Fragment>
    )
  }

  return(
    renderContent()
  )
}

export default MovieSearchPage;