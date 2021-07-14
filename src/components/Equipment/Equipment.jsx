import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import EquipmentItem from './EquipmentItem/EquipmentItem'
import useStyles from './styles'

const News = () => {
  const classes = useStyles()
  return (
    <>
      <Typography
        variant='h2'
        color='secondary'
        gutterBottom
        className={classes.equipmentTitle}
      >
        OUR EQUIPMENT
      </Typography>

      <Grid
        container
        component='section'
        id='equipment'
        className={classes.equipment}
        justifyContent='center'
        spacing={5}
      >
        <EquipmentItem
          name='Logitech G300s'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum.'
          image='https://i.imgur.com/pBE7X1S.png'
        />
        <EquipmentItem
          name='Redragon Kumara K552'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum.'
          image='https://i.imgur.com/rCYSgaY.png'
        />
        <EquipmentItem
          name='Redragon Zeus H501'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum.'
          image='https://i.imgur.com/RXWaFGj.png'
        />
        <EquipmentItem
          name='Radeon RX 550'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum.'
          image='https://i.imgur.com/0oAqrY3.png'
        />
      </Grid>
    </>
  )
}

export default News
