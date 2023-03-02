import { logDOM } from '@testing-library/react';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Home = () => {
  return (
    <>
<div className="container">
<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro incidunt ullam nesciunt officia accusantium, assumenda ipsum molestias ipsam, nisi aperiam corrupti fugit? Aliquid, rerum odit maiores cupiditate fuga animi numquam?</p>
  <hr class="my-4"/>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officia, nam et est pariatur odio explicabo error. Accusantium, in qui eaque suscipit cum laudantium rem culpa. Nulla laudantium illo maxime!</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p>
</div>

<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
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
          src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
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
          src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default Home