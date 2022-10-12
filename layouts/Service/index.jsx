import React from 'react'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import styles from './main.module.css'

function Service () {
  return (
    <section className={ styles.container }>
      <div className={ styles.titleDescription }>
        <h1>Making your</h1>
        <p>imagination real</p>
      </div>
      <div className={ styles.containerService }>

        <div className={ styles.serviceFlipCard }>
          <div className={ styles.serviceInnerFlipCard }>
            <div className={ styles.serviceFlipCardFront }>
              <h1>frente</h1>
            </div>
            <div className={ styles.serviceFlipCardBack }>
              <h1>verso</h1>
            </div>
          </div>
        </div>

        <div className={ styles.serviceFlipCard }>
          <div className={ styles.serviceInnerFlipCard }>
            <div className={ styles.serviceFlipCardFront }>
              <h1>frente</h1>
            </div>
            <div className={ styles.serviceFlipCardBack }>
              <h1>verso</h1>
            </div>
          </div>
        </div>

        <div className={ styles.serviceFlipCard }>
          <div className={ styles.serviceInnerFlipCard }>
            <div className={ styles.serviceFlipCardFront }>
              <h1>frente</h1>
            </div>
            <div className={ styles.serviceFlipCardBack }>
              <h1>verso</h1>
            </div>
          </div>
        </div>

        <div className={ styles.serviceFlipCard }>
          <div className={ styles.serviceInnerFlipCard }>
            <div className={ styles.serviceFlipCardFront }>
              <h1>frente</h1>
            </div>
            <div className={ styles.serviceFlipCardBack }>
              <h1>verso</h1>
            </div>
          </div>
        </div>

        <div className={ styles.serviceFlipCard }>
          <div className={ styles.serviceInnerFlipCard }>
            <div className={ styles.serviceFlipCardFront }>
              <h1>frente</h1>
            </div>
            <div className={ styles.serviceFlipCardBack }>
              <h1>verso</h1>
            </div>
          </div>
        </div>

      </div>
      {/* <div className={ styles.examplesContainer }>
        <div className={ styles.examplesContentLeft }>
          <div className={ styles.examplesContentLeftLeft }>
            <div className={ styles.examplesContentLeftLeftTopper }>
              <p className={ styles.examplesContentItemText }>
                ENTERPRISE BRANDING AND REBRANDING
              </p>
              <img className={ styles.examplesContentLeftRebrandingImage } src="https://media.discordapp.net/attachments/980905715965235220/1013209055411581039/REBRANDING_2.png?width=812&height=609" alt="rebranding" />
            </div>
            <div className={ styles.examplesContentLeftLeftBottom }>
              <p className={ styles.examplesContentItemText }>
                GRAPHIC DESIGN
              </p>
              <img className={ styles.examplesContentLeftGraphicDesignImage } src="https://media.discordapp.net/attachments/980905715965235220/1012932627579289681/insta.png?width=609&height=609" alt="graphic design" />
            </div>
          </div>
          <div className={ styles.examplesContentLeftRight }>
            <div className={ styles.examplesContentLeftRightChild }>
              <p className={ styles.examplesContentItemText }>
                CUSTOM ILLUSTRATIONS
              </p>
              <img className={ styles.examplesContentLeftCustomIllustrationsImage } src="https://media.discordapp.net/attachments/980905715965235220/1012932628011290694/ilustracoes.png?width=691&height=609" alt="graphic design" />
            </div>
          </div>
        </div>
        <div className={ styles.examplesContentRight }>
          <div className={ styles.examplesContentRightUpper }>
            <p className={ styles.examplesContentItemText }>
              MOTION GRAPHICS AND COMERCIAL / ENTERPRISE VIDEOS
            </p>
            <img className={ styles.examplesContentLeftMotionGraphicsImage } src="https://media.discordapp.net/attachments/980905715965235220/1019666647725908099/Oskar_Arts_Gif.gif?width=950&height=534" alt="motion graphic" />
          </div>
          <a href='https://www.behance.net/oskarwmv' target='_blank' className={ styles.examplesContentRightBottomButton } rel="noreferrer">
            <p>VIEW PORTFOLIO FOR MORE</p>
            <FontAwesomeIcon className={ styles.examplesContentRightBottomButtonTextArrow } icon={faArrowRight} />
          </a>
        </div>
      </div> */}
    </section>
  )
}

export default Service
