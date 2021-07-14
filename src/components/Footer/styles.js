import { makeStyles } from '@material-ui/styles'

const styles = makeStyles((theme) => ({
  footer: {
    marginTop: '50px',
    width: '100%',
    padding: '50px 20px',
    borderTop: `7px double rgba(144, 45, 242, .3)`,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  footerTitle: {
    fontFamily: 'Airstrike Half-Tone',
    letterSpacing: '3px',
    fontSize: '1.6rem',
  },
  footerSubtitle: {
    fontFamily: 'Airstrike',
    letterSpacing: '6px',
    color: '#777',
    fontSize: '.8rem',
  },
}))

export default styles
