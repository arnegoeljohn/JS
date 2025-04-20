import React from 'react'
import Header from '../home/header'
import Navigation from '../home/navigation'
import GiftAbout from '../about/GiftAbout'
import ChildGridWrapper from './ChildGridWrapper'
import Footer from '../home/footer'

const SponsorSection = () => {
  return (
    <div>
      <Header/>
      <ChildGridWrapper/>
      <Navigation/>
      <GiftAbout/>
      <Footer/>
      
    </div>
  )
}

export default SponsorSection
