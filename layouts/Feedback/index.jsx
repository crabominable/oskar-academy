/* eslint-disable no-return-assign */
import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import { FeedbackItem } from '../../components'

import styles from './main.module.css'
import { feedbacks } from '../../data'

function Feedback () {
  const [workStatus, setWorkStatus] = useState(0)

  useEffect(() => {
  }, [workStatus, setWorkStatus])

  const handleClick = () => {
    if (workStatus === 0) {
      return setWorkStatus(1)
    }
    setWorkStatus(0)
  }

  return (
    <section
      className={ workStatus === 0
        ? styles.container
        : styles.containerExtended }>
      <h1 className={ styles.title }>Feedbacks</h1>
      <a className={ styles.allFeedbackLink } target='_blank' href='https://discord.com/channels/979511082920058940/979511083511451711' rel="noreferrer">All feedbacks</a>
      <div className={ styles.containerContentFeedbackItens }>
        { !feedbacks
          ? 'loading'
          : feedbacks.map((item, index) => {
            return <FeedbackItem name={item.name} comment={item.comment} key={index} />
          })}
      </div>
      <div onClick={handleClick} className={ styles.containerContentButtonExtendDownArrow }>
        { workStatus === 0
          ? <FontAwesomeIcon
            className={ styles.containerContentButtonExtendDownArrowSpecific }
            icon={faChevronDown}
          />
          : <FontAwesomeIcon
            className={ styles.containerContentButtonExtendDownArrowSpecific }
            icon={faChevronUp}
          /> }
      </div>
    </section>
  )
}

export default Feedback
