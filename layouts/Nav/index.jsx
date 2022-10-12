import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faBehance, faDiscord, faYoutube } from '@fortawesome/free-brands-svg-icons'

import styles from './main.module.css'

function Nav () {
  return (
    <nav className={ styles.container }>
      <a target='_blank' rel='noreferrer' className={ styles.socialLink } href="https://www.instagram.com/oskar.wmv/">
        <FontAwesomeIcon className={ styles.socialIcon } icon={faInstagram} />
      </a>
      <a target='_blank' rel='noreferrer' className={ styles.socialLink } href="https://www.behance.net/oskarwmv">
        <FontAwesomeIcon className={ styles.socialIcon } icon={faBehance} />
      </a>
      <a target='_blank' rel='noreferrer' className={ styles.socialLink } href="https://discord.gg/EJrKBKb8JU">
        <FontAwesomeIcon className={ styles.socialIcon } icon={faDiscord} />
      </a>
      <a target='_blank' rel='noreferrer' className={ styles.socialLink } href="https://www.youtube.com/c/Oskar0001">
        <FontAwesomeIcon className={ styles.socialIcon } icon={faYoutube} />
      </a>
    </nav>
  )
}

export default Nav
