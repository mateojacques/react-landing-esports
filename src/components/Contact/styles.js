import { makeStyles } from '@material-ui/styles'

const styles = makeStyles((theme) => ({
  contact: {
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  contactTitle: {
    fontFamily: 'Airstrike Half-Tone',
    transform: 'translateX(-7px)',
  },
  contactSubtitle: {
    fontFamily: 'Airstrike',
    transform: 'translateX(-7px)',
    textAlign: 'center',
    color: '#c3c3c3',
    marginBottom: 50,
    [theme.breakpoints.up('md')]: {
      maxWidth: '50%',
    },
  },
  contactLinks: {
    [theme.breakpoints.up('lg')]: {
      maxWidth: '10%',
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
}))

export default styles
