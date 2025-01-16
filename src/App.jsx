import React, { useEffect } from 'react'
import Navbar from './FrontComponents/Navbar'
import HomeSection from './FrontComponents/HomeSection'
import AutoImgTwo from './FrontComponents/AutoImgTwo'
import AutoImgOne from './FrontComponents/AutoImgOne'
import MenuSection from './FrontComponents/MenuSection'
import ContactSection from './FrontComponents/ContactSection'
import Footer from './FrontComponents/Footer'


const App = () => {
  return (
    <main className='pt-[113px] overflow-y-hidden text-neutral-200 antialiased'>
      <Navbar />
      <HomeSection />
      <AutoImgOne />
      <AutoImgTwo />
      <MenuSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App