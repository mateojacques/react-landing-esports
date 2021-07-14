import React from 'react'
import { Typography, IconButton, Grid } from '@material-ui/core'
import { Language, Mail } from '@material-ui/icons'
import useStyles from './styles'

const Contact = () => {
  const classes = useStyles()
  return (
    <>
      <Typography
        variant='h2'
        color='secondary'
        className={classes.contactTitle}
        gutterBottom
      >
        CONTACT
      </Typography>

      <Grid id='contact' container className={classes.contact}>
        <Typography variant='subtitle1' className={classes.contactSubtitle}>
          We are a fake eSports organization, but you can get in touch with the
          developer behind this landing page. Thanks!
        </Typography>

        <Grid
          container
          item
          className={classes.contactLinks}
          justifyContent='center'
        >
          <Grid item>
            <IconButton
              href='https://mateojacquesweb.com'
              target='_blank'
              rel='noreferrer'
              color='secondary'
            >
              <Language fontSize='large' />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              href='mailto:mateojacquesweb@gmail.com'
              target='_blank'
              rel='noreferrer'
              color='secondary'
            >
              <Mail fontSize='large' />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Contact
