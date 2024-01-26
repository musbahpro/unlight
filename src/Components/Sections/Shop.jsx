"use client";
import { GetLatestProducts } from "@/Utils/axiosEx";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import Buttons from "../Buttons";
import Link from "next/link";

function Shop() {
  const [product, setProduct] = useState([]);
  const GetProdacrs = () => {
    GetLatestProducts().then((res) => {
      setProduct(res.data.data);
    });
  };
  useEffect(() => {
    GetProdacrs();
  }, []);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Product Collection
          </h2>

          <p className="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {product.map((item) => {
            return (
              <Link href={`/product-details/${item.id}`} key={item.id} classNameName="mb-12 ">
                <a href="#" className="group block overflow-hidden rounded-lg" >
                  <Image
                    src={item.attributes?.banar?.data?.attributes?.url}
                    alt=""
                    width={350}
                    height={350}
                    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                  />

                  <div className="relative bg-white pt-3">
                    <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Basic Tee
                    </h3>

                    <p className="mt-2">
                      <span className=" text-black">{item.attributes?.titel}</span>
                      <span className="tracking-wider text-gray-900 ml-12 font-black ">
                        {item.attributes?.Praice}$
                      </span>
                    </p>
                  </div>
                </a>
                <Buttons center={"flex justify-items-center"}>
                  Add To Cart <FiShoppingCart classNameName="text-xl " />
                </Buttons>
              </Link>
            );
          })}
        </ul>
      </div>
      <Buttons> View All Products </Buttons>
    </section>
  );
}

export default Shop;
