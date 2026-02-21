
import Header from './Components/Header';
import Menubar from './Components/Menubar';
import HomePageSlider from './Components/HomePageSlider';

import Footer from './Components/Footer.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
 

  return (
    <>
    <BrowserRouter>
      <Header />
      <Menubar />
      
      
      <Routes>
        <Route path="/" element={<HomePageSlider />} />
        <Route path="/about" element={<h1>About Us</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
    
  
      
    </>
  )
}

export default App;
