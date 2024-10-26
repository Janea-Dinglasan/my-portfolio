// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);

  const navLinkStyle = {
    color: '#f7b267',
    paddingBottom: '5px',
    position: 'relative',
    textDecoration: 'none',
  };

  const navLinkHoverEffect = {
    content: '""',
    position: 'absolute',
    left: '0',
    bottom: '0',
    height: '2px',
    width: '100%',
    backgroundColor: '#f7b267',
    transition: 'width 0.3s ease-in-out',
  };

  return (
    <Router>
      <div style={{ backgroundColor: '#1c2a32', minHeight: '100vh', color: '#fff' }}>
        <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#1c2a32' }} sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/" style={{ fontWeight: 'bold', fontSize: '40px', color: '#fff' }}>Janea</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto" style={{fontSize:'20px'}}>
                {['Home', 'About', 'Skills', 'Contact'].map((item, index) => (
                  <Nav.Link
                    as={Link}
                    to={`/${item.toLowerCase()}`}
                    key={index}
                    style={navLinkStyle}
                    onMouseEnter={() => setHoveredNavItem(item)}
                    onMouseLeave={() => setHoveredNavItem(null)}
                  >
                    <span style={{ position: 'relative' }}>
                      {item}
                      {hoveredNavItem === item && (
                        <span style={{ ...navLinkHoverEffect, width: '100%' }} />
                      )}
                    </span>
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
