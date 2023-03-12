import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch, FaWhatsapp } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import brand2 from "../../assets/Brand/brand2.png";
import brand3 from "../../assets/Brand/brand3.png";
const RightSiteNave = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
        <Button className='mt-2' variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>
      </ButtonGroup>
      <div className='mt-4'>
        <h6>Find Us On</h6>
        <ListGroup>
          <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
          <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
          <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <div className=''>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={brand2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={brand3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default RightSiteNave;