import React, { useState } from "react";
import SettingsBrightnessSharpIcon from "@mui/icons-material/SettingsBrightnessSharp";
import MenuOpenSharpIcon from "@mui/icons-material/MenuOpenSharp";
import Login from "./Login";
import Signup from "./Signup";
import Reg from "./Reg";


import MenuSharpIcon from "@mui/icons-material/MenuSharp";
export default function Navbar() {
  const openmobile = () => {
    let icon = document.getElementById("mobile_menu");
    if (icon.style.marginTop == "-100%") {
      icon.style.marginTop = "0%";
    } else {
      icon.style.marginTop = "-100%";
    }
  };

  const [showMyModal, setshowMyModal] = useState(false);
  // const [showMyModalloginlogi
  //   Sign_upal] = useState(false);
  const [showMyModallogin, setshowMyModallogin] = useState(false);
  const handleClose = () => setshowMyModal(false);
  const handleCloselogin = () => setshowMyModallogin(false);


  
  return (
    <>
      <nav className="bg-[#040239] h-16 static">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                id="openmenue"
                onClick={openmobile}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <MenuSharpIcon className="" />
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flexflex-shrink-0 items-center">
                <img
                  className="block h-10 w-auto lg:hidden md:mt-6 sm:mt-4"
                  src="https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png"
                  alt="Cybrom"
                />
                <img
                  className="hidden h-10 my-5  w-auto lg:block mt-0 lg:mt-6 "
                  src="https://cybrom.com/wp-content/uploads/2023/04/Logo-for-website-1.png"
                  alt="Cybrom"
                />
              </div>
              <div className="hidden sm:block sm:ml-6  sm:mt-6    lg:mt-6 md:mt-6">
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Educators
                  </a>
                  <a
                    href="#"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Destination
                  </a>
                  <a
                    href="#"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Teachers
                  </a>
                  <a
                    href="#"
                    className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Beneifits
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <SettingsBrightnessSharpIcon />
              </button>
              <div className="relative ml-3">
                <button
                  className="bg-blue-500 px-3 py-1 md:py-2 text-sm font-medium rounded-md text-white"
                  onClick={() => setshowMyModallogin(true)}
                >
                  login
                </button>
              </div>
              <div className="relative ml-3">
                <button
                  className="bg-blue-500 px-3 py-1 md:py-2 text-sm font-medium rounded-md text-white"
                  onClick={() => setshowMyModal(true)}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div
          className="z-10 relative  transition duration-700 ease-in-out  md:hidden bg-gray-800 border text-center"
          id="mobile_menu"
          style={{ marginTop: "-100%" }}
        >
          <a
            href="#"
            className="text-gray-300  block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
           Educator
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
             Destination
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Teachers
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
           Beneifits
          </a>
       
        </div>
      </nav>
      <Login onClose={handleCloselogin} visible={showMyModallogin} />
      <Signup onClose={handleClose} visible={showMyModal} />
      {/* <Log onClose={handleClose} visible={showMyModalReg} /> */}
    </>
  );
}
