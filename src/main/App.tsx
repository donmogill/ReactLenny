import PicList from '../pic/PicList'
import Admin from './Admin'
import Hero from './Hero'
import Itinerary from './Itinerary'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PicAdd from '../pic/PicAdd'
import Nav from './Nav'
import UpcomingShowList from '../show/UpcomingShowList'
import ShowAdd from '../show/ShowAdd'

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
      <Route path="/upcomingshows/:user" element={<UpcomingShowList />} />
      <Route path="/show/add" element={<ShowAdd />} />
    </Routes>        
    </BrowserRouter>
  )
}

export default App
