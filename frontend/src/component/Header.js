import React from "react";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarBrand,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  let activestyle = {
    color: "red",
    borderBottom: "1px solid white",
    paddingTop: "3px",
  };

  return (
    <div
      style={{
        display: "block",
      }}
    >
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/" className="text-white">
          MovieFindr
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                style={({ isActive }) => (isActive ? activestyle : undefined)}
                to="/"
                className="navitem mx-2 text-decoration-none inactivelink"
              >
                MOVIE
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
