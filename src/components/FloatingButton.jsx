// components/FloatingButton.js
import React from "react";
import { BsDiscord, BsTelegram } from "react-icons/bs";

const FloatingButton = () => {
 

  return (
    <button
      
      className="z-50 fixed bottom-5 right-5 bg-purple-600 hover:bg-purple-700 text-white w-14 h-14 rounded-full shadow-2xl shadow-gray-500 flex justify-center items-center transition-transform transform hover:scale-110"
    >
    <a target="_blank" href="https://discord.gg/EejJwhAG">
    <BsDiscord className="text-2xl z-50" />
    </a>
    </button>
  );
};

export default FloatingButton;
