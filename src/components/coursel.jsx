import React ,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import Shoe1 from '../images/adidas-white.jpg'
import Shoe2 from '../images/Ocean-Adidas.jpg'
import shoe3 from '../images/black-jordan.jpg'

// import Carousel from 'react-bootstrap/Carousel'
// import Carousel from 'react-bootstrap/Carousel'




function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 h-10"
            src={Shoe1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Adidas White Shoe</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-10"
            src={Shoe2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Ocean Adidas Shoe</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-10"
            src={shoe3}
            
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Black JOrdan</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  export default ControlledCarousel
  
//   render(<ControlledCarousel />);