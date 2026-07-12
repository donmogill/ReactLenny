import { Link, useNavigate } from 'react-router-dom';
import './App.css'

const Nav = () => {  
    const nav = useNavigate();

  return (
    <nav>
    <div className="wrap">
    <div className="brandmark" onClick={ () => nav("/")}>Bent Entertainment </div>
    <div className="navlinks">
        <Link to="/upcomingShows/visiter">Upcoming shows</Link>
      <a href="#itinerary">The Bands</a>
      <a href="#set">The set</a>
      <a href="#gallery">On the road</a>
    </div>
    <a className="navcta" href="#book">Book our bands</a>
    <div className="navlinks">
      <a href="#band">Login</a>
    </div>
    </div>
    </nav>    
  )
}

export default Nav;
