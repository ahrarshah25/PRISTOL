import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

        
        
      </Routes>
    </div>
  )
}

export default App;