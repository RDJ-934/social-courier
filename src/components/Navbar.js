import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
   <>
   <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/">
    
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span class="ml-3 text-xl">Developers</span>
    </a>
    </Link>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link class="mr-5 hover:text-gray-900" to="/">Home</Link>
      <Link class="mr-5 hover:text-gray-900" to='/about'>About</Link>
      <Link class="mr-5 hover:text-gray-900" to='/request'>Request Form</Link>
    </nav> 
    <Link to='/login'>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" >
      Login
    </button>
    </Link>
  </div>
</header>
   </>
  )
}

export default Navbar