import React from 'react'
import { Card, Grid } from '@mui/material';
import BookDetailThumbnail from '../../atoms/BookDetailThumbnail';
import Typography from '../../atoms/Typography';
import IconLabel from '../../molecules/IconLabel';
import BookCard from '../../molecules/BookCard';

const BookList = () => {
 const { bookDeatilsData } = useQuery() 

 const renderBookDetail = (bookId : string) => {
  <route to={bookDetail} id={bookId} />
}

const listOfBooksAPI = () => {
  return []
}

const renderBookCard = (book: any) => {
  <BookCard book={book}  onClick={renderBookDetail}/>
}
  

  return (
    <Grid container>
      {/* map function to loop through the bookData in a card */}
      {
          listOfBooksAPI().map((book) => {
            renderBookCard(book);
          })
        }
    </Grid>
  )
}

export default BookList;
