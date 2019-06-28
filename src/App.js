import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import { Switch, Route, withRouter } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import MoviesPage from './pages/MoviesPage/MoviesPage';
import MovieSearch from './pages/MovieSearch/MovieSearch';

import * as Constants from './constants';
require('dotenv').config();

const App = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSearchValue(e.target.value);
    props.history.push("/search");
  }

  return(
    <div>
      <Navigation 
        handleSearch={handleSearch}
      />
      <br />
      <Container>
        <Switch>
          <Route 
            exact 
            path='/' 
            render={
              props => <MoviesPage {...props} url={Constants.TOP_RATED_MOVIE} />
            } 
          />
          <Route 
            exact 
            path='/popular' 
            render={
              props => <MoviesPage {...props} url={Constants.POPULAR_MOVIE} />
            } 
          />
          <Route 
            exact 
            path='/now_playing' 
            render={
              props => <MoviesPage {...props} url={Constants.NOW_PLAYING_MOVIE} />
            } 
          />
          <Route 
            exact 
            path='/search' 
            render={
              props => 
                <MovieSearch 
                  {...props} 
                  url={Constants.SEARCH_MOVIE} 
                  query={searchValue}
                />
            } 
          />
        </Switch>
      </Container>
    </div>
  )
}

export default withRouter(App);
