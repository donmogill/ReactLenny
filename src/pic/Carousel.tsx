import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import './Carousel.css'
import useFetchPics from "../hooks/PicHooks";
import type { Pic } from "../types/pic";
import {sliderSettings} from "../config/sliderSettings";
import ApiStatus from "../ApiStatus";

const Carousel = () => {

  const { data: pics, status, isSuccess } = useFetchPics();  

  if (!isSuccess) 
    return <ApiStatus status={status} />;

  return (
    <div className="slider-container">
        <Slider {...sliderSettings}>
        {pics && pics.map((pic: Pic) => (
          <div key={pic.id} className="centered">
            <img src={`./${pic.filename}`} className="carousel" alt={pic.filename} />
          </div>
        ))}
        </Slider>
    </div>
    
  )
}

export default Carousel;