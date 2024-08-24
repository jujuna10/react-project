import { useState } from 'react'
import Header from './components/header'
import HeroSection from './components/hero'
import City from './components/City'
import Download from './components/Download'
import Registre from './components/registre';
import Out from './components/Out'
import './App.css'

function App() {
  const [click, setClick] = useState(false);
  const [name, setName] = useState('');
  const [out, setOut] = useState(false);
  const [show,setShow] = useState(false)


  return (
    <div className='allComponent'>
      <div className="regi">
        <Header value={[click, setClick]} name={name} setOut={setOut} setName={setName} />
        <Registre value={[click, setClick]} setName={setName} />
        <Out value2={[out, setOut]}  showProfile={[show,setShow]} />
      </div>
      <div className='main'>
        <HeroSection />
        <City />
        <Download />
      </div>
    </div>

  );
}

export default App;
