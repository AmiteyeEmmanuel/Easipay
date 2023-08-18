import React, { useState } from 'react';
import styled from 'styled-components';
import { testAnimation } from '../../animation';

function Testimonials() {
  const [selected, setSelected] = useState(0);
 
  return (
    <section className="relative bg-white h-full">

    {/* Section background (needs .relative class on parent and next sibling elements) */}
    <div className="absolute inset-0 bg-white pointer-events-none mb-16" aria-hidden="true"></div>
    <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

    <img  className="relative obtain-contain" width="200px top-40"  src="/img/One.jpg" alt="" />

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 gap-10'>
      <div className="">
        {/* Section content */}
        <div className="md:grid mt-40 cols-12 md:gap-6">
          {/* Content */}
          <div className="max-w-xl md:max-w-none md:w-full md:col-span-7 lg:col-span-12">                  
                <div className="relative lg:ml-0 md:ml-16">
                     <h1 className="text-green font-extrabold text-5xl"> Get an Exclusive <br/> Demo of Eazipay</h1>
                     <p className="text-black font-semibold gap-6"> Our greatest priority is to put you and <br/> your business first. Let's show you how <br/> we can help.</p>
                  </div>
          </div>
        </div >
      </div >
      <div className="md:grid mb-24 cols-12 md:gap-6">
          {/* Content */}
          <form className="max-w-xl md:max-w-none md:w-full md:col-span-7 lg:col-span-12 rounded overflow-hidden shadow-xl">                  
                <div className="relative lg:ml-0 md:ml-16">
                     <h1 className="text-black font-extrabold text-2xl text-center"> First things first</h1>
                     <p className="text-black font-semibold gap-6 text-center text center"> We want to serve you better. Tell us a bit <br/> about yourself or company</p>
                  </div>
                  <ul className="flex flex-grow justify-end flex-wrap items-center">
            <li className=" px-4 py-6">
                <button  className="font-medium bg-green rounded-lg text-white px-20 py-3 flex items-center"> Individual</button>
              </li>
              <li>
              <button  className="font-medium bg-gray-light rounded-lg text-black px-20 py-3 flex items-center"> Company</button>
              </li>
            </ul>
            <input className="border border-black w-full h-10 mb-6 px-2 rounded-lg placeholder-black"  type="text" placeholder="First Name"/>
            <input className="border border-black w-full h-10 mb-6 px-2 rounded-lg placeholder-black"  type="text" placeholder="Last Name"/>     
            <input className="border border-black w-full h-10 mb-6 px-2 rounded-lg placeholder-black"  type="text" placeholder="Job Title"/>     
            <input className="border border-black w-full h-10 mb-6 px-2 rounded-lg placeholder-black"  type="text" placeholder="Company Name"/>      

            <button className="bg-green items-center w-full h-10 rounded-full text-white"> Request Demo </button>    
          </form>
        </div >
      </div >
     
    </div >
  </section >
  )
}

export default Testimonials