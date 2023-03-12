import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import LeftSiteNave from '../Pages/Shared/LeftSiteNave';
import RightSiteNave from '../Pages/Shared/RightSiteNave';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg="2" className='d-none d-lg-block'>
            <LeftSiteNave></LeftSiteNave>
          </Col>
          <Col lg="7">
            <Outlet></Outlet>
          </Col>
          <Col lg="3">
           <RightSiteNave></RightSiteNave>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;