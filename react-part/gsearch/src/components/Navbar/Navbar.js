import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar bg-primary'>
      <Link to='/'><h2 style={{ color: 'white' }}>gsearch </h2></Link>
    </div >
  )
}
