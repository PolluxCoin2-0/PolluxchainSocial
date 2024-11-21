import React from "react";

const GlowingLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-32 w-32 animate-pulse rounded-full bg-green-500 blur-xl"></div>
        <img
          src="/pollux-logo.png" // Ensure your logo is in the public folder
          alt="PolluxChain Logo"
          className="h-20 w-20"
        />
      </div>
      <p className="mt-4 text-lg text-white">Connecting the World through Decentralization</p>
    </div>
  );
};

export default GlowingLogo;
