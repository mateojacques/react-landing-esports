import { makeStyles } from '@material-ui/styles'

const styles = makeStyles((theme) => ({
  discord: {
    minHeight: '330px',
    maxWidth: '320px',
    transition: '.5s ease-in-out',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '50px 10px 10px 10px',
    padding: '20px',
    backgroundColor: `${theme.palette.secondary.main}`,

    [theme.breakpoints.up('sm')]: {
      margin: '10px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 'unset',
      filter: 'grayscale(1)',
      '&:hover': {
        filter: 'grayscale(0)',
      },
    },
  },
  storeImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      opacity: 0.2,
    },
  },
  discordTitle: {
    fontSize: '3rem',
    lineHeight: '4rem',
    color: '#fff',
    display: 'inline-block',
    fontFamily: 'Airstrike Half-Tone',
    margin: '0 0 20px auto',
    width: '100%',
    textAlign: 'center',
  },
  discordSubtitle: {
    fontSize: '1rem',
    fontFamily: 'Airstrike',
    color: '#ccc',
  },
}))

export default styles
