import React from 'react'
import Navbar from './FrontComponents/Navbar'
import HomeSection from './FrontComponents/HomeSection'

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <Navbar />
      <HomeSection />
    </main>
  )
}

export default App