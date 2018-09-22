import React from 'react';
import { Nav, Navbar, NavItem } from 'reactstrap';

export default function Header() {
  return (
    <Navbar color="dark" dark expand="xs">
      <Nav tag="div" className="w-100" navbar>
        <NavItem>
          <a href="." className="nav-link font-weight-light">
            MATILDA
          </a>
        </NavItem>
        <NavItem>
          <a href="docs" className="nav-link font-weight-light">
            DOCS
          </a>
        </NavItem>
        <NavItem className="ml-auto">
          <a
            href="https://github.com/albnnc/matilda"
            className="nav-link font-weight-light"
          >
            GITHUB
          </a>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
