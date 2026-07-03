import './App.css'

function Nav() {
  

  return (
    <>
<nav>
  <div className="wrap">
    <div className="brandmark">Bent Entertainment</div>
    <div className="navlinks">
      <a href="#itinerary">Upcoming shows</a>
      <a href="#itinerary">The Bands</a>
      <a href="#set">The set</a>
      <a href="#gallery">On the road</a>
      <a href="#band">The players</a>
    </div>
    <a className="navcta" href="#book">Book our bands</a>
  </div>
</nav>
    </>
  )
}

export default Nav
