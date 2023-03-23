import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Photos from "./pages/Photos";
import Contact from "./pages/Contact";
import PhotoId from "./pages/PhotoId";

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="photos" element={<Photos />} />
          <Route path="gallery" element={<Gallery />}>
            <Route path="photo_id" element={<PhotoId />} />
          </Route>
          <Route path="contact" element={<Contact />} />
        </Route>
        
      </Routes>
    </Router>
  )
}

export default Rotas;