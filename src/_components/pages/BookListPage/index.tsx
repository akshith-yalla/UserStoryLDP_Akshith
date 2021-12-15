import React from 'react'
import { Grid } from '@mui/material';
import BookList from '../../organisms/BookList';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';

const BookListPage = () => {
  // The BookList organism goes here with a header and footer
  return (
    <Grid container>
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <BookList />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default BookListPage;
