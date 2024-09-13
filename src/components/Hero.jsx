import React from "react";
import BlackCoffee from "../assets/Black.png";

const Hero = () => {
  return (
    <main className="bg-hero bg-no-repeat bg-center bg-cover">
      <section className="min-h-[750px] w-full">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]">
            <div className="text-lightOrange mt-[100px] md:mt-0 p-4 space-y-28">
              <h1 className="text-7xl font-bold leading-tight ml-14">
                Black Tumbler
              </h1>
              <div className="relative">
                <div className="relative z-10 space-y-4">
                  <h1 className="text-2xl">Black Lifestyles Lovers.</h1>
                  <h1 className="text-sm opacity-55 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </h1>
                </div>
                <div className="absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25">
                  {" "}
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={BlackCoffee}
                alt=""
                className="relative z-40 h-[400px] md:h-[700px] img-shadow"
              />
              <div className="h-[180px] w-[180px] absolute top-24 -right-16 border-[20px] border-primary rounded-full z-10 "></div>
              <div></div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
