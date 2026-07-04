import Carousel from "./Carousel";

const Hero = () => {
  

  return (

      <section className="hero">
          <div className="sunburst"></div>
          <div className="sunburst inner"></div>
          <div className="hero-content">
              <h1 className="hero-title display">Bent Entertainment</h1>
              <p className="hero-sub">Oustanding bands available for all occasions.</p>
              <Carousel />
              <div className="hero-actions">
                  <a className="btn solid" href="#itinerary">Check out a live performance!</a>
                  <a className="btn" href="#book">Book a band</a>
              </div>
          </div>
      </section>     
  )}

  export default Hero;