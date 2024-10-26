import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css'; // Import the CSS file where you can add custom styles

function App() {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const [navExpanded, setNavExpanded] = useState(false); // State to control navbar expansion

  const navLinkStyle = {
    color: '#f7b267',
    paddingBottom: '5px',
    position: 'relative',
    textDecoration: 'none',
    fontFamily: 'Arvo, sans-serif', 
  };

  const navLinkHoverEffect = {
    content: '""',
    position: 'absolute',
    left: '0',
    bottom: '0',
    height: '2px', // Adjust height of the hover line
    width: '100%',
    backgroundColor: '#f7b267', // Change color if needed
    transition: 'all 0.3s ease-in-out', // Add transition for smoother animation
  };

  // Function to handle link clicks and close the navbar
  const handleNavLinkClick = () => {
    setNavExpanded(false); // Close the navbar
  };

  return (
    <Router>
      <div style={{ backgroundColor: '#1c2a32', minHeight: '100vh', color: '#fff', fontFamily: 'Arvo, sans-serif' }}>
        <Navbar expand="lg" variant="dark" style={{ backgroundColor: '#1c2a32' }} sticky="top" expanded={navExpanded}>
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
                padding: '5px 10px',
                textShadow: '1px 1px 3px #605929' 
              }} 
            >
              Jajanae_l
            </Navbar.Brand>
            <Navbar.Toggle 
              aria-controls="basic-navbar-nav" 
              onClick={() => setNavExpanded(prev => !prev)} // Toggle the navbar state
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto" style={{ fontSize: '22px', fontWeight: 'bold'}}>
                {['Home', 'About', 'Skills', 'Contact'].map((item, index) => (
                  <Nav.Link
                    as={Link}
                    to={`/${item.toLowerCase()}`}
                    key={index}
                    style={navLinkStyle}
                    onMouseEnter={() => setHoveredNavItem(item)}
                    onMouseLeave={() => setHoveredNavItem(null)}
                    onClick={handleNavLinkClick} // Close the navbar on click
                  >
                    <span style={{ position: 'relative' }}>
                      {item}
                      {hoveredNavItem === item && (
                        <span style={{ ...navLinkHoverEffect }} />
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
