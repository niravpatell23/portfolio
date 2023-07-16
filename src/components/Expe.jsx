import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

const Expe = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800
       to-black text-white "
    >
      <div
        className=" max-w-screen-lg p-4 mx-auto flex flex-col
         justify-center w-full h-full"
      >
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <div
            className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 
                        px-12 sm:px-0 md:mt-14"
          >
            <div className="mt-20">
              <h3 class=" ml-2 text-4xl font-bold inline border-b-4 border-gray-500">
                My Education
              </h3>
              <div className="border-l border-white-600  pl-8 ml-0 md:ml-2 mt-12">
                <div className="relative mt-9 mb-4">
                  {/* <i className="fa fa-dot-circle text-blue-600 absolute top-0.5 -left-9 text-xl"></i> */}
                  <div className="  absolute -left-11 z-2 ">
                    <FaRegDotCircle size={25} />
                  </div>
                  <h5 className="font-bold mb-1">Bachelor of Science</h5>
                  <p className="mb-2">
                    <strong>Cambridge University</strong> |{" "}
                    <small>2005 - 2009</small>
                  </p>
                  <p>
                    Tempor eos dolore amet tempor dolor tempor. Dolore ea magna
                    sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita
                    lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum
                    stet lorem diam
                  </p>
                </div>
                <div className="relative mt-9 mb-4">
                  {/* <i className="far fa-dot-circle text-blue-600 absolute top-0.5 -left-9 text-xl"></i> */}
                  <div className="  absolute -left-11 z-2 ">
                    <FaRegDotCircle size={25} />
                  </div>
                  <h5 className="font-bold mb-1">Master In CSE</h5>
                  <p className="mb-2">
                    <strong>Cambridge University</strong> |{" "}
                    <small>2009 - 2011</small>
                  </p>
                  <p>
                    Tempor eos dolore amet tempor dolor tempor. Dolore ea magna
                    sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita
                    lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum
                    stet lorem diam
                  </p>
                </div>
                {/* <div className="position-relative mt-9 mb-4">
              <i className="far fa-dot-circle text-blue-600 absolute top-0.5 -left-9 text-xl"></i>
              <h5 className="font-bold mb-1">IIT Kharagpur</h5>
              <p className="mb-2">
                <strong>Cambridge University</strong> |{" "}
                <small>2011 - 2015</small>
              </p>
              <p>
                Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit
                amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd
                sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam
              </p>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expe;
