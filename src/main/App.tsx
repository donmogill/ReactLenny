import PicList from '../pic/PicList'
import Admin from './Admin'
import Hero from './Hero'
import Itinerary from './Itinerary'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PicAdd from '../pic/PicAdd'
import Nav from './Nav'

function App() {
  
  return (
    <BrowserRouter>
    <Nav/>    
    <Admin/>
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/itinerary" element={<Itinerary />} />
      <Route path="/pics" element={<PicList />} />
      <Route path="/pic/add" element={<PicAdd />} />
    </Routes>        
    </BrowserRouter>
  )
}

export default App
