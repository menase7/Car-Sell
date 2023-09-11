import { BrowserRouter, Router, Route } from 'react-router-dom';
import About from './components/About';
import Cars from './components/Cars';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import LatestCar from './components/LatestCar';
import Main from './components/Main';
import Services from './components/Services';
import Testimonies from './components/Testimonies';

function App() {
  return (
    <BrowserRouter>
    <Header />
    
    
    {/* 
    
      
       
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      
    </Router>
     */}
     
      <Main />
      <About />
      <Cars />
      <LatestCar />
      <Services />
      <Testimonies />
      <Contact />
     
    <Footer />
    </BrowserRouter>
  );
}

export default App;
