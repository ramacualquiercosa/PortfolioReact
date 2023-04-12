import './App.css';
import {Route, Routes} from 'react-router-dom'
import Contact from "./components/Contact"
import About from './components/AboutMe';
import ProfileCard from "./components/ProfileCard"


function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<ProfileCard/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
    </Routes>
    </>
   
  );
}

export default App;
