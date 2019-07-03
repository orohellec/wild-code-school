import React, {useState, useEffect} from 'react';
// import axiosAuth from '../../../helper/axiosAuth';
import axiosAuth from 'axios';
import MovieList from '../../../components/MovieList/MovieList';
import Loading from '../../../components/Loading/Loading';



const WishListPage = () => {

  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false)

  const [moviesList, setMoviesList] = useState({results: []});
  
  useEffect(
    () => {
      setLoading(loading => true);
      (async () => {
        const token = localStorage.getItem('authToken'); //change it tomorrow
        axiosAuth.defaults.headers.common = {'Authorization': `bearer ${token}`};
        console.log(token);
        const res = await axiosAuth.get('http://localhost:4000/user');
        const resData = {
          results: res.data.user.moviesList
        }
        setMoviesList(resData);
        setLoading(loading => false);
      })()
    },
    [moviesList.results.length, refresh]
  )

  const handleRemoveToWishList = async (e, movieId) => {
    e.preventDefault();
    try {
      await axiosAuth.delete(`http://localhost:4000/remove-movie-to-wishList/${movieId}`);
    } catch(error) {
      console.log(error);
    }
    setRefresh(!refresh); //to refresh the page
  }

  const renderContent = () => {
  if (loading) {
      return(
        <Loading />
      )
    }
    return(
      <MovieList 
        data={moviesList} 
        wishListPage={true} 
        handleRemoveToWishList={handleRemoveToWishList} 
      />
    )
  }

  return(
    <div>
      <h1>Votre Liste</h1>
      {renderContent()}
    </div>
  )
}

export default WishListPage

