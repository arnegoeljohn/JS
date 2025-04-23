import React from 'react'
import Header from '../home/header'
import Navigation from '../home/navigation'


import FaqQuestions from '../faq/FaqQuestions'
import FaqQuestions2 from '../faq/FaqQuestions2'
import GiftAbout from '../about/GiftAbout'
import Footer from '../home/footer'


const Faq = () => {
  return (
    <div>
      <Header/>
      <Navigation/>
      
      <FaqQuestions/>
      <FaqQuestions2/>
      <GiftAbout/>
      <Footer/>
    </div>
  )
}

export default Faq
