import React from 'react';
import { Nav, Navbar, NavItem } from 'reactstrap';
import Link from 'next/link';

export default function Header() {
  return (
    <Navbar color="dark" dark expand="xs">
      <Nav tag="div" className="w-100" navbar>
        <NavItem>
          <Link href="/" passHref>
            <a className="nav-link font-weight-light">MATILDA</a>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/docs" passHref>
            <a className="nav-link font-weight-light">DOCS</a>
          </Link>
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
