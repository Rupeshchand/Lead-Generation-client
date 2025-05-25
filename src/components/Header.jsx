import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-black text-white p-4 position-fixed top-0 w-100'>
      <h1 className='text-center'>Lead Generator</h1>
      {/* <nav>
        <ul className='d-flex gap-5 list-unstyled '>
          <li><Link className='text-decoration-none text-white' to="/">Home</Link></li>
          <li><Link className='text-decoration-none text-white' to="/leadForm">Submit Lead</Link></li>
        </ul>
      </nav> */}
    </header>
  );
}

export default Header