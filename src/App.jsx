import React, { useEffect } from 'react'
import Navbar from './FrontComponents/Navbar'
import HomeSection from './FrontComponents/HomeSection'
import AutoImgTwo from './FrontComponents/AutoImgTwo'
import AutoImgOne from './FrontComponents/AutoImgOne'
import MenuSection from './FrontComponents/MenuSection'
import ContactSection from './FrontComponents/ContactSection'


const App = () => {
  useEffect(() => {
    const homeSection = document.getElementById('home');
    if(homeSection) {
      window.scrollTo({
        top: homeSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <main className='pt-[113px] overflow-y-hidden text-neutral-200 antialiased'>
      <Navbar />
      <HomeSection />
      <AutoImgOne />
      <AutoImgTwo />
      <MenuSection />
      <ContactSection />
    </main>
  )
}

export default App