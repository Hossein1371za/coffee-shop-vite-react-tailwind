import React, { useState } from "react";
import {  motion } from "framer-motion";
import { service } from "./ServicesData";



const Services = () => {
  const [services, setServices] = useState(service);

  return (
    <div className="container my-16 space-y-4">
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.8,
          }}
          className=" text-3xl font-bold text-lightGray"
        >
          Fresh and <span className="text-primary">Tasty coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            delay: 1.2,
          }}
          className="text-sm text-lightGray"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 1,
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      >
        {services.map((service) => (
          <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 1.2,
          }}
            key={service.id}
            className="text-center p-4 space-y-6"
          >
            <img
              className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 transition-all duration-300 cursor-pointer"
              src={service.image}
              alt=""
            />
            <div className="space-y-2">
              <h1 className="text-primary font-bold text-2xl">
                {service.title}
              </h1>
              <p className="text-lightGray opacity-50 w-[50%] mx-auto">
                {service.subtitle}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Services;
