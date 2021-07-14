import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles'

const Footer = () => {
  const classes = useStyles()

  return (
    <footer id='footer' className={classes.footer}>
      <Typography
        variant='h5'
        color='secondary'
        className={classes.footerTitle}
        gutterBottom
      >
        MATEO JACQUES
      </Typography>
      <Typography variant='subtitle1' className={classes.footerSubtitle}>
        Front End Developer
      </Typography>
    </footer>
  )
}

export default Footer
