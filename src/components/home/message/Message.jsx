import React from "react";

const Message = () => {
  return (
    <div className="w-full bg-flame-red group bg-center bg-no-repeat md:pb-12 ">
      <div className=" group-hover:bg-flame-red/90 transition-all duration-700  w-full  h-96 relative">
        <div className=" w-full h-full flex items-center justify-center ">
          <h2 className=" absolute text-5xl  xl:text-8xl font-extrabold text-white group-hover:opacity-0 transition-all duration-700 text-center sm:text-left  tracking-wide ">
            <span className="text-5xl font-light text-left">Our</span> <br />{" "}
            Products and Services
          </h2>
          <h2 className=" absolute text-5xl  xl:text-8xl font-extrabold text-white opacity-0 group-hover:opacity-100 transition-all duration-700 text-center sm:text-left  tracking-wide ">
            <span className="text-5xl font-light text-left">Your</span> <br />{" "}
            Business Growth
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Message;
