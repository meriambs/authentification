import React from 'react'
import { Carousel } from 'react-bootstrap';

const Home = () => {
  return (
    <div><Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://media.ccmbg.com/tc/2554406707/873589/1599211615"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyKox8PULkoTJJWZYZCgDCjfyIO6l6cxpFvA&usqp=CAU"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7p864jgKRqUvMFo51wi9enU8ZHu_08ZR6w&usqp=CAU"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  </div>
  )
}

export default Home