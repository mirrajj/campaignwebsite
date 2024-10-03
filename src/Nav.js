import React from 'react';
import {FaUser} from 'react-icons/fa';

const Nav = () => {
  return (
    
    <nav class="bg-gray-800 text-white px-6 py-4 flex justify-between items-center" id='nav'>
    <div id='logo'>
      <img src='images/logo.png' width={80} height={80}/>
    </div>
    {/* humberger  icon */}
    <button class="block md:hidden focus:outline-none">
      <span class="block w-8 h-1 bg-white mb-1"></span>
      <span class="block w-8 h-1 bg-white mb-1"></span>
      <span class="block w-8 h-1 bg-white"></span>
    </button>
  
    {/* <!--Navigation Items --> */}
    <div class="hidden md:flex justify-center w-full items-center space-x-6" >
      <div class="space-x-6" id='nav-items'>
        <a href="#" class="hover:text-gray-400">Home</a>
        <a href="#" class="hover:text-gray-400">About</a>
        <a href="#" class="hover:text-gray-400">Accomplishments</a>
        <a href="#" class="hover:text-gray-400">Events</a>
      </div>
      <div >
        <a href="#">
          <button class="bg-white hover:bg-red-600 text-green-600 px-6 py-4 rounded " id='nav-btn'>Donate</button>
        </a>
      </div>
    </div>
    {/* Admin Login for content Mgt */}
    <div id='user'>
      <FaUser size={24}/>
    </div>
  </nav>
  
    
  );
}

export default Nav;
