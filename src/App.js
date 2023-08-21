import './App.css';
import {Route, Routes} from 'react-router-dom'
import Contact from "./components/Contact"
import About from './components/AboutMe';
import ProfileCard from "./components/ProfileCard"
import Prueba from './components/pruebaForm.jsx';
import Card from './components/Card.jsx';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<ProfileCard/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/prueba" element={<Prueba/>}/>
    <Route path="/card" element={<Card/>}/>
    </Routes>
    </>
   
  );
}

export default App;
