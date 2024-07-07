import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Chose from './Components/Chose/Chose'
import ReactDOM from 'react-dom';
import Ready from './Components/Ready/Ready'
import Clients from './Components/Clients/Clients';
import { BrowserRouter } from 'react-router-dom';
import TestimonialSlider from './Components/Testimonial/TestimonialSlider';
import Num from './Components/Num/Num'; 
import Contacts from './Components/Contacts/Contacts';
import { FaLocationDot } from "react-icons/fa6";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Navbar />
    <Home/>
    <Clients/>
    <Chose/>
    <TestimonialSlider/>
    <Ready/>
    <Num/>
    <Contacts/>
  </BrowserRouter>,
    </div>
  );
}

export default App;
