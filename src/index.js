import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../src/css/main.css'
import About from './About';
import Contactus from './Contactus';
import Footer from './Footer';
import Home from './Home';
// import Layout from './Layout';
import Nav from './Nav';
import Nopage from './Nopage';
import Service from './Service';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contactus />} />
                <Route path="service" element={<Service/>} />
                <Route path="*" element={<Nopage />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
      
    </>
)

