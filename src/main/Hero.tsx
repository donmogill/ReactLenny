import './Hero.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

function Hero() {
  
const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
    autoplay: true,    
    arrows: false,
  };

  return (

<section className="hero">
  <div className="sunburst"></div>
  <div className="sunburst inner"></div>
  <div className="hero-content">
    <h1 className="hero-title display">Bent Entertainment</h1>
    <p className="hero-sub">Oustanding bands available for all occasions.</p>
    <div className="slider-container display">
        <Slider {...settings}>
        <div className="centered">
          <img src="./don.JPEG" className="carousel" alt="don" />
        </div>
        <div className="centered">
          <img src="./dori.JPEG" className="carousel" alt="dori" />
        </div>        
        <div className="centered">
          <img src="./beach.JPEG" className="carousel" alt="dori" />
        </div>        
        <div className="centered">
          <img src="./shades.JPEG" className="carousel" alt="dori" />
        </div>        
        <div className="centered">
          <img src="./three.JPEG" className="carousel" alt="dori" />
        </div>        
        </Slider>
    </div>
    <br/>
    <div className="hero-actions">
      <a className="btn solid" href="#itinerary">See the itinerary</a>
      <a className="btn" href="#book">Book the band</a>
    </div>  
    </div>
</section>
  )}

  export default Hero;