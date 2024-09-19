import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGoogle,
  FaTelegram,
  FaPhone,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CreditCart from "../assets/website/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="flex gap-y-12 flex-col lg:flex-row lg:gap-y-0 items-center justify-between">
          <div className=" flex flex-col gap-y-4 text-center">
            <h1 className="text-3xl font-bold uppercase">Black coffee</h1>
            <p className="max-w-[300px] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <div className="flex items-center justify-center gap-x-2">
              <FaPhone />
              <p>+012345678910</p>
            </div>
            <div className="flex items-center justify-center gap-x-2">
              <FaMapLocation />
              <p>USA, California</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 text-center">
            <h1 className="text-3xl font-bold uppercase text-center">Quick Links</h1>
            <div className="flex items-center justify-center gap-8 cursor-pointer">
              <ul className="flex flex-col gap-y-3">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Search Fruits</li>
                <li>Privacy</li>
              </ul>
              <ul className="flex flex-col gap-y-3">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Search Fruits</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>
            <div className="flex flex-col gap-y-4">
                <h1 className="text-3xl font-bold uppercase text-center">follow us</h1>
                <div className="flex items-center justify-center gap-x-2 text-[30px]">
                    <FaFacebook className="cursor-pointer hover:scale-110 duration-200" />
                    <FaInstagram className="cursor-pointer hover:scale-110 duration-200" />
                    <FaTelegram className="cursor-pointer hover:scale-110 duration-200" />
                    <FaGoogle className="cursor-pointer hover:scale-110 duration-200" />
                </div>
                <div className="flex flex-col items-center gap-y-4">
                    <h2 className="text-xl font-semibold mb-2">Payment Methods</h2>
                    <img className="w-[250px]" src={CreditCart} alt=""/>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
{
  /* <div className="grig grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold uppercase">Black coffee</h1>
            <p className="max-w-[300px] text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </p>
            <div className="flex items-center gap-x-2">
              <FaPhone />
              <p>+012345678910</p>
            </div>
            <div className="flex items-center gap-x-2">
              <FaMapLocation />
              <p>USA, California</p>
            </div>
          </div>

          <div className="space-y-6">
            <h1>Quick Links</h1>
            <div className="grid grid-cols grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Search Fruits</li>
                <li>Privacy</li>
                </ul>
              </div>
              {/* <div className="flex flex-col gap-y-4">
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Search Fruits</p>
                <p>Privacy</p>
              </div> 
            </div>
          </div>
          </div> */
}
{
  /* <div>hjmfgjhm</div> */
}
