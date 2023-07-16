import React from "react";
import image from "../assets/heroImage.jpg";
// import { HiArrowRight } from "react-icons/hi";

import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/nniravpatel/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/niravpatell23",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:nnirav.patel7@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Nirav_resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black
    to-gray-800 via-black text-white"
    >
      <div
        className=" max-w-screen-lg mx-auto flex flex-col items-center
       justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className=" text-4xl sm:text-7xl font-bold ">
            {" "}
            I am a frontend developer
          </h2>
          <div className="flex justify-evenly py-8 lg:py-10 lg:ml-[-100px]">
            {links.map(({ id, child, href, style, download }) => (
              <a
                key={id}
                href={href}
                className=" cursor-pointer duration-300 hover:text-blue-600"
                download={download}
                target="_blank"
                rel=" noopener noreferrer"
              >
                {child}
              </a>
            ))}
          </div>
          <p className="text-gray-500 py-4 max-w-md">.</p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group font-bold text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={image}
            alt="my profile"
            className=" rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
