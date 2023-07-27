import React from 'react';
import { Footer, Header } from './components';  
import { Routes, Route } from 'react-router-dom';
import { About, Contact, Home, Projects } from './pages';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/start" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
