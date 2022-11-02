import React from "react";

const Header = () => {
  return (
    <div className='flex flex-col p-3 items-center justify-center' id='header'>
      <h1 className='text-4xl text-center w-full'>
        Welcome to my first project using Three.js in React
      </h1>
      <div className='text-center px-5'>
        <p className='text-justify mt-4 md:w-[600px] lg:w-[800px] xl:w-[1100]'>
          "First of all, remember its being made with a lib called
          react-three-fiber which is used as an abstraction of Three.js for
          React. Also saying that this project was meant to be a way of
          exploring all the ecosystem of react-three, such as drei."
        </p>
      </div>
    </div>
  );
};

export default Header;
