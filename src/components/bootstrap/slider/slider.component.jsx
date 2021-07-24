import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const Sliderr =()=>(
<Carousel variant="dark">
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/FXtPbTG/nimble-made-7-RIMS-NMsbc-unsplash.jpg"
      alt="First slide"
      width="100vw"
      height="570px"
    />
    <Carousel.Caption>
  
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/8sXSW77/pexels-artem-beliaikin-994517.jpg"
      alt="Second slide"
      width="100vw"
      height="570px"
    />
    <Carousel.Caption>
   
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/51P8yYx/keagan-henman-Won79-9o-UEk-unsplash.jpg"
      alt="Third slide"
      width="100vw"
      height="570px"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)

export default Sliderr;