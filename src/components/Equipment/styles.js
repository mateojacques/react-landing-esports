import { makeStyles } from '@material-ui/styles'

const styles = makeStyles((theme) => ({
  equipment: {
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

  equipmentTitle: {
    fontSize: '3rem',
    fontFamily: 'Airstrike Half-Tone',
    transform: 'translateX(-3px)',
    textAlign: 'center',
  },
}))

export default styles
