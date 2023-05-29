import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Accounts from './components/Accounts';
import Expenses from './components/Expenses';
import Investments from './components/Investments';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Accounts />} />
        <Route path="/despesas" element={<Expenses />} />
        <Route path="/investimentos" element={<Investments />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
