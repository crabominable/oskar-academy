import React from 'react'

import Row from './components/Row'
import { contact } from '../../data'

import styles from './main.module.css'

function Contact () {
  return (
    <section className={ styles.container }>
      <h1 className={ styles.title }>Contact us now</h1>
      { !contact
        ? 'loading'
        : contact.map((element, index) => (
        <Row data={element} key={index} />
        )) }
    </section>
  )
}

export default Contact
