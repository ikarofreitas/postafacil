import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ScrollToTop from './utils/ScrollToTop';
import { api } from './services/api';
import { useEffect, useState } from 'react';

function App() {

 useEffect(() => {
  loadCustomers();
 }, []);

 async function loadCustomers(){
  const response = await api.get('/users/customers');
  console.log(response.data);
 }

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="*"
          element={
            <>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/como-funciona" element={<HowItWorksPage />} />
                  <Route path="/precos" element={<PricingPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/cadastro" element={<RegisterPage />} />
                </Routes>
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;