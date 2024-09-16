import React, { useState,useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import SidebarMenu from "./SidebarMenu";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);
  return (
    <nav
      className={`${
        isActive ? "bg-gray-900/80 py-4 shadow-md" : "bg-none py-6"
      } fixed top-0 left-0 w-full pt-10 text-white z-20 transition-all duration-300`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className="text-2xl font-semibold cursor-pointer uppercase"
          >
            <span className="text-primary">Black</span> Coffee.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            onClick={() => setMenu(!menu)}
            className="text-3xl transition-all duration-200 z-40 cursor-pointer"
          >
            {menu ? <FaTimes /> : <FaBars />}
          </motion.div>
        </div>
      </div>
      <SidebarMenu menu={menu} />
    </nav>
  );
};

export default Navbar;
