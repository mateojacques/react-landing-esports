import { makeStyles } from '@material-ui/core'
import heroBg from '../../assets/hero-bg-sm.png'

const styles = makeStyles((theme) => ({
  hero: {
    width: '100%',
    height: '50vh',
    padding: '30px 10px 0 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `url('${heroBg}') no-repeat center`,
    backgroundSize: 'contain',
    marginBottom: '40px',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '70px',
    },
    [theme.breakpoints.up('md')]: {
      padding: '100px',
      margin: '50px 0 100px 0',
    },
  },
  heroTitle: {
    textAlign: 'center',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
  },
  echo: {
    fontSize: '2.5rem',
    fontFamily: 'Airstrike Outline',
    color: `${theme.palette.secondary.dark}`,
    lineHeight: '.8rem',
    opacity: '.4',
    // transform: 'translateX(-7px)',
    [theme.breakpoints.up('md')]: {
      fontSize: '5rem',
    },
  },
  echoMain: {
    fontSize: '2.5rem',
    fontFamily: 'Airstrike Half-Tone',
    color: `${theme.palette.secondary}`,
    lineHeight: '.8rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '5rem',
    },
    // transform: 'translateX(-2px)',
  },
  title: {
    color: '#fff',
    fontSize: '3.25rem',
    fontFamily: 'Airstrike Outline',
    lineHeight: '8rem',
    transform: 'translateX(-5px)',
    [theme.breakpoints.up('md')]: {
      marginTop: '40px',
      fontSize: '7rem',
    },
  },
}))

export default styles
