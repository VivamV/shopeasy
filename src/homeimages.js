import ImageSlider, { Slide } from "react-auto-image-slider";
import P11 from './p11.jpg'
import P12 from './p12.jpg'
import P13 from './p13.jpg'
function homeimage() {
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img alt="img2" src={P11} />
      </Slide>
      <Slide>
        <img alt="img2" src={P12} />
      </Slide>
      <Slide>
        <img alt="img1" src={P13} />
      </Slide>
    </ImageSlider>
  );
}

export default homeimage;