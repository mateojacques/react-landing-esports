import React from 'react'
import useStyles from './styles'

const Nav = () => {
  const classes = useStyles()
  return (
    <nav className={classes.nav}>
      <ul className={classes.navList}>
        <li className={classes.navLinkItem}>
          <a className={classes.navLink} href='#news'>
            news
          </a>
        </li>
        <li className={classes.navLinkItem}>
          <a className={classes.navLink} href='#team'>
            the team
          </a>
        </li>
        <li className={classes.navLinkItem}>
          <a className={classes.navLink} href='#equipment'>
            equipment
          </a>
        </li>
        <li className={classes.navLinkItem}>
          <a
            className={classes.navLink}
            href='https://gsei-store.netlify.app'
            target='_blank'
            rel='noreferrer'
          >
            store
          </a>
        </li>
        <li className={classes.navLinkItem}>
          <a className={classes.navLink} href='#contact'>
            contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
