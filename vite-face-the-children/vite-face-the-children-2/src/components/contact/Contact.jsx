import React from 'react'
import Contact1 from './Contact1'
import Contact2 from './Contact2'
import Header from '../home/header'
import Navigation from '../home/navigation'
import Footer from '../home/footer'

const Contact = () => {
  return (
    <div>
      <Header/>
      <Navigation />
      <Contact1/>
      <Contact2/>
      <Footer/>
    </div>
  )
}

export default Contact
