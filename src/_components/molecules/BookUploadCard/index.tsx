import React from 'react'
import Button from '../../atoms/Button'
import Typography from '../../atoms/Typography'

// Book uploaded dialog to kindle when we click on send to kindle button
const BookUploadCard = (title: string) => {
  return (
    <div>
      <Typography >
        {title}
      </Typography>
      <Typography>
        Successfully sent
      </Typography>
      <Button />
    </div>
  )
}

export default BookUploadCard
