import React, {useState, useEffect} from 'react';
import CardsList from '../../components/CardsList/CardsList';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../components/Loading/Loading';

const MovieSearch = (props) => {
  const [moviesData, setMoviesData] = useState(null);
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(props.url);
  const query = props.query.toLowerCase().replace(/\s/g, "%20");
  console.log(query);

  // ex: https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MD_API_KEY}&language=fr
 // &query=star%20wars&page=1&include_adult=false

  useEffect(
    () => {
      (async () => {
        console.log('use effect1');
        setUrl(props.url);
        setPage(1);
      })();
    },
    [props.url]
  )

  useEffect(
    () => {
      (async () => {
        console.log('use effect2');
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
    console.log('(data.selected + 1): ', data.selected + 1);
    setPage(data.selected + 1);
  }

  const renderContent = () => {
    if (!moviesData) {
      return <Loading />
    }
    return(
      <React.Fragment>
        <CardsList data={moviesData} />
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

export default MovieSearch;