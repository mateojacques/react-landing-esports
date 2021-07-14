import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import useStyles from './styles'
import Player from './Player/Player'

const Team = () => {
  const classes = useStyles()
  return (
    <>
      <Typography
        variant='h2'
        color='secondary'
        gutterBottom
        className={classes.teamTitle}
      >
        THE TEAM
      </Typography>

      <Grid
        container
        id='team'
        component='section'
        justifyContent='center'
        className={classes.team}
        spacing={5}
      >
        <Player
          name='FEDWARE09'
          profileUrl='https://las.op.gg/summoner/userName=fedware09'
        />
        <Player
          name='SYMBOL OF ADC'
          profileUrl='https://las.op.gg/summoner/userName=SYMBOL+OF+ADC'
        />
        <Player
          name='Myojin'
          profileUrl='https://las.op.gg/summoner/userName=Myojin'
        />
        <Player
          name='CLEISUR'
          profileUrl='https://las.op.gg/summoner/userName=CLEISUR'
        />
        <Player
          name='xXAxelXx'
          profileUrl='https://las.op.gg/summoner/userName=xXAxelXx'
        />
        <Player
          name='Spolzino'
          profileUrl='https://las.op.gg/summoner/userName=Spolzino'
        />
        <Player
          name='Cavral'
          profileUrl='https://las.op.gg/summoner/userName=Cavral'
        />
        <Player
          name='SwatLite'
          profileUrl='https://las.op.gg/summoner/userName=SwatLite'
        />
        <Player
          name='Anc17'
          profileUrl='https://las.op.gg/summoner/userName=Anc17'
        />
      </Grid>
    </>
  )
}

export default Team
