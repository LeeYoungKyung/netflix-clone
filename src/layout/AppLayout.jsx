import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import './AppLayout.css';

const Applayout = () => {
  return (
    <>
      <Navbar expand='lg' className='bg-body-tertiary '>
        <Container fluid className='bg-black' style={{ height: '70px' }}>
          <Navbar.Brand
            href='/'
            className='navbar-logo'
            style={{ color: 'white' }}
          >
            logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0  '
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href='/' className=' text-white'>
                Home
              </Nav.Link>
              <Nav.Link href='/movies' className=' text-white'>
                Movie
              </Nav.Link>
            </Nav>
            <Form className='d-flex'>
              <Form.Control
                type='search'
                placeholder='Search'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-success '>search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Applayout;
