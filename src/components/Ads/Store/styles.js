import { makeStyles } from '@material-ui/styles'

const styles = makeStyles((theme) => ({
  store: {
    minHeight: '330px',
    maxWidth: '320px',
    transition: '.3s ease-in-out',
    position: 'relative',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    padding: '20px',
    border: `1px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.up('md')]: {
      maxWidth: 'unset',
      filter: 'grayscale(1)',
      '&:hover': {
        filter: 'grayscale(0)',
      },
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '250px',
    },
  },
  storeImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    [theme.breakpoints.down('md')]: {
      opacity: 0.2,
    },
  },
  storeTitle: {
    fontSize: '3rem',
    lineHeight: '3.5rem',
    color: '#fff',
    display: 'inline-block',
    fontFamily: 'Airstrike Half-Tone',
    margin: '0 0 20px auto',
    width: '100%',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem',
      lineHeight: '4.5rem',
    },
  },
  storeSubtitle: {
    fontSize: '1rem',
    width: '80%',
    fontFamily: 'Airstrike',
    color: '#ccc',
  },
}))

export default styles
