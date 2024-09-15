import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";

const SidebarMenu = ({ menu }) => {
  return (
    <div className={`${menu ? "right-0 " : "-right-[100%]"} absolute top-0  w-[15%] bg-primary/80  h-screen z-30 transition-all duration-500`}>
      <div className="container flex flex-col items-center justify-center h-full gap-y-10 text-[35px]">
        <div className="w-[1px] h-[70px] bg-white"></div>
        <FaInstagram className="cursor-pointer hover:text-gray-700"/>
        <FaYoutube className="cursor-pointer hover:text-gray-700"/>
        <FaLinkedin className="cursor-pointer hover:text-gray-700"/>
        <FaFacebook className="cursor-pointer hover:text-gray-700"/>
        <div className="w-[1px] h-[70px] bg-white"></div>
      </div>
    </div>
  );
};

export default SidebarMenu;
