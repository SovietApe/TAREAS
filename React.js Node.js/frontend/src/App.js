import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logo from  './public/images/logo.png';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='Nosotros' element={<NosotrosPage />}/>
        <Route path='Novedades' element={<NovedadesPage />}/>
        <Route path='Contacto' element={<ContactoPage />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
