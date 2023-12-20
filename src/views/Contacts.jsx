import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import LetsConnect from '../components/LetsConnect/LetsConnect'
import ContactUs from '../components/ContactUs/ContactUs'
import MessageUs from '../components/MessageUs/MessageUs'
import CopyrightBar from '../components/CopyrightBar/CopyrightBar'
import img_map from '../assets/images/map.png'

const Contacts = () => {
  return (
    <div>
      <Header />
      <LetsConnect />
      <ContactUs />
      <MessageUs />
      <img id="map" src={img_map} alt="A map with directions to the office at Sveavägen31 in Stockholm" />
      <Footer />
      <CopyrightBar />
    </div>
  )
}

export default Contacts