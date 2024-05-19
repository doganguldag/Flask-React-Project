import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login/Login';
import Home from './Components/Pages/Home';
import Register from './Components/Pages/Register/Register'
import Navbar from './Components/Navbar/Navbar';
import About from './Components/Pages/About';
import Services from './Components/Pages/Services';
import Contact from './Components/Pages/Contact';
import CaseStudy1 from './Components/Pages/Casestudy1';
import CaseStudy2 from './Components/Pages/Casestudy2';
import Admin from './Components/Pages/Admin/Admin';
import Logout from './Components/Pages/Logout';

function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  return (
    <>
     <Navbar setIsUserLoggedIn={setIsUserLoggedIn} isLoggedIn={isUserLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casestudy1" element={<CaseStudy1 />} />
        <Route path="/casestudy2" element={<CaseStudy2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/logout" element={<Logout setIsUserLoggedIn={setIsUserLoggedIn} />} />
      </Routes>
    </>
  )
}

export default App
