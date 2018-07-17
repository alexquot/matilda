import * as React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem } from 'reactstrap';
import Nav from 'reactstrap/lib/Nav';

export function Header() {
  return (
    <Navbar color="dark" dark expand="xs">
      <Nav tag="div" className="w-100" navbar>
        <NavItem>
          <Link to="/" className="nav-link font-weight-light">
            MATILDA
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/docs" className="nav-link font-weight-light">
            DOCS
          </Link>
        </NavItem>
        <NavItem className="ml-auto">
          <a
            href="https://github.com/alexquot/matilda"
            className="nav-link font-weight-light"
          >
            GITHUB
          </a>
        </NavItem>
      </Nav>
    </Navbar>
  );
}
