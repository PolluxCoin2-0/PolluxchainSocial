

// // import React from "react";
// // import { IconType } from "react-icons";

// // interface SocialLinkButtonProps {
// //   href: string;
// //   icon: IconType; // React Icons
// //   label: string;
// // }

// // const SocialLinkButton: React.FC<SocialLinkButtonProps> = ({ href, icon: Icon, label }) => {
// //   return (
// //     <a
// //       href={href}
// //       target="_blank"
// //       rel="noopener noreferrer"
// //       className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300"
// //     >
// //       {/* Icon Section */}
// //       <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white relative overflow-hidden">
// //         <div className="absolute inset-0 border-[1px] border-green-500 animate-pulse"></div>
// //         <Icon className="h-6 w-6 text-white" />
// //       </div>

// //       {/* Label Section */}
// //       <div className="flex h-12 items-center rounded-full px-6 border border-white bg-transparent text-white text-sm font-medium">
// //         {label}
// //       </div>
// //     </a>
// //   );
// // };

// // export default SocialLinkButton;


// import React from "react";
// import { IconType } from "react-icons";

// interface SocialLinkButtonProps {
//   href: string;
//   icon: IconType; // React Icons
//   label: string;
// }

// const SocialLinkButton: React.FC<SocialLinkButtonProps> = ({ href, icon: Icon, label }) => {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="flex items-center space-x-4 hover:scale-105 transition-transform duration-300"
//     >
//       {/* Icon Section */}
//       <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white relative overflow-hidden">
//         <div className="absolute inset-0 border-[1px"></div>
//         <Icon className="h-6 w-6 text-white" />
//       </div>

//       {/* Label Section */}
//       <div className="flex h-12 w-48 items-center justify-center rounded-full border border-white bg-transparent text-white text-base font-semibold">
//         {label}
//       </div>
//     </a>
//   );
// };

// export default SocialLinkButton;

import React from "react";

interface SocialLinkButtonProps {
  href: string;
  logo: string; // Product Logo URL
}

const SocialLinkButton: React.FC<SocialLinkButtonProps> = ({ href, logo }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center space-x-4 hover:scale-105 transition-transform duration-300"
    >
      {/* Logo Section */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white relative overflow-hidden">
        <img src={logo} alt="Product Logo" className="h-8 w-8 object-cover" />
      </div>
    </a>
  );
};

export default SocialLinkButton;

