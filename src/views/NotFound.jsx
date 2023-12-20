import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import img_notFound from '../assets/images/pageNotFound.jpg'

const NotFound = () => {
  return (

    <div>
      <Header />
      <img id="pageNotFound" src={img_notFound} alt="Page not found" />
      <Footer />
    </div>

  )
}

export default NotFound