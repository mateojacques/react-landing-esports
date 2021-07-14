import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles'

const Hero = () => {
  const classes = useStyles()
  return (
    <section id='ads' className={classes.hero}>
      <div className={classes.heroTitle}>
        <div>
          <Typography className={classes.echo} component='h4' color='secondary'>
            PLAY TO WIN
          </Typography>
          <Typography className={classes.echo} component='h4' color='secondary'>
            PLAY TO WIN
          </Typography>
          <Typography className={classes.echo} component='h4' color='secondary'>
            PLAY TO WIN
          </Typography>
          <Typography
            className={classes.echoMain}
            component='h4'
            color='secondary'
          >
            PLAY TO WIN
          </Typography>
        </div>

        <Typography className={classes.title} component='h2'>
          #GSEIWIN
        </Typography>
      </div>
    </section>
  )
}

export default Hero
