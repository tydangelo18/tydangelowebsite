import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <>
      {/* Mobile Navbar */}
      <HamburgerMenu onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faBars} />
      </HamburgerMenu>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen}>
        <CloseButton onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faX} />
        </CloseButton>
        <SidebarLinks>
          <SidebarLink onClick={toggleSidebar} href="#home">
            Home
          </SidebarLink>
          <SidebarLink onClick={toggleSidebar} href="#work">
            Work
          </SidebarLink>
          <SidebarLink onClick={toggleSidebar} href="#contact">
            Contact
          </SidebarLink>
        </SidebarLinks>
      </Sidebar>

      {/* Desktop Navbar (Default) */}
      <DesktopNav>
        <Row>
          <Col md={4}>
            <NavigationLink href="#home">
              <p>Home</p>
            </NavigationLink>
          </Col>
          <Col md={4}>
            <NavigationLink href="#work">
              <p>Work</p>
            </NavigationLink>
          </Col>
          <Col md={4}>
            <NavigationLink href="#contact">
              <p>Contact</p>
            </NavigationLink>
          </Col>
        </Row>
      </DesktopNav>
    </>
  );
}

const HamburgerMenu = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 767px) {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.18em;
    color: black;
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.open ? "0" : "-100%")};
  width: 250px;
  height: 100%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const CloseButton = styled.div`
  align-self: flex-end;
  font-size: 1.5rem;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SidebarLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 1.2rem;
`;

const DesktopNav = styled(Container)`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 767px) {
    display: none;
  }
`;

const NavigationLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 500;
`;
