import PicList from '../pic/PicList'
import Admin from './Admin'
import Hero from './Hero'
import Itinerary from './Itinerary'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PicAdd from '../pic/PicAdd'
import Nav from './Nav'
import UpcomingShowList from '../show/UpcomingShowList'
import ShowAdd from '../show/ShowAdd'
import ShowEdit from '../show/ShowEdit'
import VenueList from '../show/VenueList'
import VenueAdd from '../show/VenueAdd'
import BandList from '../show/BandList'
import BandAdd from '../show/BandAdd'

function App() {
  
  return (
    <BrowserRouter>
    <Nav/>    
    <Admin/>
    <Routes>
      <Route path="/" element={<Hero />} />

      <Route path="/pics" element={<PicList />} />
      <Route path="/pic/add" element={<PicAdd />} />

      <Route path="/upcomingshows/:user" element={<UpcomingShowList />} />
      <Route path="/show/add" element={<ShowAdd />} />
      <Route path="/show/edit/:id" element={<ShowEdit />}></Route>

      <Route path="/venues" element={<VenueList />}></Route>
      <Route path="/venue/add" element={<VenueAdd />} />

      <Route path="/bands" element={<BandList />}></Route>
      <Route path="/band/add" element={<BandAdd />} />
    </Routes>        
    </BrowserRouter>
  )
}

export default App
