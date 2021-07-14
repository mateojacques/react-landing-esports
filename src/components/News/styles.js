import { makeStyles } from '@material-ui/styles'

const styles = makeStyles((theme) => ({
  news: {
    padding: 20,
    [theme.breakpoints.up('sm')]: {
      padding: 30,
    },
    [theme.breakpoints.up('md')]: {
      padding: '30px 50px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '30px 100px',
    },
  },

  newsTitle: {
    fontFamily: 'Airstrike Half-Tone',
    transform: 'translateX(-7px)',
  },
}))

export default styles
