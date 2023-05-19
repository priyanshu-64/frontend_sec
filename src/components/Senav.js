import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Senav() {
  return (
    <div>
      <div id="controls-carousel" class="relative w-full" data-carousel="static">
    {/* <!-- Carousel wrapper --> */}
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <div className="md:w-[900px] w-80 md:h-72 h-[400px] border-2  bg-[#FBCEB1] ml-6 md:ml-12  my-20 ">
            <div className="grid grid-cols-1 md:grid-cols-3  ">
              <div className=" md:ml-9  ml-16 w-48 h-48 md:mt-8 -mt-10  bg-blue-300  rounded-full">
                <div className="text-center">
                  <img
                    src="https://w7.pngwing.com/pngs/230/859/png-transparent-woman-holding-laptop-computer-student-school-education-computer-lab-asian-girl-class-people-computer-thumbnail.png"
                    className="  w-32 ml-4"
                    alt=""
                  />
                  <div ><p className="text-gray-800 text-xl font-semibold mt-5">
                    Roshni thakur
                  </p></div>
                  
                </div>
              </div>
              <div className=" md:text-start text-center col-span-2 mt-6 text-gray-800">
                <p className="text-xl md:text-4xl mt-2">
                  
                  Legend in PYTHON Programing langudge (Core/Advance)
                </p>
                <p className="mt-5">
                  I have teaching experience of 8 years at Paramount, KD in
                  Delhi,Jaipur & Varanasi. Also selected as Excise Inspector ,
                  IT experience
                </p>

                <ul className="flex justify-center gap-5 mt-0 md:mt-8 ">
                  <li>
                    <InstagramIcon />
                  </li>
                  <li>
                    <FacebookIcon />
                  </li>
                  <li>
                    <LinkedInIcon />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Item 2 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
        <div className="md:w-[900px] w-80 md:h-72 h-[400px] border-2  bg-[#FBCEB1] ml-6 md:ml-12  my-20 ">
            <div className="grid grid-cols-1 md:grid-cols-3  ">
              <div className=" md:ml-9  ml-16 w-48 h-48 md:mt-8 -mt-10  bg-blue-300  rounded-full">
                <div className="text-center">
                  <img
                    src="https://w7.pngwing.com/pngs/230/859/png-transparent-woman-holding-laptop-computer-student-school-education-computer-lab-asian-girl-class-people-computer-thumbnail.png"
                    className="  w-32 ml-4"
                    alt=""
                  />
                  <div ><p className="text-gray-800 text-xl font-semibold mt-5">
                    Roshni thakur
                  </p></div>
                  
                </div>
              </div>
              <div className=" md:text-start text-center col-span-2 mt-6 text-gray-800">
                <p className="text-xl md:text-4xl mt-2">
                  
                  Legend in PYTHON Programing langudge (Core/Advance)
                </p>
                <p className="mt-5">
                  I have teaching experience of 8 years at Paramount, KD in
                  Delhi,Jaipur & Varanasi. Also selected as Excise Inspector ,
                  IT experience
                </p>

                <ul className="flex justify-center gap-5 mt-0 md:mt-8 ">
                  <li>
                    <InstagramIcon />
                  </li>
                  <li>
                    <FacebookIcon />
                  </li>
                  <li>
                    <LinkedInIcon />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Item 3 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <div className="md:w-[900px] w-80 md:h-72 h-[400px] border-2  bg-[#FBCEB1] ml-6 md:ml-12  my-20 ">
            <div className="grid grid-cols-1 md:grid-cols-3  ">
              <div className=" md:ml-9  ml-16 w-48 h-48 md:mt-8 -mt-10  bg-blue-300  rounded-full">
                <div className="text-center">
                  <img
                    src="https://w7.pngwing.com/pngs/230/859/png-transparent-woman-holding-laptop-computer-student-school-education-computer-lab-asian-girl-class-people-computer-thumbnail.png"
                    className="  w-32 ml-4"
                    alt=""
                  />
                  <div ><p className="text-gray-800 text-xl font-semibold mt-5">
                    Roshni thakur
                  </p></div>
                  
                </div>
              </div>
              <div className=" md:text-start text-center col-span-2 mt-6 text-gray-800">
                <p className="text-xl md:text-4xl mt-2">
                  
                  Legend in PYTHON Programing langudge (Core/Advance)
                </p>
                <p className="mt-5">
                  I have teaching experience of 8 years at Paramount, KD in
                  Delhi,Jaipur & Varanasi. Also selected as Excise Inspector ,
                  IT experience
                </p>

                <ul className="flex justify-center gap-5 mt-0 md:mt-8 ">
                  <li>
                    <InstagramIcon />
                  </li>
                  <li>
                    <FacebookIcon />
                  </li>
                  <li>
                    <LinkedInIcon />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Item 4 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 5 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
    </div>
  )
}



