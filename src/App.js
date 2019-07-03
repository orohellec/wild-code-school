import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import { Switch, Route, withRouter } from 'react-router-dom';
import axios from 'axios';

import Navigation from './components/Navigation/Navigation';
import MoviesPage from './pages/movies/MoviesPage/MoviesPage';
import MovieDetailsPage from './pages/movies/MovieDetailsPage/MovieDetailsPage';
import MovieSearchPage from './pages/movies/MovieSearchPage/MovieSearchPage';
import RegisterPage from './pages/user/RegisterPage/RegisterPage';
import LoginPage from './pages/auth/LoginPage/LoginPage';
import WhishListPage from './pages/user/WhishList/WhishList';

import * as Constants from './constants';
require('dotenv').config();

const App = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [userAuth, setUserAuth] = useState(false);

  const handleLogout = () => {
    console.log('In handle Logout');
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('expiryDate');
    setUserAuth(false);
    props.history.push('/login');
  }

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('authToken');
      const expiryDate = localStorage.getItem('expiryDate');
      if (!token) {
        return;
      }
      if (new Date() >= new Date(expiryDate)) {
        handleLogout();
      }
      const remainingMilliseconds = new Date(expiryDate).getTime() - new Date().getTime();
      setUserAuth(localStorage.getItem('expiryDate'));
      handleAutoLogout(remainingMilliseconds);
    })()
  })

  const handleAutoLogout = milliseconds => {
    setTimeout(() => handleLogout(), milliseconds);
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    props.history.push("/search");
  }

  const onLogin = async (e, authData) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/login-user', authData);
      if (res.status === 200) {
        console.log(res);
        localStorage.setItem('authToken', res.data.token);
        localStorage.setItem('userId', res.data.userId);
        const remainingMilliseconds = 60 * 60 * 24 * 1000 //24h
        const expiryDate = await new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate);
        setUserAuth(true);
        props.history.push('/');
      }
    } catch(err) {
      console.log(err);
    }
  }

  const authRoutes = () => {
    if (userAuth) {
      return(
        <Route exact path="/wishlist" component={WhishListPage} />
      )
    }
  }

  return(
    <div>
      <Navigation 
        handleSearch={handleSearch}
        userAuth={userAuth}
        onLogout={handleLogout}
      />
      <br />
      <Container>
        <Switch>
          <Route 
            exact 
            path='/' 
            render={
              props => <MoviesPage {...props} url={Constants.TOP_RATED_MOVIE} userAuth={userAuth} />
            } 
          />
          <Route 
            exact 
            path='/popular' 
            render={
              props => <MoviesPage {...props} url={Constants.POPULAR_MOVIE} userAuth={userAuth} />
            } 
          />
          <Route 
            exact 
            path='/now_playing' 
            render={
              props => <MoviesPage {...props} url={Constants.NOW_PLAYING_MOVIE} userAuth={userAuth} />
            } 
          />
          <Route 
            exact 
            path='/search' 
            render={
              props => 
                <MovieSearchPage 
                  {...props} 
                  url={Constants.SEARCH_MOVIE} 
                  query={searchValue}
                  userAuth={userAuth} 
                />
            } 
          />
          <Route exact path='/register' component={RegisterPage} />
          <Route 
            exact 
            path='/login' 
            render={(props) => <LoginPage {...props} onLogin={onLogin} />}
          />
          <Route
            path="/movie/:id" component={MovieDetailsPage}
          />
          {authRoutes()}
        </Switch>
      </Container>
    </div>
  )
}

export default withRouter(App);
