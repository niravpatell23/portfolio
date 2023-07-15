import React from "react";

const About = () => {
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
            About
          </p>
        </div>
        <p className=" text-xl mt-20 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
          consequatur ad totam dolorum temporibus ex earum cupiditate omnis id
          officia provident deserunt nemo praesentium vero corporis adipisci
          molestias ratione repudiandae!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, at sit
          dolorum, nam placeat nesciunt temporibus illum tempore quis harum
          eaque obcaecati qui, veritatis excepturi deserunt accusantium ab
          officia dolor.
        </p>
      </div>
    </div>
  );
};

export default About;
