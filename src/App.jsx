import './App.css'
import { Link, Route, Routes } from 'react-router-dom' 
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';

function App() {


  return (
    <>
    <Link to = "./avaleht">
        <button>Avaleht</button>
    </Link>
    <Link to = "./kontakt">
        <button>Kontaktid</button>
    </Link>
    <Link to = "./meist">
        <button>Meist</button>
    </Link>
    <Link to = "./seaded">
        <button>Seaded</button>
    </Link>

      <Routes>  
        <Route path="avaleht" element={< Avaleht />} />  
        <Route path="kontakt" element={< Kontakt />} /> 
        <Route path="meist" element={< Meist />} />   
        <Route path="seaded" element={< Seaded />} />  
      </Routes>
    </>
  )
}

export default App
