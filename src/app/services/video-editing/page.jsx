import React from 'react'
import VideoAgencyHero from './sections/Hero'
import VideoServicesSection from './sections/VideoServicesSection'
import ShowcasePortfolio from './sections/ShortForm'
import LongFormShowcase from './sections/LongFormShowcase'

const page = () => {
  return (
   <main>
    <VideoAgencyHero/>
    <VideoServicesSection/>
    <ShowcasePortfolio/>
    <LongFormShowcase/>
   </main>
  )
}

export default page