import React from 'react';
import { Link } from 'react-router-dom';
import { ToguImage } from '../assets/images';

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-[#54ff54] text-primary-content">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={ToguImage} className="logoImages" alt="" />
        </Link>
      </div>
    </>
  );
}
