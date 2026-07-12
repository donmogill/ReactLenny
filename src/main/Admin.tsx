import './App.css'
import { Link } from 'react-router-dom';

const Admin = () => {    

  return (
    <nav>
    <div className="wrap">
     <div>Administrator Menu</div>
    
    <div className="navlinks">
        <Link to="/pics">Edit Main Page Pics</Link>
        <Link to="/itinerary">Edit Videos</Link>        
        <Link to="/upcomingShows/admin">Edit Gigs</Link>        
        <Link to="/itinerary">Logout</Link>
    </div>    
    </div>
    </nav>    
  )
}

export default Admin;
