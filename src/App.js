import React from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Add from './components/Add';
import Stats from './components/Stats/Stats';
import Battlemode from './components/Battlemode/Battlemode';
import Winner from './components/Battlemode/Winner';
import Killit from './components/Stats/Delete/Killit';


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
        <Route path="/Winner" element={<Winner />} />
        <Route path="/Killit" element={<Killit />} />
      </Routes>
    </Router>
  );
}

export default App;
