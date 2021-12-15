import { Grid, Icon } from '@mui/material';
import React from 'react'
import Typography from '../../atoms/Typography';

const IconLabel = (data) => {
  return (
    <Grid container>
    <Icon></Icon>
    <Typography>{data}</Typography>
    </Grid>
  )
}

export default IconLabel;
