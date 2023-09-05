import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { AiOutlineSearch } from "react-icons/ai";
import { IoCartSharp } from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-[100px]">
      <div className="w-[90%] mx-auto h-full flex justify-between items-center">
        <div className="">
          <a href="">
            <img
              className="h-[60px] w-[197px] flex-shrink-0 cursor-pointer"
              src={logo}
              alt="no img"
            />
          </a>
        </div>
        <nav className="flex-grow ml-10 max-sm:hidden">
          <ul className="flex flex-grow justify-evenly text-lg font-semibold">
            <li className="hover:text-[#FF7A00] cursor-pointer duration-300">
              HOME
            </li>
            <li className="hover:text-[#FF7A00] cursor-pointer duration-300">
              ABOUT
            </li>
            <li className="hover:text-[#FF7A00] cursor-pointer duration-300">
              CARS
            </li>
            <li className="hover:text-[#FF7A00] cursor-pointer duration-300">
              SERVICES
            </li>
            <li className="hover:text-[#FF7A00] cursor-pointer duration-300">
              CONTACT
            </li>
          </ul>
        </nav>
        {open && (
          <nav className="sm:hidden  bg-gray-200 absolute top-0 right-0 mt-[100px] w-full z-10 duration-500">
            <ul className="flex flex-col duration-500 text-center items-center text-lg font-semibold">
              <li className="hover:text-[#FF7A00] border-[1px] w-full  border-gray-300 py-6 cursor-pointer duration-300">
                HOME
              </li>
              <li className="hover:text-[#FF7A00] border-[1px] w-full  border-gray-300 py-6 cursor-pointer duration-300">
                ABOUT
              </li>
              <li className="hover:text-[#FF7A00] border-[1px] w-full  border-gray-300 py-6 cursor-pointer duration-300">
                CARS
              </li>
              <li className="hover:text-[#FF7A00] border-[1px] w-full  border-gray-300 py-6 cursor-pointer duration-300">
                SERVICES
              </li>
              <li className="hover:text-[#FF7A00] border-[1px] w-full  border-gray-300 py-6 cursor-pointer duration-300">
                CONTACT
              </li>
              <li className="border-[1px] w-full  border-gray-300 py-6 cursor-pointer duration-300 flex justify-evenly">
                <div className="orderbtn hover:text-white hover:bg-[#FF7A00] duration-500 cursor-pointer text-lg font-semibold text-[#FF7A00] border-[#FF7A00] border-[1px] h-[40px] w-[150px] rounded-xl text-center items-center justify-center flex ">
                  Order Now
                </div>
                <IoCartSharp className="text-[40px]" />
                <div className="h-4 w-4 bg-[#FF7A00] cursor-pointer rounded-full absolute right-[135px] top-18 text-white text-center text-[11px] ">
                  3
                </div>
              </li>
            </ul>
          </nav>
        )}
        <div className="flex justify-evenly right-0 items-center gap-5 max-lg:hidden">
          <AiOutlineSearch className="text-[35px] cursor-pointer" />
          <div className="orderbtn hover:text-white hover:bg-[#FF7A00] duration-500 cursor-pointer text-lg font-semibold text-[#FF7A00] border-[#FF7A00] border-[1px] h-[40px] w-[150px] rounded-xl text-center items-center justify-center flex ">
            order now
          </div>
          <IoCartSharp className="text-[40px]" />
          <div className="h-4 w-4 bg-[#FF7A00] cursor-pointer rounded-full absolute right-16 top-8 text-white text-center text-[11px] ">
            3
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="humberger-menu sm:hidden flex flex-col gap-1 cursor-pointer"
        >
          <span
            style={{
              display: "block",
              width: "40px",
              height: "3px",
              marginBottom: "5px",
              transform: open
                ? "rotate(45deg) translateY(11px) translateX(6px)"
                : "none",
              transition: "background 0.3s, transform 0.3s",
            }}
            className="bg-black h-[2px] w-10"
          ></span>
          <span
            style={{
              display: "block",
              width: "40px",
              height: "3px",
              background: open ? "transparent" : "#000",
              marginBottom: "5px",
              opacity: open ? 0 : 1,
              transition: "background 0.3s, opacity 0.3s",
            }}
            className="bg-black h-[2px] w-10"
          ></span>
          <span
            style={{
              display: "block",
              width: "40px",
              height: "3px",
              transform: open
                ? "rotate(-45deg) translateY(-11px) translateX(6px)"
                : "none",
              transition: "background 0.3s, transform 0.3s",
            }}
            className="bg-black h-[2px] w-10"
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
