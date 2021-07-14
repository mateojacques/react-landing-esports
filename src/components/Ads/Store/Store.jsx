import React from 'react'
import { Typography, Link, Grid } from '@material-ui/core'
import image from '../../../assets/store-image.png'
import useStyles from './styles.js'

const Store = () => {
  const classes = useStyles()
  return (
    <Grid item md={6} lg={5}>
      <Link
        className={classes.store}
        href='https://gsei-store.netlify.app'
        target='_blank'
        rel='noreferrer'
        underline='none'
      >
        <img src={image} className={classes.storeImg} alt='GSEI Store' />
        <Typography variant='h2' className={classes.storeTitle}>
          GRAB YOUR MERCH
        </Typography>
        <Typography variant='subtitle1' className={classes.storeSubtitle}>
          Visit our store and check out the latest products!
        </Typography>
      </Link>
    </Grid>
  )
}

export default Store
