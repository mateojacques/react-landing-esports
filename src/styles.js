import { makeStyles } from '@material-ui/styles'

const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: `${theme.palette.primary.main}`,
    display: 'flex',
    justifyContent: 'center',
  },

  app: {
    backgroundColor: `${theme.palette.primary.main}`,
    minHeight: '100vh',
    width: '100%',
    maxWidth: '1920px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'hidden',
  },
}))

export default styles
