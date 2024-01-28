import React from 'react';
import Header from './app/Header';
import Footer from './app/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Skills from './pages/skills';
import Quote from './pages/quote';
import './normalize.css';
import './index.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/portfolio" element={<About />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/work" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
