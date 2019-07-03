import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
}));

export default function MovieGrid(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      {props.children}
    </div>
  );
}