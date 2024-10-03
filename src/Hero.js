import React from 'react';
import {ReactTyped} from 'react-typed';

const Hero = () => {
  return (
    <div class="bg-gray-100 my-6 mt-0" id='hero'>
      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        <div class="">
            <h3 class="text-primary mb-3">NDC</h3>
            <h1 class="text-2xl lg:text-4xl font-bold mb-3">Ernest Adomako Keon</h1>
            <ReactTyped 
              strings = {
                ["Leader","Visionary","Advaocate"]} 
              typeSpeed = {100}
              backSpeed = {100}
              loop
            />
            {/* <h2 class="text-lg lg:text-xl mb-3">
              <span id="typed-text-output" class="inline"></span>
              <span id="typed-text" class="hidden">Leader, Visionary, Advocate</span>
            </h2> */}
            <div class="text-sm lg:text-lg text-white">Let's Make Ghana Work</div>
            <div class="text-sm lg:text-lg text-white" id='style-font'>𝓴𝓮𝓸𝓷</div>
        </div>
          {/* Column for Image */}
          <div>
            <img src="/images/ernest01.png" alt="Ernest Adomako Keon" class="img-fluid w-full h-auto " />
          </div>
        </div>
      </div>
  </div>
  
  );
}

export default Hero;
