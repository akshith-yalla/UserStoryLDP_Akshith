import { Card } from '@mui/material'
import React from 'react'
import BookDetailThumbnail from '../../atoms/BookDetailThumbnail'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'
import IconLabel from '../IconLabel'

const BookCard = (data) => {

  // Bookcard to display the book content
  return (
    <div>
      <Card>
            <BookDetailThumbnail />
            <Typography>{data.name}</Typography>
            <Typography>{data.author}</Typography>
            <IconLabel {...data.duration} />
            <Button />
          </Card>

    </div>
  )
}

export default BookCard
