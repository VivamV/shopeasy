import React from 'react'
import "./imgslide.css";
import ImageSlider, {Slide} from 'react-auto-image-slider';
import P11 from "./p11.jpg";
import P12 from "./p12.jpg";
import P13 from "./p13.jpg";
function imgslide() {
  return (
        <div className='imgslide'>
                   <ImageSlider effectDelay={500} autoPlayDelay={2000}>
        <Slide>
<img alt='img1'className='img' src={P11}></img>

        </Slide>
        <Slide>
<img alt='img1' className='img' src={P12}></img>

        </Slide>
        <Slide>
<img alt='img1' className='img' src={P13}></img>

        </Slide>
   
    </ImageSlider>
        </div>
 
  )
}

export default imgslide
