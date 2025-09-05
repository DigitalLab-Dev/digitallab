import React from 'react'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import Para from './components/Para'
import Mission from './components/Mission'
import Leadership from './components/Leadership'
import Team from './components/Team'

const Page = () => {
  return (
    <main className="relative">
   
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black from-50% to-orange-500" />

      {/* Page content */}
      <Hero />
      <VideoSection />
      <Para />
      <Mission />
      <Leadership/>
      <Team/>
    </main>
  )
}

export default Page
