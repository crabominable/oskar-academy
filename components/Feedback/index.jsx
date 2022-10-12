import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types'

import User from '../../public/user.png'

import styles from './main.module.css'

function FeedbackItem ({ name, comment }) {
  return (
    <div className={ styles.container }>
      <Image width={20} height={20} className={ styles.image } src={User} alt="user" />
      <div className={ styles.containerText }>
        <p className={ styles.text }>{name}</p>
        <p className={ styles.textMessage }>{comment}</p>
      </div>
    </div>
  )
}

FeedbackItem.propTypes = {
  name: PropTypes.string,
  comment: PropTypes.string
}

export default FeedbackItem
