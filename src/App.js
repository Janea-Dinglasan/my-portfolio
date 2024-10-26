import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css'; // Import the CSS file where you can add custom styles

// You cannot directly import fonts from a URL like that in React.
// Instead, add the font link to your index.html file in the public folder.

function App() {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);

  const navLinkStyle = {
    color: '#f7b267',
    paddingBottom: '5px',
    position: 'relative',
    textDecoration: 'none',
    fontFamily: 'Arvo, sans-serif', // Apply Arvo font here
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
      <div style={{ backgroundColor: '#1c2a32', minHeight: '100vh', color: '#fff', fontFamily: 'Arvo, sans-serif' }}> {/* Apply Arvo font to the entire App */}
        <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#1c2a32' }} sticky="top">
          <Container>
            <Navbar.Brand 
              as={Link} 
              to="/home" 
              style={{ 
                fontWeight: 'bold', 
                fontSize: '40px', 
                color: '#f4e0ca', 
                fontFamily: 'Lobster, sans-serif', 
                fontStyle: 'italic',
                padding: '5px 10px', // Add padding for spacing
                textShadow: '1px 1px 3px #605929' // Add shadow effect
              }} // Changed fontFamily here
            >
              Jajanae_l
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto" style={{ fontSize: '20px' }}>
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
