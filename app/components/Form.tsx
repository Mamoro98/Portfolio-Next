import React from "react";

const Form = () => {
  return (
    <div className=" h-[42vh]  flex flex-col ">
      <div>
        <h1>Email</h1>
        <input
          type="text"
          placeholder="Your email here"
          className="input w-full max-w-xs mt-1"
        />
      </div>
      <div className="mt-7">
        <h1>Message</h1>
        <textarea
          className=" textarea textarea-accent w-80 h-32 mt-1"
          placeholder="Type your message here"
        ></textarea>
      </div>
      <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg w-full h-[1vh]">
        Send
      </button>
    </div>
  );
};

export default Form;
