import React from "react";
import AppStoreImg from "../assets/website/app_store.png";
import PlayStore from "../assets/website/play_store.png";
import { motion } from "framer-motion";

const AppBanner = () => {
  return (
    <div className="container my-14">
      <div className="bg-bannerApp bg-center bg-cover bg-no-repeat sm:min-h-[400px] sm:flex sm:items-center sm:justify-end rounded-xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.7,
          }}
          className="flex flex-col gap-y-8"
        >
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl sm:text-4xl font-semibold text-center">
              Download the app
            </h1>
            <p className="sm:px-20 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              <br /> sed do eiusmod Lorem ipsum dolor sit amet,
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <img
              className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] cursor-pointer hover:scale-110 duration-300"
              src={AppStoreImg}
              alt=""
            />
            <img
              className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] cursor-pointer hover:scale-110 duration-300"
              src={PlayStore}
              alt=""
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AppBanner;
