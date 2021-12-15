import { Grid } from '@mui/material'
import React from 'react'
import BookDetailThumbnail from '../../atoms/BookDetailThumbnail'
import Typography from '../../atoms/Typography'
import IconLabel from '../../molecules/IconLabel'
import SecondaryTabs from '../../molecules/SecondaryTabs'
const BookDetail = (bookId: string) => {
  // Query to get the book details by passing the ID of the book
  const { bookDetailData } = useQuery(bookId)
  return (
    <Grid container>
      {/* left and right columns */}
      <Grid item container direction="column">
        <Grid item>
          <Typography >
            {bookDetailData.name}
          </Typography>
          <Typography>
            {bookDetailData.description}
          </Typography>
        </Grid>
        <IconLabel data={bookDetailData.duration} />
        <Grid item>
          <SecondaryTabs data={bookDetailData.tabsData} />
        </Grid>
      </Grid>
      <Grid item container direction="column">
        <Grid item>
          <BookDetailThumbnail data={bookDetailData.img} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default BookDetail
