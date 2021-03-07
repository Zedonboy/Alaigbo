import React from "react";

export default function Button({children, onClick, className}) {
  return (
    <a
      href=""
      onClick={onClick ?? null}
      className={`bg-purple-900 font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-purple-600 mr-6 ${className}`}
    >
     {children} 
    </a>
  );
};
