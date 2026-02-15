import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from "./pages/Landing";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  )
}

export default App;