import { useState, useEffect } from 'react'
import { CssBaseline } from '@material-ui/core'
import {
  Navbar,
  Hero,
  Separator,
  Ads,
  News,
  Team,
  Equipment,
  Contact,
  Footer,
} from './components'

import useStyles from './styles'

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)

    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

function App() {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.app}>
          <Navbar onResize={useWindowSize} />
          <Hero />
          <Ads />
          <Separator />
          <News />
          <Separator />
          <Team />
          <Separator />
          <Equipment />
          <Separator />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
