// // // import Image from "next/image";
// // // import GlowingLogo from "@/app/components/GlowingLogo"; // Adjust based on your file structure
// // // import SocialLinkButton from "@/app/components/SocialLinkButton"; // Adjust based on your file structure

// // // const socialLinks = [
// // //   { href: "https://twitter.com", label: "Twitter", icon: "/icons/twitter.svg" },
// // //   { href: "https://t.me", label: "Telegram", icon: "/icons/telegram.svg" },
// // //   { href: "https://polluxchain.com", label: "Website", icon: "/icons/website.svg" },
// // //   { href: "https://linkedin.com", label: "LinkedIn", icon: "/icons/linkedin.svg" },
// // //   { href: "https://instagram.com", label: "Instagram", icon: "/icons/instagram.svg" },
// // //   { href: "mailto:contact@polluxchain.com", label: "Contact", icon: "/icons/contact.svg" },
// // // ];

// // // export default function Home() {
// // //   return (
// // //     <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
// // //       {/* Glowing Logo Section */}
// // //       <GlowingLogo />

// // //       {/* Social Links Section */}
// // //       <div className="mt-8">
// // //         {socialLinks.map((link) => (
// // //           <SocialLinkButton
// // //             key={link.label}
// // //             href={link.href}
// // //             icon={link.icon}
// // //             label={link.label}
// // //           />
// // //         ))}
// // //       </div>
      
// // //       {/* Example usage of Next.js Image */}
// // //       <div className="mt-12">
// // //         <Image
// // //           src="/pollux-logo.png" // Path to your image in the public folder
// // //           alt="Pollux Logo"
// // //           width={100}
// // //           height={100}
// // //           className="rounded-full"
// // //         />
// // //         <p className="text-white mt-4">PolluxChain - Connect with Us!</p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // import React from "react";
// // import GlowingLogo from "@/app/components/GlowingLogo";
// // import SocialLinkButton from "@/app/components/SocialLinkButton";
// // import { FaTwitter, FaTelegramPlane, FaGlobe, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

// // const socialLinks = [
// //   { href: "https://twitter.com", label: "Twitter", icon: FaTwitter },
// //   { href: "https://t.me", label: "Telegram", icon: FaTelegramPlane },
// //   { href: "https://polluxchain.com", label: "Website", icon: FaGlobe },
// //   { href: "https://linkedin.com", label: "LinkedIn", icon: FaLinkedin },
// //   { href: "https://instagram.com", label: "Instagram", icon: FaInstagram },
// //   { href: "mailto:contact@polluxchain.com", label: "Contact", icon: FaEnvelope },
// // ];

// // export default function SocialLinksPage() {
// //   return (
// //     <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
// //       {/* Glowing Logo Section */}
// //       <GlowingLogo />

// //       {/* Social Links Section */}
// //       <div className="mt-8">
// //         {socialLinks.map((link) => (
// //           <SocialLinkButton
// //             key={link.label}
// //             href={link.href}
// //             icon={link.icon}
// //             label={link.label}
// //           />
// //         ))}
// //       </div>

// //       {/* Caption Section */}
// //       <div className="mt-12 text-center">
// //         {/* <img
// //           src="/pollux-logo.png"
// //           alt="Pollux Logo"
// //           className="rounded-full w-24 h-24 mx-auto"
// //         /> */}
// //         <p className="text-white mt-4 text-lg">PolluxChain - Connect with Us!</p>
// //       </div>
// //     </div>
// //   );
// // }



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
//       className="flex items-center space-x-6 hover:scale-105 transition-transform duration-300" // Increased gap
//     >
//       {/* Icon Section */}
//       <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white relative overflow-hidden">
//         <div className="absolute inset-0 border-[1px] border-green-500 animate-pulse"></div>
//         <Icon className="h-6 w-6 text-white" /> {/* Smaller icon size */}
//       </div>

//       {/* Label Section */}
//       <div className="flex h-10 items-center justify-center rounded-full px-4 border border-white bg-transparent text-white text-sm font-medium"> {/* Smaller label */}
//         {label}
//       </div>
//     </a>
//   );
// };

// export default SocialLinkButton;



import React from "react";
import GlowingLogo from "@/app/components/GlowingLogo";
import SocialLinkButton from "@/app/components/SocialLinkButton";
import { FaTelegramPlane, FaGlobe, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const socialLinks = [
  { href: "https://x.com/Polluxchain", label: "Twitter", icon: BsTwitterX },
  { href: "https://t.me", label: "Telegram", icon: FaTelegramPlane },
  { href: "https://polluxchain.com", label: "Website", icon: FaGlobe },
  { href: "https://linkedin.com", label: "LinkedIn", icon: FaLinkedin },
  { href: "https://instagram.com", label: "Instagram", icon: FaInstagram },
  { href: "mailto:contact@polluxchain.com", label: "Contact", icon: FaEnvelope },
];

export default function SocialLinksPage() {
  return (
    <div className=" bodyCol min-h-screen flex flex-col items-center justify-center px-4">
      {/* Glowing Logo Section */}
      <GlowingLogo />

      {/* Social Links Section */}
      <div className="mt-8 space-y-4"> {/* Increased gap between buttons */}
        {socialLinks.map((link) => (
          <SocialLinkButton
            key={link.label}
            href={link.href}
            icon={link.icon}
            label={link.label}
          />
        ))}
      </div>

      {/* Caption Section */}
      <div className="mt-12 text-center">
        <p className="text-white mt-4 text-lg">PolluxChain - Connect with Us!</p>
      </div>
    </div>
  );
}
