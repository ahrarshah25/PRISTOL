import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;