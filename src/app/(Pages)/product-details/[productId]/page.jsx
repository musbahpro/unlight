"use client";
import ProductDitels from "@/Components/ProductDitels";
import TopSection from "@/Components/TopSection";
import { GetProductsById } from "@/Utils/axiosEx";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

function ProductDetails({ params }) {
  const [singleProduct, setSingleProduct] = useState({});
  const { user } = useUser;
  useEffect(() => {
    GetById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.productId]);

  const GetById = () => {
    GetProductsById(params?.productId).then((res) => {
      setSingleProduct(res.data.data);
    });
  };
  const router = useRouter();
  const handelAddToCart = () => {
    if (!user) {
      router.push("/sing-in");
    }
  };

  return (
    <section>
      <TopSection />
      <div className="grid grid-cols-1  lg:grid-cols-2 lg:gap-8 justify-items-center my-36 container m-auto md:px-36 px-6">
        <Image
          src={singleProduct.attributes?.banar?.data?.attributes?.url}
          alt="dsds"
          width={300}
          height={300}
          className=" "
        />
        <div className=" text-xl font-bold rounded-lg space-y-5">
          <h1 className=" text-4xl ">{singleProduct.attributes?.titel}</h1>
          <h1 className=" italic text-2xl">
            {singleProduct.attributes?.Praice}.00$
          </h1>
          <h1>Category : {singleProduct.attributes?.category}</h1>
          <h1 className=" text-sm text-gray-400">
            Description :
            {singleProduct.attributes?.description[0]?.children[0]?.text}
          </h1>
          <button
            onClick={() => handelAddToCart()}
            className="bg-black font-black w-{350px} mt-6 gap-8 m-auto text-white px-8 py-3 rounded-lg"
          >
            Add to cart <FiShoppingCart className="text-xl inline" />
          </button>
        </div>
      </div>

      <ProductDitels/>
    </section>
  );
}

export default ProductDetails;
