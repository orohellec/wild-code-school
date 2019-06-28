import React from 'react';
import ReactPaginate from 'react-paginate';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  pagination: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: 0,
    marginRight: 10,
    marginLeft: 10
  },
  pageLinkContainer: {
    width: 20,
    margin: "auto"
  },
  pageLink: {
    '&:hover': {
      fontWeight: "bold",
      color: blue[300],
      cursor: "pointer"
    }
  },
  activeLink: {
    color: purple[300],
    fontWeight: "bold"
  }
}));

const Pagination = (props) => {
  const classes = useStyles();

  return(
    <ReactPaginate
      forcePage={props.page - 1}
      pageCount={props.totalPages}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      containerClassName={classes.pagination}
      previousLabel={'Précédent'}
      nextLabel={'Suivant'}
      pageClassName={classes.pageLinkContainer}
      breakLabel={'...'}
      breakClassName={'break-me'}
      onPageChange={props.handlePage}
      pageLinkClassName={classes.pageLink}
      activeLinkClassName={classes.activeLink}
    />
  )
}

export default Pagination;

