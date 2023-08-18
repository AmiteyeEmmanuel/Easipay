import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ArrowUpRightIcon } from "@heroicons/react/24/solid";
// import Modal from '../../utils/Modal';

// import HeroImage from '../../images/hero-image.png';

function HeroHome() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <section className="relative bg-white">
  
      <div data-aos="fade-in" className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className=" lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 pt-32 pb-12 md:pt-40 md:pb-2">

          {/* Section header */}
          <div   id='Home' className=" lg:text-justify lg:mx-0 lg:pt-20 lg:pb-12 md:pb-2 md:text-center md:justify-center md:mx-auto md:items-center">
            <h1 className=" lg:text-justify text-black text-4xl md:text-5xl md:text-center font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Run your <span className="text-green"> payroll </span> <br /> <span className="text-gold"> easily </span> in <span className="text-light-red"> seconds</span></h1>
            <div className="text-green max-w-3xl ">
                <div>
                  <p className="text-black">
                  We've built an all-inclusive simple solution for
                   <br />
                   individual and businesses to manage staff, pay.
                   <br/> 
                   salaries, bills, and relevant taxes all at once
                  </p>
                </div>
                <div className="mt-5 gap-4 sm:gap-2 xs:flex xs:flex-col xs:mx-auto  xs:items-center">
                <button className="bg-green border rounded-full border-gray-200 mr-4 py-3 px-6 mb-3 xs:w-8/12" >
                  <a  className=" flex btn text-white  w-full mb-4 sm:w-auto sm:mb-0" href="/create-account"> Start Using Free, Forever </a>
                </button>
                </div>

                <div className="mt-16 xl:mx-0 xl:ml-0 lg:mx-0 lg:ml-0 md:mx-auto md:ml-24">
                  <p className="text-xs font-thin text-black">
                    Download the Eazipay App<br />
                  </p>
                  <button className="bg-white1 border rounded-lg border-off-white mr-4 py-1 px-2 mb-3 xs:w-8/12" >
                    <div className="flex">
                   <img width="40px"  className="object-contain bg-gray-light rounded-full py-2 px-2 mr-3" src='/img/Apple.png' alt=''/>
                   <div>
                   <a  className="flex btn text-black text-xs  w-full mb-4 sm:w-auto sm:mb-0" href="/create-account"> Download on the </a>
                  <span className="text-black text-lg font-bold"> Appstore </span>
                   </div>
                    </div>
                </button>
                <button className="bg-white1 border rounded-lg border-off-white mr-4 py-1 px-2 mb-3 xs:w-8/12" >
                    <div className="flex">
                   <img width="45px"  className="object-contain bg-gray-light rounded-full py-2 px-2 mr-3" src='/img/Googleplay.png' alt=''/>
                   <div>
                   <a  className="flex btn text-black text-sm  w-full mb-4 sm:w-auto sm:mb-0" href="/create-account"> Get on  </a>
                  <span className="text-black text-lg font-bold"> Google Play </span>
                   </div>
                    </div>
                </button>
                </div>
            </div>  
          </div>
          {/* Hero Image */}
          <div className=" ml-10 ">
              <img  alt="" src="/img/homeImage.jpg" width="100%" height="100%" />
            </div>
        </div>

      </div>
    </section>
  );
}

export default HeroHome;