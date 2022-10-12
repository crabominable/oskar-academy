import React from 'react'
import Head from 'next/head'

import {
  Contact,
  Feedback,
  Footer,
  Banner,
  Nav,
  Service,
  Work
} from '../layouts' //

export default function Home () {
  return (
    <div>
      <Head>
        <title>Oskar academy</title>
        <meta httpEquiv="content-language" content="pt-br, en-US" />
        <meta name="author" content="Oskar Group Company" />
        <meta name="copyright" content="© 2022 Oskar Group Company" />
        <meta name="description" content="Oskar Group Company website" />
        <meta name="generator" content="Next.js" />
        <meta name="keywords" content="oskar, arts, design, fivem, logo" />
        <meta name="rating" content="general" />
        <meta name="robots" content="all" />
        <meta property="og:title" content="Oskar Group Company" />
        <meta
          property="og:description"
          content="Oskar Group Company website"
        />
        <meta
          property="og:image"
          content="https://www.oskararts/logo-oskararts.png"
        />
        <link rel="canonical" href="https://www.oskararts.com" />
        <link rel="icon" href="/O.png" />
      </Head>

      <Nav />
      <Banner />

      <Service />
      <Contact />
      <Work />
      <Feedback />

      <Footer />
    </div>
  )
}
