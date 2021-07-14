import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import SingleNews from './SingleNews/SingleNews'
import useStyles from './styles'

const News = () => {
  const classes = useStyles()
  return (
    <>
      <Typography
        variant='h2'
        color='secondary'
        gutterBottom
        className={classes.newsTitle}
      >
        NEWS
      </Typography>

      <Grid
        container
        component='section'
        id='news'
        className={classes.news}
        justifyContent='center'
        spacing={5}
      >
        <SingleNews
          name='Headline'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum.'
          image='https://picsum.photos/1000/2000'
        />
        <SingleNews
          name='Headline'
          description='Eius, nostrum nisi nemo officiis facilis reprehenderit maiores nesciunt?'
          image='https://picsum.photos/1001/2000'
        />
        <SingleNews
          name='Headline'
          description='Quisque ut sem hendrerit nulla laoreet bibendum eget non lorem.'
          image='https://picsum.photos/1002/2000'
        />
        <SingleNews
          name='Headline'
          description='Nullam maximus aliquam diam in egestas.'
          image='https://picsum.photos/1003/2000'
        />
        <SingleNews
          name='Headline'
          description='Suspendisse eu mauris quis lorem sollicitudin malesuada sed a ipsum.'
          image='https://picsum.photos/1004/2000'
        />
        <SingleNews
          name='Headline'
          description='Orci varius natoque penatibus et magnis dis parturient montes.'
          image='https://picsum.photos/1005/2000'
        />
      </Grid>
    </>
  )
}

export default News
