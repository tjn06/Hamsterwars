import React from 'react';
<<<<<<< HEAD
/* import './App.css'; */
=======
//import './App.css';
>>>>>>> origin/Pontus-dev

import Header from './components/Header';
import Home from './components/Home';
import Add from './components/Add';
import Stats from './components/Stats/Stats';
import Battlemode from './components/Battlemode/Battlemode';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/battlemode" element={<Battlemode />} />
      </Routes>
    </Router>
  );
}

export default App;
