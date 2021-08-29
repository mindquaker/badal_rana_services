//eslnt-disable
import React from "react";
export const Nav = () => {
  const style =
    "p-3 text-black-200 hover:text-indigo-400  cursor-pointer hover:shadow-md transition ease-in duration-150  ";
  return (
    <div
      className='bg-blue-500   w-1/2 m-auto mt-2   rounded-xl shadow-lg
      iphoneX:w-72
     '>
      <navbar>
        <nav className='h-12  w-full space-x-7 flex flex-row items-center justify-left'>
          <a
            href='#home'
            className='p-3 text-black-200 hover:text-indigo-400  cursor-pointer hover:shadow-md transition ease-in duration-150'>
            Home
          </a>
          <div className='relative group'>
            <button class='flex flex-row items-center w-full   mt-2   text-left  bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat'>
              <span className={style}>Services</span>
            </button>
            <div class='absolute z-10 hidden bg-grey-200 group-hover:block'>
              <div class='px-2 pt-2 pb-4 bg-gray-200 shadow-lg'>
                <div class=''>
                  <a href='#service1' className={style}>
                    Service 1{" "}
                  </a>
                  <br />
                  <a href='#service2' className={style}>
                    Service 2{" "}
                  </a>
                  <br />

                  <a href='#service3' className={style}>
                    Service 3{" "}
                  </a>

                  <br />
                  <a href='#service4' className={style}>
                    Service 4{" "}
                  </a>

                  <br />

                  <a href='#service5' className={style}>
                    Service 5{" "}
                  </a>

                  <br />

                  <a href='#service6' className={style}>
                    Service 6{" "}
                  </a>
                  <br />
                  <a href='#service7' className={style}>
                    Service 7{" "}
                  </a>

                  <br />

                  <a href='#service8' className={style}>
                    Service 8{" "}
                  </a>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </navbar>
    </div>
  );
};

export default Nav;
