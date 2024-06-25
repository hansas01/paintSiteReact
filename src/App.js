import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';
//import PaymentForm from './components/PaymentForm';
import AboutPage from './pages/AboutPage.js';
import HomePage from './pages/HomePage.js';
import PortfolioPage from './pages/PortfolioPage.js';
import ServicePage from './pages/ServicePage.js';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='Nosotros' element={<AboutPage/>} />
          <Route path='Servicios' element={<ServicePage/>} />
          <Route path='Portafolio' element={<PortfolioPage/>} />
      </Routes>
    

      <Footer />
    </div> 
  );
}

export default App;
