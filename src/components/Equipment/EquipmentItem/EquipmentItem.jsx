import React from 'react'
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@material-ui/core'
import useStyles from './styles'

const SingleNews = ({ name, description, image }) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} lg={5} xl={3} className={classes.cardItem}>
      <Card className={classes.card}>
        <CardMedia image={image} className={classes.cardMedia} title={name} />
        <CardContent>
          <Typography variant='h5' className={classes.cardTitle} gutterBottom>
            {name}
          </Typography>
          <Typography variant='subtitle2' className={classes.cardDescription}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color='secondary'>See on Amazon</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default SingleNews
