import React from 'react';
import {FaFacebook,FaInstagram,FaTwitter,FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
  return (
    <div class="text-white py-8" id='footer'>
    <div class="container mx-auto flex flex-col items-center text-center">
      {/* <!-- Left Side (Centered) --> */}
      <div class="mb-6">
        <ul class="space-y-4">
          <li><a href="" class="hover:underline text-lg text-white font-bold">Accomplishment</a></li>
          <li><a href="" class="hover:underline text-lg text-white font-bold">Donate</a></li>
          <li><a href="" class="hover:underline text-lg text-white font-bold">Contact</a></li>
          <li><a href="" class="hover:underline text-lg text-white font-bold">Events</a></li>
        </ul>
      </div>

      <hr/>
  
      {/* <!-- Icons (Centered below text) --> */}
      <div class="flex justify-center space-x-6 mt-6">
        <ul class="flex space-x-6">
          <li class="text-white border border-white rounded-full p-3">
            <FaFacebook />
          </li>
          <li class="text-white border border-white rounded-full p-3">
            <FaInstagram />
          </li>
          <li class="text-white border border-white rounded-full p-3">
            <FaTwitter />
          </li>
          <li class="text-white border border-white rounded-full p-3">
            <FaWhatsapp />
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  
  
  );
}

export default Footer;
