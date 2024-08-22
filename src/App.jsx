import { useState } from 'react'
import Header from './components/header'
import HeroSection from './components/hero'
import City from './components/City'
import Download from './components/Download'
import Registre from './components/registre';
import './App.css'

function App() {

  const [opacity,setOpasity] = useState(1)


  const [click,setClick] = useState(false)

 
  return (
    <div className='allComponent'>
        <div className='main'>
          <Header value={[click,setClick]}/>
          <HeroSection />
          <City />
          <Download />
        </div>
      <div>
        <Registre value={[click,setClick]}/>
      </div>
    </div>
    )
}

export default App
