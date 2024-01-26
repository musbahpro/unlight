import Categoryes from "@/Components/Sections/Categoryes";
import Features from "@/Components/Sections/Features";
import Offer from "@/Components/Sections/Offer";
import Shop from "@/Components/Sections/Shop";
import { FaLongArrowAltRight } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <header className="Home h-screen flex items-center md:pl-64">
        <div className=" bg-black md:w-[550px] text-white h-[470px] p-12 text-center">
          <h1 className=" md:text-9xl text-8xl font-black ">STREET WEARS</h1>
          <p className="text-lg">
            HIGH QUALITY COOL TSHIRTS FOR STREET FASHION
          </p>
          <button className="mt-12 border-2 px-16 rounded-full py-3 text-xl hover:bg-white hover:text-black transition-opacity">
            Start Shopping <FaLongArrowAltRight className="ml-3 inline" />
          </button>
        </div>
      </header>
      <Features/>
      <Shop />
      <Categoryes />
      <Offer />
    </>
  );
}
