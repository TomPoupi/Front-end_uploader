// components/Home.js
import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import data from '../../database/video.json';
import './Home.css';



function Home() {
  // Récupérez ici les dernières vidéos ajoutées et affichez-les
  console.log("Home");
  return (
    <Container fluid className="p-5">
      <Carousel>
        {data.data.map((video) => {
          return (
            <Carousel.Item interval={5000}>
              <div className="styledCarouselDiv">
                <img
                  className="d-block w-50 styledCarousel"
                  src={video.path_image}
                  alt={video.name}
                />
                <Carousel.Caption className="styledCarouselCard">
                  <h3>{video.name}</h3>
                  <p>{video.description}</p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
}

export default Home;