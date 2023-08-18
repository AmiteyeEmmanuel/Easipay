import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className=" text-black bg-white mx-auto p-20 sm:px-6">

        {/* Top area: Blocks */}
        <div className="lg:grid lg:grid-cols-12 md:flex  md:flex-col gap-8 py-8 md:py-12">

          {/* 1st block */}
          <div className=" lg:ml-20 md-ml-0 sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block">
              <img src="/img/Logo.jpg" className='mr-20' width="100px" height="100px" alt='' /> 
              </Link>
            </div>
            <div className="text-sm text-gray-600 mt-4 lg:w-full md:w-4/12">
            <p>Copyright @ 2023 Eazipay <br/> All rights reserved.</p>
            </div>

            <div className='flex gap-4 mt-12'>
            <div className="bg-gray-light py-2 px-2 rounded-full">
                <img width="20px" src="/img/insta.png" alt="" />
              </div>

              <div className="bg-gray-light py-2 px-2 rounded-full">
                <img width="20px" src="/img/twitter.png" alt="" />
              </div>

              <div className="bg-gray-light py-2 px-2 rounded-full" >
                <img className='' width="20px" src="/img/LinkedIn.png" alt="" />
              </div>

              <div className="bg-gray-light py-2 px-2 rounded-full">
                <img width="20px" src="/img/facebook.png" alt="" />
              </div>

              
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 text-xl font-bold mb-2">Product</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Individual</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Businesses</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Request Demo</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Pricing</Link>
              </li>
            </ul>
          </div>

                 {/* 2nd block */}
                 <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 text-xl font-bold mb-2">Legal</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* 3eh block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 text-xl font-bold mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"> FAQs</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"> Blogs</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Career</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Customer Stories</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
            <h6 className="text-gray-800 text-xl font-bold mb-2">Contact Us</h6>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="mt-2"> 
                  <p className="mb-2"> eazipay@gmail.com</p>
                  <p> +234 816 878 9518 </p>
                </div>
                <div className="w-5/6 mt-2">
                  <div className="relative flex items-center max-w-xs">
                    <input id="newsletter" type="email" className=" bg-gray-light w-full text-cool-gray-600  px-3 py-2 pr-12 text-sm rounded-full placeholder-black" placeholder="Your email address" required/>
                    {/* <img class="relative right-24" src="/img/send.png" alt="Send Image" width="20px"/> */}
                  </div>
                </div>
              </div>
            </form>
          </div>          

        </div>

      </div>
    </footer>
  );
}

export default Footer;
