import './App.css'
import { Link, Route, Routes } from 'react-router-dom' 
import Avaleht from './pages/Avaleht';
import Kontakt from './pages/kontakt';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import { useState, useRef } from 'react';

function App() {
  const [sisselogitud, muudaSisselogitud] = useState ("ei");
  const [sonum, muudaSonum] = useState ("");
  const kasutajanimiRef = useRef ();
  const paroolRef = useRef ();

  const logiSisse = () => {
    if (paroolRef.current.value === "123") {
    muudaSisselogitud ("jah");
    muudaSonum (kasutajanimiRef.current.value +", oled sisse logitud");
  } else {
    muudaSonum ("Vale parool");
  }
}
  const logiValja = () => {
    muudaSisselogitud ("ei");
    muudaSonum ("");
  }



    return (
    <div className='App'>

      <div>{sonum}</div>

      {sisselogitud === "ei" && 
      <div>
      <label>Kasutajanimi</label>
      <input type="text" ref={kasutajanimiRef} /> <br /> <br />
      <label>Parool</label>
      <input type="password" ref={paroolRef}  /> <br /><br /> 
      </div>}

    {sisselogitud === "ei" && <button onClick={logiSisse}>Logi sisse</button>}
    {sisselogitud === "jah" && <button onClick={logiValja}>Logi välja</button>} <br /> <br />

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
    </div>
  )
}

export default App
