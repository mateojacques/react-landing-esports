import React from 'react'
import Store from './Store/Store'
import Discord from './Discord/Discord'
import { Grid } from '@material-ui/core'
import useStyles from './styles'

const Ads = () => {
  const classes = useStyles()
  return (
    <Grid
      id='ads'
      component='section'
      container
      justifyContent='space-around'
      alignItems='center'
      className={classes.ads}
    >
      <Store />
      <Discord />
    </Grid>
  )
}

export default Ads
