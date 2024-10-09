import './App.css';
import NavBar from './components/NavBar.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Navigate to="/Home" />} />
      <Route path="/Home" element={<>
        <div className='contenido'>
          <img src='src/img/perfil.png' className='foto'/>
          <div className='info'>
            <p> Hello i am</p>
            <h1>Pilar,</h1>
            <h2>Junior frontend developer</h2>
            <p> With expertise in HTML, CSS, JavaScript, and React.</p>
          </div>
        </div>
      </>}
      />
      <Route path="/Projects" element={
        <Projects></Projects>
      }
      />
      <Route path="/Contact" element={
        <Contact></Contact>
      }
      />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
