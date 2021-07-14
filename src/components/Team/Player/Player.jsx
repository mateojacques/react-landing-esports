import React from 'react'
import { Grid, Box, Typography, Link } from '@material-ui/core'
import useStyles from './styles'

const Player = ({ name, profileUrl }) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box className={classes.player}>
        <Typography component='h2' className={classes.playerName} gutterBottom>
          {name}
        </Typography>

        <Link
          href={profileUrl}
          target='_blank'
          rel='noreferrer'
          underline='none'
          className={classes.playerLink}
        >
          SEE STATS
        </Link>
      </Box>
    </Grid>
  )
}

export default Player
