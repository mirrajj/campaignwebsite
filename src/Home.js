import React from 'react';

const Home = () => {
  return (
<div class=" mt-0" id="home">
  <div class="container mx-auto">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
     
      <div class="flex flex-col lg:flex-row items-center">
        <img src="/images/ernest02.png" alt="Plans" class="w-full lg:w-1/2  object-cover" />
        <div class="lg:ml-6 flex flex-col text-green-500 justify-end h-full">
          <h3 class="text-2xl font-semibold mb-2">My</h3>
          <h2 class="text-3xl font-bold mb-3">Plans For You</h2>
          <p class="text-gray-700 font-bold">
            "..Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit suscipit reprehenderit architecto.
            Placeat eveniet ex temporibus dolores. Voluptas, eum impedit fuga ipsa, ipsum eius itaque ad ea eos ullam dolores!"
          </p>
        </div>
      </div>

      
      <div class="grid grid-cols-2 gap-4" id='cards'>
        <div class="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="/images/kaneshie-market.jpeg" alt="Opportunity For the Youth" class="w-full h-full rounded mb-2 object-cover" />
          <h4 class="text-lg font-semibold">Opportunity For the Youth</h4>
          <a href="">Learn More</a>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="/images/kaneshie-market.jpeg" alt="Improved Sanitation" class="w-full h-full rounded mb-2 object-cover" />
          <h4 class="text-lg font-semibold">Improved Sanitation</h4>
          <a href="">Learn More</a>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="/images/kaneshie-market.jpeg" alt="Water Access" class="w-full h-full rounded mb-2 object-cover" />
          <h4 class="text-lg font-semibold">Water Access</h4>
          <a href="">Learn More</a>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <img src="/images/kaneshie-market.jpeg" alt="Kaneshie Market Clinic" class="w-full h-full rounded mb-2 object-cover" />
          <h4 class="text-lg font-semibold">Kaneshie Market Clinic</h4>
          <a href="">Learn More</a>
        </div>
      </div>
    </div>
  </div>
</div>

  
  );
}

export default Home;
