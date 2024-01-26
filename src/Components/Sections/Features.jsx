import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BsAwardFill, BsBoxSeamFill, BsCSquareFill } from "react-icons/bs";
function Features() {
  const Categoryes = [
    {
      id: 1,
      titel: "Free Delivery",
      disc: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
      icon: <TbTruckDelivery />,
    },
    {
      id: 2,
      titel: "100% Secure Payment",
      disc: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
      icon: <BsCSquareFill />,
    },
    {
      id: 3,
      titel: "Quality Guarantee",
      disc: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
      icon: <BsAwardFill />,
    },
    {
      id: 4,
      titel: "Daily Offer",
      disc: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
      icon: <BsBoxSeamFill />,
    },
  ];
  return (
    <div className=" container m-auto py-36 flex justify-between flex-wrap">
      {Categoryes.map((item) => {
        return (
          <div key={item.id}>
            <i className=" text-3xl">{item.icon}</i>
            <h1 className=" font-medium mt-6 mb-2 text-2xl">{item.titel}</h1>
            <p className=" text-gray-400 text-sm">{item.disc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Features;
