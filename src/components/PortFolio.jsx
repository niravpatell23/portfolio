import React from "react";
import intouch from "../assets/portfolio/intouch.gif";

const PortFolio = () => {
  const portfolios = [
    {
      id: 1,
      src: intouch,
      demo: "https://in-touch-client.vercel.app",
      code: "https://github.com/niravpatell23/InTouch/tree/main",
    },
    // {
    //   id: 2,
    //   src: reactParallax,
    // },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            PortFolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 
                        px-12 sm:px-0 md:mt-14"
        >
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className=" rounded-md hover:scale-105 duration-200"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => window.open(demo, "_blank")}
                  className=" w-1/2 px-6 m-4 hover:scale-105 duration-200 cursor-pointer"
                >
                  Demo
                </button>
                <button
                  onClick={() => window.open(code, "_blank")}
                  className=" w-1/2 px-6 m-4 hover:scale-105 duration-200"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
