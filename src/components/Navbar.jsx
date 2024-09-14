import React, { useState } from "react";
import {FaTimes,FaBars} from "react-icons/fa"

const Navbar = () => {
  const [menu,setMenu] = useState(false)
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-20">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold cursor-pointer uppercase">
            <span className="text-primary">Black</span> Coffee.
          </h1>
          <div onClick={()=>setMenu(!menu)} className="text-3xl transition-all duration-200">
            {menu ? <FaTimes/> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
