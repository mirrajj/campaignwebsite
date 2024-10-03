import React from 'react';
import {FaTwitter,FaWhatsapp,FaFacebook,FaInstagram} from 'react-icons/fa'

const Home01 = () => {
  return (
    <div class="container mx-auto my-6">
      <div>
        <div class="flex flex-col lg:flex-row border-b pb-6 mb-6" id='home01-left'>
          {/* <!-- Left Side --> */}
            <div class="lg:w-1/2 flex flex-col justify-center bg-black bg-opacity-50 border-r border-gray-300 p-6 text-white">
              <h3 class="text-center text-xl font-semibold mb-4">Join the Team</h3>
              <p class="text-center mb-4">Share</p>
              <div>
                <ul class="flex justify-center space-x-6">
                  <li class="text-green-500 border border-green-500 rounded-full p-2">
                    <FaFacebook />
                  </li>
                  <li class="text-green-500 border border-green-500 rounded-full p-2">
                    <FaWhatsapp />
                  </li>
                  <li class="text-green-500 border border-green-500 rounded-full p-2">
                    <FaTwitter />
                  </li>
                  <li class="text-green-500 border border-green-500 rounded-full p-2">
                    <FaInstagram />
                  </li>
                </ul>
              </div>
            </div>
      
            {/* <!-- Right Side --> */}
            <div class="lg:w-1/2 bg-green-500 flex flex-col justify-center items-center p-6" id='home01-right'>
              <h1 class="text-2xl font-bold text-white mb-4 text-center">Let's Make Okaikwei South Go Green!!!</h1>
              <button class="bg-white text-green-500 px-4 py-2 rounded-lg mb-3 hover:bg-gray-200">Volunteer</button>
              <button class="bg-white text-green-500 px-4 py-2 rounded-lg hover:bg-gray-200">Donate</button>
            </div>
          </div>

        <div class="bg-gray-200 flex flex-col items-center text-center my-6 py-20" id='donation'>
          <img class= "hidden md:block" src="images/mahama_jane.png" alt="" />
          <h2 class="text-3xl font-bold text-green-500 mb-4">Support Ernest Adomako and the NDC</h2>
          <button class="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-red-500">Donate</button>
        </div>

        <div class="p-8" id='media'>
          <h2 class="text-center text-3xl font-bold text-green-600 mb-4">Media Coverage</h2>
          <p class="text-center text-gray-300 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam dolorem magnam, aspernatur facere ad.</p>
          <div class="flex flex-col gap-6">

            {/* <!-- Right Side - List Items --> */}
            <div class="flex flex-col gap-6">
              <div class="flex items-center justify-between border-t pt-4 h-auto">
                <p class="text-gray-300 w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, totam!</p>
                <img src="images/news-image.jpeg" alt="" class="w-fit h-fit object-cover rounded-lg" />
              </div>
              <div class="flex items-center justify-between border-t pt-4 h-auto flex-row-reverse">
                <p class="text-gray-300 w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, totam!</p>
                <img src="images/news-image.jpeg" alt="" class="w-fit h-fit object-cover rounded-lg" />
              </div>
              <div class="flex items-center justify-between border-t pt-4 h-auto">
                <p class="text-gray-300 w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, totam!</p>
                <img src="images/news-image.jpeg" alt="" class="w-fit h-fit object-cover rounded-lg" />
              </div>
              <div class="flex items-center justify-between border-t pt-4 h-auto flex-row-reverse">
                <p class="text-gray-300 w-2/3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, totam!</p>
                <img src="images/news-image.jpeg" alt="" class="w-fit h-fit object-cover rounded-lg" />
              </div>
            </div>
          </div>
      </div>
    {/* countdown */}
        <div>
          <h1>General Election is in :</h1>
          <div>
            <span>days  </span>
            <span>hours  </span>
            <span>minutes  </span>
            <span>seconds  </span>
          </div>
          <p><a href="">Know your Polling stations</a></p>
        </div>

      </div>
  </div>
  
  
  );
}

export default Home01;
