import React, {useState, useEffect} from 'react';
import CardsList from '../../components/CardsList/CardsList';
import Pagination from '../../components/Pagination/Pagination';
import Loading from '../../components/Loading/Loading';

const MoviesPage = (props) => {
  const [moviesData, setMoviesData] = useState(null);
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(props.url);

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
        try {
          const res = await fetch(`${url}&page=${page}`); //need to solve page problem
          const resJson = await res.json();
          setMoviesData(resJson);
        }
        catch(err) {
          console.log(err);
        }
      })();
    }, 
    [page, url]
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

export default MoviesPage;