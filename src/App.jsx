import React from 'react'  
import ReactDOM from 'react-dom/client'  
import { useState } from 'react';  
import Navbar from './components/Navbar';  
import Hero from './components/Hero';  
import About from './components/About';  
import Skills from './components/Skills';  
import Experience from './components/Experience';
import Projects from './components/Projects';  
import Contact from './components/Contact';  
import Footer from './components/Footer';  
import './index.css'  

// App Component  
function App() {  
  return (  
    <div className="min-h-screen bg-gray-50">  
      <Navbar />  
      <main>  
        <Hero />  
        <About />  
        <Skills />  
        <Experience />
        <Projects />  
        <Contact />  
      </main>  
      <Footer />  
    </div>  
  );  
}  

// Render the App to the DOM  
ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>  
    <App />  
  </React.StrictMode>  
);  

// Still export App in case it's needed elsewhere  
export default App;  