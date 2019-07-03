import React from 'react';
import Login from '../../../components/Login/Login';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    h1: {
      textAlign: 'center'
    } 
  })
)

const LoginPage = (props) => {
  const classes = useStyles();
  return(
    <div>
      <h1 className={classes.h1}>Se connecter</h1>
      <Login onLogin={props.onLogin} />
    </div>
  )
}

export default LoginPage;