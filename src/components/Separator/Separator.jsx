import React from 'react'
import useStyles from './styles'

const Separator = () => {
  const classes = useStyles()
  return (
    <>
      <div className={classes.container}>
        <div className={`${classes.leftLine} ${classes.upper}`}></div>
        <div className={`${classes.leftLine} ${classes.lower}`}></div>
        <div className={`${classes.rightLine} ${classes.upper}`}></div>
        <div className={`${classes.rightLine} ${classes.lower}`}></div>
      </div>
    </>
  )
}

export default Separator
