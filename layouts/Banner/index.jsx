import React from 'react'
import Image from 'next/image'

import banner from '../../public/banner-oskarts.png'
import bannerMobile from '../../public/banner-oskarts-mobile.png'

import styles from './main.module.css'

function Banner () {
  return (
    <header className={ styles.container }>
      <div className={ styles.containerImage }>
        <Image className={ styles.image } src={banner} alt="banner" />
      </div>
      <div className={ styles.containerImageMobile }>
        <Image display='none' className={ styles.imageMobile } src={bannerMobile} alt="banner" />
      </div>
    </header>
  )
}

export default Banner
