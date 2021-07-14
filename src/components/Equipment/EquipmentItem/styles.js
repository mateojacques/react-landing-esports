import { makeStyles } from '@material-ui/styles'

const styles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#000',
    border: '1px solid #555',
    transition: '.3s ease',
    marginBottom: 30,
    '&:hover': {
      border: `1px solid ${theme.palette.secondary.main}`,
      [theme.breakpoints.up('md')]: {
        transform: 'scale(1.1)',
      },
    },
    [theme.breakpoints.up('md')]: {
      filter: 'grayscale(1)',
      '&:hover': {
        filter: 'grayscale(0)',
      },
    },
  },
  cardMedia: {
    height: 500,
  },
  cardTitle: {
    color: '#f2f2f2',
  },
  cardDescription: {
    color: '#999',
  },
}))

export default styles
