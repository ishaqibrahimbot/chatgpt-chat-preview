// components/Navbar.tsx
import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-br from-[#8B0000] to-[#FFD700] text-white py-4 px-6 flex justify-between items-center">
      <Link href="/" className="font-poppins text-xl font-bold">
        Share ChatGPT Chat
      </Link>
      <div className="font-poppins">
        <Link
          href="/"
          className="mr-4 hover:text-[#F0F0F0] transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          href="https://chat.openai.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#F0F0F0] transition-colors duration-300"
        >
          Try ChatGPT
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
