import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/nniravpatel/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/niravpatell23",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:nnirav.patel7@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Nirav_resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll < heightToHideFrom) {
      !isVisible && // to limit setting state only the first time
        setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <div>
      {isVisible && (
        <div
          id="bar"
          className="hidden lg:flex flex-col top-[35%] left-0 fixed "
        >
          <ul>
            {links.map(({ id, child, href, style, download }) => (
              <li
                key={id}
                className={
                  "flex justify-between items-center w-40 h-14 px-4 pl-8  text-md bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
                  " " +
                  style
                }
              >
                <a
                  href={href}
                  className="flex justify-between items-center w-full
                      text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Social;
