import { Category } from "@/Utils/Date";
import React from "react";
function Categories() {
  return (
    <div className="flex gap-5 container mx-auto my-36">
      {Category.map((item) => (
        <div
          key={item.id}
          className="bg-red-500 w-1/3 h-64 overflow-hidden relative"
        >
          <h1 className=" absolute text-white font-bold  bottom-5 left-5 z-40 text-xl">
            {item.Titel}
          </h1>
          <div
            className="w-full h-full hover:scale-[1.1] transition delay-200 ease-linear"
            style={{ backgroundImage: `url(${item.img})` }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
