import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  navbar: {
    width: '100%',
    padding: '20px 5px',
    margin: '0 auto',
  },
  toolbar: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      height: '100px',
      alignItems: 'center',
    },
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '180px',
    backgroundColor: '#000',
    borderLeft: `1px solid ${theme.palette.secondary.dark}`,
    [theme.breakpoints.up('md')]: {
      width: '90%',
      minHeight: 'unset',
      height: '50px',
      border: 'none',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
    },
  },
  navList: {
    listStyle: 'none',
    height: '70%',
    margin: 'auto 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      margin: 'auto 0',
    },
  },
  navLink: {
    '&:hover': {
      color: `${theme.palette.secondary.main}`,
    },
    textDecoration: 'none',
    fontFamily: 'Airstrike Half-Tone',
    color: '#fff',
    transition: 'color .3s ease',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.3rem',
      fontFamily: 'Airstrike Outline',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.6rem',
    },
  },
}))

export default useStyles
