import React from "react";

export default function TopSection({ Titel }) {
  return (
    <div
      className="w-full h-[450px] text-6xl  font-bold relative -z-40 "
      style={{ backgroundImage: "url('/banner-img2.jpg')" }}
    >
      <div className="absolute left-32 bottom-32">
        <span className="text-center pb-6">
        Shop Product
        </span>
      </div>

      
    </div>
  );
}
