import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './FrontComponents/Navbar'
import HomeSection from './FrontComponents/HomeSection'
import AutoImgTwo from './FrontComponents/AutoImgTwo'
import AutoImgOne from './FrontComponents/AutoImgOne'
import MenuSection from './FrontComponents/MenuSection'
import ContactSection from './FrontComponents/ContactSection'
import Footer from './FrontComponents/Footer'
import LoginSection from './AdminComponents/LoginSection';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <main className='pt-[113px] overflow-y-hidden text-neutral-200 antialiased'>
              <Navbar />
              <HomeSection />
              <AutoImgOne />
              <AutoImgTwo />
              <MenuSection />
              <ContactSection />
              <Footer />
            </main>
          }
        />
        <Route 
          path="/admin" element={<LoginSection />}
        />
      </Routes>
    </Router>
  )
}

export default App