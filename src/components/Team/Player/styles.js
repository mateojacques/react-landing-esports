import { makeStyles } from '@material-ui/styles'

const styles = makeStyles((theme) => ({
  player: {
    border: `1px solid ${theme.palette.secondary.dark}`,
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '5px 10px',
    marginBottom: '30px',
    transition: '.3s ease',
    background: `linear-gradient(90deg, rgba(2,0,36,.25) 0%, rgba(144, 45, 242, .25) 100%, rgba(0,212,255,0) 100%)`,
    [theme.breakpoints.up('md')]: {
      filter: 'grayscale(1)',
      '&:hover': {
        filter: 'grayscale(0)',
      },
    },
  },
  playerName: {
    width: '100%',
    fontFamily: 'Airstrike Academy',
    color: `#fff`,
    marginTop: 'auto',
    fontSize: '2.5rem',
    transform: 'translateX(-3px)',
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.7rem',
    },
    [theme.breakpoints.up('sm')]: {
      color: `${theme.palette.secondary.light}`,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3.2rem',
    },
  },
  playerLink: {
    margin: 'auto 0 5px 0',
    fontWeight: 'bold',
    letterSpacing: '3px',
    color: `#999`,
    [theme.breakpoints.up('md')]: {
      color: `${theme.palette.secondary.dark}`,
    },
  },
}))

export default styles
