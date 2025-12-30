import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import { CalendarPage } from './pages/CalendarPage';
import { EscritorIA } from './pages/EscritorIA';
import { BibliotecadePosts } from './pages/BibliotecadePosts';
import { AssistantIA } from './pages/AssistenteIA';
import ScrollToTop from './utils/ScrollToTop';
import { api } from './services/api';
import { useEffect } from 'react';


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
        {/* Rotas sem Header (páginas internas do dashboard) */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendario" element={<CalendarPage />} />
        <Route path="/escritor" element={<EscritorIA />} />
        <Route path="/biblioteca" element={<BibliotecadePosts />} />
        <Route path="/assistente" element={<AssistantIA />} />
        
        {/* Rotas com Header (páginas públicas) */}
        <Route
          path="*"
          element={
            <>
              <Header />
              <main className='animate-[fadeIn_1s_ease-out_forwards]'>
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