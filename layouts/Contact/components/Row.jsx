import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from '../main.module.css'

function Row ({ data }) {
  return (
    <a target='_blank' className={styles.containerInfo} href={data.urlSource} rel="noreferrer">

      <FontAwesomeIcon className={styles.leftIcon} color='black' icon={data.icon} />
      <p
        className={styles.contentLink}
      >
        {data.text}
      </p>
      { data.imageSource
        ? <Image
          width="20px"
          height="20px"
          className={ styles.brazilFlag }
          src={ data.imageSource }
        />
        : null }
    </a>
  )
}

Row.propTypes = {
  data: PropTypes.shape({
    text: PropTypes.string,
    urlSource: PropTypes.string,
    icon: PropTypes.object,
    imageSource: PropTypes.string
  }).isRequired
}

export default Row
