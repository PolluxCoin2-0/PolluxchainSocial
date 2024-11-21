import React from "react";

const GlowingLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex items-center justify-center">
        <div className="absolute h-20 w-20 animate-pulse rounded-full bg-green-500 blur-xl"></div>
        <img
          src="/logo.png" // Ensure your logo is in the public folder
          alt="PolluxChain Logo"
          className="h-28 w-28"
        />
      </div>
      <p className="mt-10 text-4xl text-white font-bold">Polluxchain</p>
      
    </div>
  );
};

export default GlowingLogo;


// import React from "react";

// const GlowingLogo: React.FC = () => {
//   return (
//     <div className="relative flex items-center justify-center">
//       <div className="h-20 w-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
//       <div className="absolute text-white text-2xl font-bold">Pollux</div>
//     </div>
//   );
// };

// export default GlowingLogo;
