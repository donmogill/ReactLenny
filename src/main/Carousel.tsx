import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import './Carousel.css'

const Carousel = () => {
  
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
    
  )
}

export default Carousel;