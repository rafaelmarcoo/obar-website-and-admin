import React from 'react'
import Navbar from './FrontComponents/Navbar'
import HomeSection from './FrontComponents/HomeSection'
import AutoImgTwo from './FrontComponents/AutoImgTwo'
import AutoImgOne from './FrontComponents/AutoImgOne'

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <Navbar />
      <HomeSection />
      <AutoImgOne />
      <AutoImgTwo />
    </main>
  )
}

export default App