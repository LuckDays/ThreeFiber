import React from "react";

const Header = () => {
  return (
    <div className='flex flex-col justify-evenly p-3 items-center'>
      <h1 className='text-4xl'>
        Welcome to my first project using Three.js in React
      </h1>
      <div className='px-10 py-5'>
        <p className='text-justify w-[600px]'>
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
