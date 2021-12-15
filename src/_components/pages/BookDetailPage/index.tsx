import { Grid } from '@mui/material'
import React from 'react'
import BookDetail from '../../organisms/BookDetail'
import Footer from '../../organisms/Footer'
import Header from '../../organisms/Header'

const BookDetailPage = (bookId: string) => {
  return (
    <Grid container>
      <Grid item>
        <Header />
      </Grid>
      <Grid item>
        <BookDetail {...bookId} />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default BookDetailPage
