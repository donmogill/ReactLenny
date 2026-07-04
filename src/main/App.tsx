import Admin from './Admin'
import './App.css'
import Hero from './Hero'
import Itinerary from './Itinerary'
import Nav from './nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
    <Nav/>    
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/itinerary" element={<Itinerary />} />
    </Routes>        
    </BrowserRouter>
  )
}

export default App
