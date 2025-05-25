import React from 'react'

const Header = () => {
  return (
    // <header className="bg-black text-white p-4 shadow-md">
    //   <div className="max-w-6xl mx-auto flex justify-between items-center">
    //     <h1 className="text-2xl font-bold">Lead Generator</h1>
    //     {/* <nav>
    //       <ul className="flex gap-6">
    //         <li><a href="/" className="hover:underline">Home</a></li>
    //         <li><a href="#form" className="hover:underline">Submit Lead</a></li>
    //       </ul>
    //     </nav> */}
    //   </div>
    // </header>
    <header className='bg-black text-white p-4 position-fixed top-0 w-100'>
        <h1 className='text-center'>Lead Generator</h1>
    </header>
  );
}

export default Header