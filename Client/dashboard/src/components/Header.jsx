import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const handleLogout = () => {
    // Implement your logout logic here
    setIsAdminLoggedIn(false);
  };

  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "rgb(82, 81, 81)", flexGrow: 1 }}
    >
      <Container>
        <Navbar.Brand href="#home" style={{ color: "white", fontSize: "22px" }}>
          Data Visualization Dashboard
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isAdminLoggedIn ? (
            <Nav style={{ position: "absolute", right: "150px" }}>
              <Nav.Link href="#home" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <NavDropdown id="basic-nav-dropdown" title="Admin" alignRight>
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : (
            <Nav style={{ position: "absolute", right: "150px" }}>
              {/* Add login button or form here */}
              <Nav.Link href="#login" style={{ color: "white" }}>
                Login
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
