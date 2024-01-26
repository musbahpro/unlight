import React from "react";
import Buttons from "../Buttons";

function Offer() {
  return (
    <div className="offer flex justify-evenly items-center flex-wrap ">
      <div className=" text-white">
        <h1 className=" text-6xl">
          Get 20% OFF On <br /> Your First Purchase
        </h1>
        <p className="text-base mt-6">
          Sign Up for our newsletter and never miss any offers
        </p>
      </div>
      <div>
        <input
          type="email"
          placeholder="Add Your Email"
          className=" w-[420px] p-3 rounded-lg h-16 block mb-3 outline-none"
        />
    <Buttons> View All Products </Buttons>
      </div>
    </div>
  );
}

export default Offer;
