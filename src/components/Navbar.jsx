import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuItem = [
    {
      title: "HOME",
    },
    {
      title: "MEN",
    },
    {
      title: "WOMEN",
    },
    {
      title: "KIDS",
    },
    {
      title: "NEW_ARRIVALS",
    },
  ];

  return (
    <div className="bg-secondary ">
      <div className="px-4 flex justify-between items-center py-3">
        <div>
          <img src="/logo.png" alt="logo" className="w-24 h-auto" />
        </div>
        <div className="hidden lg:flex  justify-center font-medium text-primary gap-4 text-lg cursor-pointer">
          {menuItem.map((menu, index) => (
            <p
              key={index}
              className="active:border-b-primary active:border-b-2 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-primary after:transition-all after:duration-300 after:rounded-full hover:after:w-full"
            >
              {menu.title}
            </p>
          ))}
        </div>
        <div className="lg:hidden flex justify-center items-center gap-5">
          <div className="relative lg:hidden">
            <FaShoppingBag className="text-xl text-primary" />
            <p className="text-primary font-bold text-center rounded-full absolute top-[-0.5rem] right-[-0.5rem]  text-xs">
              0
            </p>
          </div>
          {showMenu ? (
            <RxCross2
              onClick={() => setShowMenu(false)}
              className="text-4xl text-primary"
            />
          ) : (
            <IoMenu
              onClick={() => setShowMenu(true)}
              className="text-4xl text-primary"
            />
          )}
        </div>
        <div className="hidden lg:flex justify-center items-center gap-3">
          <div className="backdrop-blur-lg bg-white/30  rounded-full">
            <FaSearch className=" text-lg text-primary  m-2" />
          </div>
          <div className="relative ">
            <FaShoppingBag className="text-xl text-primary" />
            <p className="text-primary font-bold text-center rounded-full absolute top-[-0.5rem] right-[-0.5rem]  text-xs">
              0
            </p>
          </div>
        </div>

        <div
          className={`fixed top-16 right-0 z-10 ${
            showMenu ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500`}
        >
          <div className=" bg-primary flex flex-col gap-3 items-center text-white px-8 py-8 w-72 h-screen rounded ">
            <p
              onClick={() => setShowMenu(false)}
              className="border-b-secondary border-b-2 "
            >
              HOME
            </p>
            <p onClick={() => setShowMenu(false)}>MEN</p>
            <p onClick={() => setShowMenu(false)}>WOMEN</p>
            <p onClick={() => setShowMenu(false)}>KIDS</p>
            <p onClick={() => setShowMenu(false)}>NEW ARRIVALS</p>
          </div>
        </div>
      </div>
      <hr className=" bg-primary" />
    </div>
  );
};

export default Navbar;
