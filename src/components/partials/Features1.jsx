import React, { useState } from 'react';
import { UserGroupIcon} from '@heroicons/react/24/solid';

function Courses() {

  const [selected, setSelected] = useState(0);

  return (
    <section className="relative bg-white">

    {/* Section background (needs .relative class on parent and next sibling elements) */}
    <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
    <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

    
        <div className="max-w-3xl mx-auto text-center">
        <h1 className=" lg:text-4xl text-green font-extrabold md:text-5xl xs:text-2xl "> How Eazipay works</h1>
        <p> Get started in 3 simple steps</p>              
          </div>

    <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 gap-10'>
      <div className="">
        {/* Section content */}
        <div className="md:grid md:grid- cols-12 md:gap-6">

          {/* Content */}
          <div className="max-w-xl md:max-w-none md:w-full md:col-span-7 lg:col-span-12">                  
                <div className="relative lg:ml-0 md:ml-16">
                    <img className="md:max-w-none" src="/img/five.jpg" width="400px" height="400px"  alt="Features bg" />
                  </div>
          </div>

          {/* Tabs items */}

        </div >
      </div >
      <div className='grid grid-cols-2 gap-6 lg:ml-2 md:mt-5 w-full xs:grid-cols-1'>
        <img className="md:max-w-none" src="/img/six.jpg" width="400px" height="400px"  alt="Features bg" />
      </div>
      </div>
     

    </div >
  </section >

  );
}

export default Courses;