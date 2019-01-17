import React from 'react';
import NavLink from './NavLink';

function Navigation() {
  return (
    <ul className="">
      <NavLink className="navigation-link" to="/" brand>ReactSpeed</NavLink>
      <NavLink className="navigation-link" href="https://leanpub.com/reactspeedcoding">Book</NavLink>
      <NavLink className="navigation-link" href="https://github.com/manavsehgal/reactspeedcoding">Code</NavLink>
      <NavLink className="navigation-link" to="/blog">Blog</NavLink>
    </ul>
  );
}

export default Navigation;