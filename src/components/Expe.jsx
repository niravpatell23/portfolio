import React from "react";
import { FaRegDotCircle } from "react-icons/fa";

const Expe = () => {
  return (
    <div
      name="about"
      className="md:h-screen bg-gradient-to-b from-gray-800
       to-black text-white 
       "
    >
      <div
        className=" max-w-screen-lg p-4 mx-auto flex flex-col
         justify-center w-full h-full"
      >
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {/* <div className="relative flex items-center justify-center"> */}
        <div
          className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 
                        px-12 sm:px-0 md:mt-14"
        >
          <div className=" mt-14">
            <h3 class=" ml-2 text-3xl font-bold inline  ">Experience</h3>
            <div className="border-l border-white-600  pl-8 ml-0 md:ml-2 mt-12">
              <div className="relative mt-9 mb-4">
                <div className="  absolute -left-11 z-2 bg-black rounded-2xl">
                  <FaRegDotCircle
                    size={25}
                    color="gray"
                    // className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl"
                  />
                </div>
                <h5 className="font-bold mb-1">Software Engineer</h5>
                <p className="mb-2">
                  <strong>Sigma Solve Inc</strong> | <small>2020 - 2021</small>
                </p>
                <p>
                  Collaborated closely with designers to translate wireframes
                  and mockups into pixel-perfect frontend designs, ensuring a
                  consistent and seamless user experience <br />
                  Developed user interfaces for web applications using React.js,
                  JavaScript, Bootstrap, HTML, and CSS  Created RESTful
                  back-end systems with Node.js, Express, and MongoDB
                </p>
              </div>
              <div className="relative mt-9 mb-4">
                <div className="  absolute -left-11 z-2 bg-black rounded-2xl">
                  <FaRegDotCircle size={25} color="gray" />
                </div>
                <h5 className="font-bold mb-1">Software Engineer Intern</h5>
                <p className="mb-2">
                  <strong>VEStellaLab Inc.</strong> | <small>2020 - 2020</small>
                </p>
                <p>
                  Implemented client facing app using various technologies
                  including HTML, CSS, Solidity, Web3.JS, Node.js, Truffle,
                  Metamask, Remix
                  <br />
                  Designed a framework for agricultural food supply chain,
                  leading to 20% more purchase power for agro-resources
                </p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className=" mt-14">
            <h3 class=" ml-2 text-3xl font-bold inline ">Education</h3>
            <div className="border-l border-white-600  pl-8 ml-0 md:ml-2 mt-12">
              <div className="relative mt-9 mb-4">
                <div className="  absolute -left-11 z-2 bg-black rounded-2xl">
                  <FaRegDotCircle size={25} color=" gray" />
                </div>
                <h5 className="font-bold mb-1">Master In Computer Science</h5>
                <p className="mb-2">
                  <strong>Stevens Institute of Technology</strong> |{" "}
                  <small>2021 - 2023</small>
                </p>
                <p></p>
              </div>
              <div className="relative mt-9 mb-4">
                <div className="  absolute -left-11 z-2 bg-black rounded-2xl">
                  <FaRegDotCircle size={25} color="gray" />
                </div>
                <h5 className="font-bold mb-1">
                  Bachelors in Computer Engineering
                </h5>
                <p className="mb-2">
                  <strong>Nirma University</strong> | <small>2018 - 2021</small>
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Expe;
