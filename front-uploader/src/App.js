// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import VideoPlayer from './components/VideoPlayer';
//import { Container } from 'react-bootstrap';




function App() {
  return (
   
    <Router>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoPlayer />} />
        </Routes>

    </Router>

    
  );
}

export default App;
