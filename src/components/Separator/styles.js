import { makeStyles } from '@material-ui/styles'

const styles = makeStyles((theme) => ({
  container: {
    width: '90%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '50px 0',
    [theme.breakpoints.up('md')]: {
      margin: '70px 0',
    },
  },
  leftLine: {
    width: '50%',
    margin: '0 auto 5px 0',
    borderRadius: 5,
    opacity: 0.25,
  },
  rightLine: {
    width: '50%',
    margin: '5px 0 0 auto',
    borderRadius: 5,
    opacity: 0.25,
  },
  upper: {
    border: `2px solid ${theme.palette.secondary.main}`,
  },
  lower: {
    border: `1px solid ${theme.palette.secondary.main}`,
  },
}))

export default styles
