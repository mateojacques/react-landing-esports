import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  IconButton,
  Drawer,
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import LogoDark from '../Logo/LogoDark'
import Nav from './Nav.jsx'
import useStyles from './styles'

const Navbar = ({ onResize }) => {
  const classes = useStyles()
  const windowSize = onResize()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  return (
    <AppBar position='fixed' className={classes.navbar}>
      <Toolbar>
        {windowSize.width < 1024 ? (
          <div className={classes.toolbar}>
            <Typography component={Link} href='/' color='inherit'>
              <LogoDark size='sm' width='50' height='50' />
            </Typography>
            <React.Fragment key={'right'}>
              <IconButton onClick={toggleDrawer('right', true)}>
                <Menu color='secondary' />
              </IconButton>
              <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
              >
                <Nav />
              </Drawer>
            </React.Fragment>
          </div>
        ) : (
          <div className={classes.toolbar}>
            <Typography component={Link} href='/' color='inherit'>
              <LogoDark size='lg' width='200' height='70' />
            </Typography>
            <Nav />
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
