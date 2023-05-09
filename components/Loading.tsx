// components/Loading.tsx
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#8B0000] to-[#FFFFAF] min-h-screen text-white flex items-center justify-center">
      <div className="w-16 h-16 border-t-4 border-white rounded-full animate-spin"></div>
      <p className="font-poppins ml-4 text-2xl">Loading...</p>
    </div>
  );
};

export default Loading;
