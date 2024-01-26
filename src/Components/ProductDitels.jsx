"use client";
import React, { useState } from "react";

function ProductDitels() {
  const [isShow, setIsShow] = useState(true);
  console.log(isShow);
  return (
    <div className=" flex justify-around container m-auto flex-wrap">
      <div className=" flex flex-col space-y-7 transition-all">
        <div
          onClick={() => setIsShow(true)}
          className={`${
            isShow ? "bg-black  text-white py-3 px-6 " : ""
          } cursor-pointer font-bold
`}
        >
          Description
        </div>
        <div
          onClick={() => setIsShow(false)}
          className={`${
            isShow ? "" : "bg-black text-white  py-3 px-6 "
          } cursor-pointer font-bold`}
        >
          Additional Information
        </div>
      </div>
      <div className="w-[600px]">
        {!isShow ? (
          <div>
            <h1 className=" font-black text-3xl mb-6">Product Description</h1>
            <p className=" text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna viverra non, semper suscipit, posuere a,
              pede. Donec nec justo eget felis facilisis fermentum. Aliquam
              porttitor mauris sit amet orci. Aenean dignissim pellentesque
              felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
              consectetuer ligula vulputate sem tristique cursus.
            </p>
            <ul className=" space-y-12 list-disc mb-12 ml-10 font-bold">
              <li className=" my-4 ">Donec nec justo eget felis facilisis fermentum.</li>
              <li className=" my-4">Suspendisse urna viverra non, semper suscipit pede.</li>
              <li className=" my-4">Aliquam porttitor mauris sit amet orci.</li>
            </ul>
          </div>
        ) : (
          <div className=" mb-12">
            <h1 className=" font-black text-3xl mb-6">How To Use The Product</h1>
            <p className=" text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
              odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
              turpis. Suspendisse urna viverra non, semper suscipit, posuere a,
              pede. Donec nec justo eget felis facilisis fermentum. Aliquam
              porttitor mauris sit amet orci. Aenean dignissim pellentesque
              felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
              consectetuer ligula vulputate sem tristique cursus.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDitels;
