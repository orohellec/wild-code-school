import React from 'react';
import Register from '../../../components/Register/Register';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    h1: {
      textAlign: 'center'
    } 
  })
)

const RegisterPage = () => {
  const classes = useStyles();
  return(
    <div>
      <h1 className={classes.h1}>S'inscrire</h1>
      <Register/>
    </div>
  )
}

export default RegisterPage;