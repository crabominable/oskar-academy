import React from 'react'
import Image from 'next/image'

import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

import { worksRaw } from '../../../data'

import styles from '../main.module.css'

function Slideshow () {
  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 1000,
    transitionDuration: 400,
    pauseOnHover: false,
    infinite: true,
    prevArrow: (
      <div className={ styles.arrowSlideshow } style={{ color: 'white', cursor: 'pointer' }}>
        <FontAwesomeIcon className={ styles.iconArrow } color='white' icon={faChevronLeft} />
      </div>
    ),
    nextArrow: (
      <div className={ styles.arrowSlideshow } style={{ color: 'white', cursor: 'pointer' }}>
        <FontAwesomeIcon className={ styles.iconArrow } color='white' icon={faChevronRight} />
      </div>
    )
  }

  return (
    <div style={{ height: 'auto', color: 'white' }}>
      <Zoom {...zoomInProperties}>
        { !worksRaw
          ? 'loading'
          : worksRaw.map((element, index) => {
            let maxLength = 0

            for (let i = 0, length = worksRaw.length; i < length; i++) {
              maxLength = Math.max(maxLength, worksRaw[i].length)
            };
            return (
            <div
              key={index}
              style={{
                alignItems: 'center',
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                height: '30em'
              }}
            >
              <div className={ styles.imageContainer } style={{
                maxWidth: '30em',
                borderRadius: '0.5rem',
                position: 'relative',
                width: '100%',
                height: '100%'
              }}
              >
                <Image
                  alt='carousel'
                  className={ styles.carouselImage }
                  layout="fill"
                  src={ element.urlImage }
                />
              </div>
            </div>
            )
          }) }
      </Zoom>
    </div>
  )
}

export default Slideshow
