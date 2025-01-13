import React from 'react'
import Navbar from './FrontComponents/Navbar'
import HomeSection from './FrontComponents/HomeSection'
import HeroSection from './FrontComponents/HeroSection'

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <Navbar />
      {/* <HomeSection /> */}
      <HeroSection />
    </main>
  )
}

export default App