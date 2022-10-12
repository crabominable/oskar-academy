import React from 'react'

import { Carousel } from '../../components'

import styles from './main.module.css'

function Work () {
  return (
    <section className={ styles.container }>
      <h1>Some works</h1>
      <div className={ styles.content }>
        <Carousel />
      </div>
    </section>
  )
}

export default Work
