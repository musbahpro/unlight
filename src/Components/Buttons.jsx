import React from "react";

function Buttons({children , center}) {
  return (
    <button 
      className={`bg-black font-black w-{350px} mt-6 ${center} gap-8 m-auto text-white px-8 py-3 rounded-lg`}>
      {children}
    </button>
  );
}

export default Buttons;
