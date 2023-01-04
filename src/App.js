import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Greeting from './components/Greetings';
import Header from './components/Header';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  </Router>
);

export default App;
