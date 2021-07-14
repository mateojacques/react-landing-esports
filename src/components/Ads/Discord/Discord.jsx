import React from 'react'
import { Link, Typography, Grid } from '@material-ui/core'
import useStyles from './styles'
import DiscordLogo from './DiscordLogo'

const Discord = () => {
  const classes = useStyles()
  return (
    <Grid item md={6} lg={5}>
      <Link
        className={classes.discord}
        href='https://discord.gg/jkP3wvyM'
        target='_blank'
        rel='noreferrer'
        underline='none'
      >
        <DiscordLogo width='100' height='100' fill='#fff' />
        <Typography variant='h2' className={classes.discordTitle}>
          JOIN OUR DISCORD!
        </Typography>
        <Typography variant='subtitle1' className={classes.discordSubtitle}>
          Be part of the revolution.
        </Typography>
      </Link>
    </Grid>
  )
}

export default Discord
