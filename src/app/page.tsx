// // // // // // // // // import Image from "next/image";
// // // // // // // // // import GlowingLogo from "@/app/components/GlowingLogo"; // Adjust based on your file structure
// // // // // // // // // import SocialLinkButton from "@/app/components/SocialLinkButton"; // Adjust based on your file structure

// // // // // // // // // const socialLinks = [
// // // // // // // // //   { href: "https://twitter.com", label: "Twitter", icon: "/icons/twitter.svg" },
// // // // // // // // //   { href: "https://t.me", label: "Telegram", icon: "/icons/telegram.svg" },
// // // // // // // // //   { href: "https://polluxchain.com", label: "Website", icon: "/icons/website.svg" },
// // // // // // // // //   { href: "https://linkedin.com", label: "LinkedIn", icon: "/icons/linkedin.svg" },
// // // // // // // // //   { href: "https://instagram.com", label: "Instagram", icon: "/icons/instagram.svg" },
// // // // // // // // //   { href: "mailto:contact@polluxchain.com", label: "Contact", icon: "/icons/contact.svg" },
// // // // // // // // // ];

// // // // // // // // // export default function Home() {
// // // // // // // // //   return (
// // // // // // // // //     <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
// // // // // // // // //       {/* Glowing Logo Section */}
// // // // // // // // //       <GlowingLogo />

// // // // // // // // //       {/* Social Links Section */}
// // // // // // // // //       <div className="mt-8">
// // // // // // // // //         {socialLinks.map((link) => (
// // // // // // // // //           <SocialLinkButton
// // // // // // // // //             key={link.label}
// // // // // // // // //             href={link.href}
// // // // // // // // //             icon={link.icon}
// // // // // // // // //             label={link.label}
// // // // // // // // //           />
// // // // // // // // //         ))}
// // // // // // // // //       </div>
      
// // // // // // // // //       {/* Example usage of Next.js Image */}
// // // // // // // // //       <div className="mt-12">
// // // // // // // // //         <Image
// // // // // // // // //           src="/pollux-logo.png" // Path to your image in the public folder
// // // // // // // // //           alt="Pollux Logo"
// // // // // // // // //           width={100}
// // // // // // // // //           height={100}
// // // // // // // // //           className="rounded-full"
// // // // // // // // //         />
// // // // // // // // //         <p className="text-white mt-4">PolluxChain - Connect with Us!</p>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // }

// // // // // // // // import React from "react";
// // // // // // // // import GlowingLogo from "@/app/components/GlowingLogo";
// // // // // // // // import SocialLinkButton from "@/app/components/SocialLinkButton";
// // // // // // // // import { FaTwitter, FaTelegramPlane, FaGlobe, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

// // // // // // // // const socialLinks = [
// // // // // // // //   { href: "https://twitter.com", label: "Twitter", icon: FaTwitter },
// // // // // // // //   { href: "https://t.me", label: "Telegram", icon: FaTelegramPlane },
// // // // // // // //   { href: "https://polluxchain.com", label: "Website", icon: FaGlobe },
// // // // // // // //   { href: "https://linkedin.com", label: "LinkedIn", icon: FaLinkedin },
// // // // // // // //   { href: "https://instagram.com", label: "Instagram", icon: FaInstagram },
// // // // // // // //   { href: "mailto:contact@polluxchain.com", label: "Contact", icon: FaEnvelope },
// // // // // // // // ];

// // // // // // // // export default function SocialLinksPage() {
// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
// // // // // // // //       {/* Glowing Logo Section */}
// // // // // // // //       <GlowingLogo />

// // // // // // // //       {/* Social Links Section */}
// // // // // // // //       <div className="mt-8">
// // // // // // // //         {socialLinks.map((link) => (
// // // // // // // //           <SocialLinkButton
// // // // // // // //             key={link.label}
// // // // // // // //             href={link.href}
// // // // // // // //             icon={link.icon}
// // // // // // // //             label={link.label}
// // // // // // // //           />
// // // // // // // //         ))}
// // // // // // // //       </div>

// // // // // // // //       {/* Caption Section */}
// // // // // // // //       <div className="mt-12 text-center">
// // // // // // // //         {/* <img
// // // // // // // //           src="/pollux-logo.png"
// // // // // // // //           alt="Pollux Logo"
// // // // // // // //           className="rounded-full w-24 h-24 mx-auto"
// // // // // // // //         /> */}
// // // // // // // //         <p className="text-white mt-4 text-lg">PolluxChain - Connect with Us!</p>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }



// // // // // // // import React from "react";
// // // // // // // import { IconType } from "react-icons";

// // // // // // // interface SocialLinkButtonProps {
// // // // // // //   href: string;
// // // // // // //   icon: IconType; // React Icons
// // // // // // //   label: string;
// // // // // // // }

// // // // // // // const SocialLinkButton: React.FC<SocialLinkButtonProps> = ({ href, icon: Icon, label }) => {
// // // // // // //   return (
// // // // // // //     <a
// // // // // // //       href={href}
// // // // // // //       target="_blank"
// // // // // // //       rel="noopener noreferrer"
// // // // // // //       className="flex items-center space-x-6 hover:scale-105 transition-transform duration-300" // Increased gap
// // // // // // //     >
// // // // // // //       {/* Icon Section */}
// // // // // // //       <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white relative overflow-hidden">
// // // // // // //         <div className="absolute inset-0 border-[1px] border-green-500 animate-pulse"></div>
// // // // // // //         <Icon className="h-6 w-6 text-white" /> {/* Smaller icon size */}
// // // // // // //       </div>

// // // // // // //       {/* Label Section */}
// // // // // // //       <div className="flex h-10 items-center justify-center rounded-full px-4 border border-white bg-transparent text-white text-sm font-medium"> {/* Smaller label */}
// // // // // // //         {label}
// // // // // // //       </div>
// // // // // // //     </a>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default SocialLinkButton;



// // // // // // import React from "react";
// // // // // // import GlowingLogo from "@/app/components/GlowingLogo";
// // // // // // import SocialLinkButton from "@/app/components/SocialLinkButton";
// // // // // // import { FaTelegramPlane, FaGlobe, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
// // // // // // import { BsTwitterX } from "react-icons/bs";

// // // // // // const socialLinks = [
// // // // // //   { href: "https://x.com/Polluxchain", label: "Twitter", icon: BsTwitterX },
// // // // // //   { href: "https://t.me/polluxchainDAO", label: "Telegram", icon: FaTelegramPlane },
// // // // // //   { href: "https://polluxchain.com", label: "Website", icon: FaGlobe },
// // // // // //   { href: "https://www.linkedin.com/company/polluxchain/", label: "LinkedIn", icon: FaLinkedin },
// // // // // //   { href: "https://www.instagram.com/polluxchainofficial/", label: "Instagram", icon: FaInstagram },
// // // // // //   { href: "mailto:priyanshu@poxscan.io", label: "Contact", icon: FaEnvelope },
// // // // // // ];

// // // // // // export default function SocialLinksPage() {
// // // // // //   return (
// // // // // //     <div className=" bodyCol min-h-screen flex flex-col items-center justify-center px-4">
// // // // // //       {/* Glowing Logo Section */}
// // // // // //       <GlowingLogo />

// // // // // //       {/* Social Links Section */}
// // // // // //       <div className="mt-8 space-y-4"> {/* Increased gap between buttons */}
// // // // // //         {socialLinks.map((link) => (
// // // // // //           <SocialLinkButton
// // // // // //             key={link.label}
// // // // // //             href={link.href}
// // // // // //             icon={link.icon}
// // // // // //             label={link.label}
// // // // // //           />
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {/* Caption Section */}
// // // // // //       <div className="mt-12 text-center">
// // // // // //         <p className="text-white mt-4 text-lg">PolluxChain - Connect with Us!</p>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import React from "react";
// // // // // import GlowingLogo from "@/app/components/GlowingLogo";
// // // // // import SocialLinkButton from "@/app/components/SocialLinkButton";

// // // // // // Replace product logos and links here
// // // // // const socialLinks = [
// // // // //   { href: "https://product1.com", logo: "/product1-logo.png" },
// // // // //   { href: "https://product2.com", logo: "/product2-logo.png" },
// // // // //   { href: "https://product3.com", logo: "/product3-logo.png" },
// // // // //   // Add more products as needed
// // // // // ];

// // // // // export default function SocialLinksPage() {
// // // // //   return (
// // // // //     <div className=" bg-black min-h-screen flex flex-col items-center justify-center px-4">
// // // // //       {/* Glowing Logo Section */}
// // // // //       <GlowingLogo />

// // // // //       {/* Social Links Section */}
// // // // //       <div className="mt-8 space-x-4 flex"> {/* Horizontal arrangement */}
// // // // //         {socialLinks.map((link) => (
// // // // //           <SocialLinkButton
// // // // //             key={link.href}
// // // // //             href={link.href}
// // // // //             logo={link.logo}
// // // // //           />
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Caption Section */}
// // // // //       <div className="mt-12 text-center">
// // // // //         <p className="text-white mt-4 text-lg">PolluxChain - Connect with Us!</p>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import React from "react";
// // // // import GlowingLogo from "@/app/components/GlowingLogo";
// // // // // import SocialLinkButton from "@/app/components/SocialLinkButton";
// // // // import { FaTelegramPlane, FaGlobe, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
// // // // import { BsTwitterX } from "react-icons/bs";
// // // // import Image from "next/image";




// // // // // Social links with just icons
// // // // const socialLinks = [
// // // //   { href: "https://x.com/Polluxchain", icon: BsTwitterX },
// // // //   { href: "https://t.me/polluxchainDAO", icon: FaTelegramPlane },
// // // //   { href: "https://polluxchain.com", icon: FaGlobe },
// // // //   { href: "https://www.linkedin.com/company/polluxchain/", icon: FaLinkedin },
// // // //   { href: "https://www.instagram.com/polluxchainofficial/", icon: FaInstagram },
// // // //   { href: "mailto:priyanshu@poxscan.io", icon: FaEnvelope },
// // // // ];

// // // // // Product links with logos
// // // // const productLinks = [
// // // //   { href: "https://product1.com", label: "Product 1", logo: "/logo.png" },
// // // //   { href: "https://product2.com", label: "Product 2", logo: "/logo.png" },
// // // //   { href: "https://product3.com", label: "Product 3", logo: "/logo.png" },
// // // //   { href: "https://product4.com", label: "Product 4", logo: "/logo.png" },
// // // //   { href: "https://product5.com", label: "Product 5", logo: "/logo.png" },
// // // // ];

// // // // export default function SocialLinksPage() {
// // // //   return (
// // // //     <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-black"> {/* Add bg-black */}
// // // //       {/* Glowing Logo Section */}
// // // //       <GlowingLogo />

// // // //       {/* Social Links Section (Horizontal icons only) */}
// // // //       <div className="mt-8 space-x-4 flex"> {/* Horizontal arrangement */}
// // // //         {socialLinks.map((link) => (
// // // //           <a
// // // //             key={link.href}
// // // //             href={link.href}
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //             className="flex items-center justify-center h-12 w-12 rounded-full border border-white p-2 hover:scale-110 transition-transform duration-300"
// // // //           >
// // // //             <link.icon className="text-white h-8 w-8" />
// // // //           </a>
// // // //         ))}
// // // //       </div>

// // // //       {/* Product Buttons Section */}
// // // //       <div className="mt-8 space-y-4"> 
// // // //         {productLinks.map((link) => (
// // // //           <a
// // // //             key={link.href}
// // // //             href={link.href}
// // // //             target="_blank"
// // // //             rel="noopener noreferrer"
// // // //             className="flex items-center justify-start w-64 h-12 border border-white rounded-full bg-transparent text-white font-semibold hover:bg-green-500 transition duration-300"
// // // //           >
// // // //             {/* <img src={link.logo} alt={`${link.label} logo`} className="h-8 w-8 mr-8" /> */}
// // // //             <div className="relative h-8 w-8 mr-8"> {/* Set relative for the Image container */}
// // // //         <Image
// // // //           src={link.logo}
// // // //           alt={`${link.label} logo`}
// // // //           layout="fill"  // This ensures the image takes the size of the container
// // // //           objectFit="contain" // Ensures the image fits well without stretching
// // // //           className="rounded-full" // You can add rounded-full here to make the logo circular
// // // //         />
// // // //       </div>
          
// // // //             <span>{link.label}</span>
// // // //           </a>
// // // //         ))}
// // // //       </div>

// // // //       {/* Caption Section */}
// // // //       <div className="mt-12 text-center">
// // // //         <p className="text-white mt-4 text-lg">PolluxChain - Connect with Us!</p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import React from "react";
// // // import GlowingLogo from "@/app/components/GlowingLogo";
// // // import { FaTelegramPlane, FaGlobe, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
// // // import { BsTwitterX } from "react-icons/bs";
// // // import Image from "next/image";

// // // // Social links with just icons
// // // const socialLinks = [
// // //   { href: "https://x.com/Polluxchain", icon: BsTwitterX },
// // //   { href: "https://t.me/polluxchainDAO", icon: FaTelegramPlane },
// // //   { href: "https://polluxchain.com", icon: FaGlobe },
// // //   { href: "https://www.linkedin.com/company/polluxchain/", icon: FaLinkedin },
// // //   { href: "https://www.instagram.com/polluxchainofficial/", icon: FaInstagram },
// // //   { href: "mailto:priyanshu@poxscan.io", icon: FaEnvelope },
// // // ];

// // // // Product links with logos
// // // const productLinks = [
// // //   { href: "https://product1.com", label: "Product 1", logo: "/logo.png" },
// // //   { href: "https://product2.com", label: "Product 2", logo: "/logo.png" },
// // //   { href: "https://product3.com", label: "Product 3", logo: "/logo.png" },
// // //   { href: "https://product4.com", label: "Product 4", logo: "/logo.png" },
// // //   { href: "https://product5.com", label: "Product 5", logo: "/logo.png" },
// // // ];

// // // export default function SocialLinksPage() {
// // //   return (
// // //     <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-black">
// // //       {/* Glowing Logo Section */}
// // //       <GlowingLogo />

// // //       {/* Social Links Section (Horizontal icons only) */}
// // //       <div className="mt-8 flex space-x-4 justify-center flex-wrap"> {/* Horizontal arrangement with wrap */}
// // //         {socialLinks.map((link) => (
// // //           <a
// // //             key={link.href}
// // //             href={link.href}
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="flex items-center justify-center h-12 w-12 rounded-full border border-white p-2 hover:scale-110 transition-transform duration-300"
// // //           >
// // //             <link.icon className="text-white h-8 w-8" />
// // //           </a>
// // //         ))}
// // //       </div>

// // //       {/* Product Buttons Section */}
// // //       <div className="mt-8 space-y-4 w-full sm:w-auto">
// // //         {productLinks.map((link) => (
// // //           <a
// // //             key={link.href}
// // //             href={link.href}
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="flex items-center justify-start w-full sm:w-64 h-12 border border-white rounded-full bg-transparent text-white font-semibold hover:bg-green-500 transition duration-300"
// // //           >
// // //             {/* Image with rounded logo */}
// // //             <div className="relative h-8 w-8 mr-8">
// // //               <Image
// // //                 src={link.logo}
// // //                 alt={`${link.label} logo`}
// // //                 layout="fill" // Ensures image fills the container
// // //                 objectFit="contain"
// // //                 className="rounded-full"
// // //               />
// // //             </div>
// // //             <span>{link.label}</span>
// // //           </a>
// // //         ))}
// // //       </div>

// // //       {/* Caption Section */}
// // //       <div className="mt-12 text-center">
// // //         <p className="text-white mt-4 text-lg">PolluxChain - Connect with Us!</p>
// // //       </div>
// // //     </div>
// // //   );
// // // }




// // import React from "react";
// // import GlowingLogo from "@/app/components/GlowingLogo";
// // import { FaTelegramPlane, FaGlobe, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
// // import { BsTwitterX } from "react-icons/bs";
// // import Image from "next/image";

// // // Social links with just icons
// // const socialLinks = [
// //   { href: "https://x.com/Polluxchain", icon: BsTwitterX },
// //   { href: "https://t.me/polluxchainDAO", icon: FaTelegramPlane },
// //   { href: "https://polluxchain.com", icon: FaGlobe },
// //   { href: "https://www.linkedin.com/company/polluxchain/", icon: FaLinkedin },
// //   { href: "https://www.instagram.com/polluxchainofficial/", icon: FaInstagram },
// //   { href: "mailto:priyanshu@poxscan.io", icon: FaEnvelope },
// // ];

// // // Product links with logos
// // const productLinks = [
// //   { href: "https://product1.com", label: "Producegtet 1", logo: "/logo.png" },
// //   { href: "https://product2.com", label: "Producgegt 2", logo: "/logo.png" },
// //   { href: "https://product3.com", label: "Productgeee 3", logo: "/logo.png" },
// //   { href: "https://product4.com", label: "Produgct 4", logo: "/logo.png" },
// //   { href: "https://product5.com", label: "Product 5", logo: "/logo.png" },
// // ];

// // const SocialLinksPage = () => {
// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-black">
// //       {/* Glowing Logo Section */}
// //       <GlowingLogo />

// //       {/* Social Links Section (Horizontal icons only) */}
// //       <div className="mt-8 flex space-x-2 justify-center flex-wrap gap-4 sm:gap-6">
// //         {socialLinks.map((link) => (
// //           <a
// //             key={link.href}
// //             href={link.href}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="flex items-center justify-center h-12 w-12 rounded-full border border-white p-2 hover:scale-110 transition-transform duration-300"
// //           >
// //             <link.icon className="text-white h-8 w-8" />
// //           </a>
// //         ))}
// //       </div>

// //       {/* Product Buttons Section */}
// //       <div className="mt-8 space-y-4 w-full sm:w-auto">
// //         {productLinks.map((link) => (
// //           <a
// //             key={link.href}
// //             href={link.href}
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="flex items-center justify-center space-x-8  w-full sm:w-64 h-12 border border-white rounded-full bg-transparent text-white font-semibold hover:bg-green-500 transition duration-300"
// //           >
        
// //               <Image
// //                 src={link.logo}
// //                 alt={`${link.label} logo`}
// //                 width={0}
// //                 height={0}
// //                 objectFit="contain"
// //                 className="rounded-full relative h-8 w-8"
// //               />
         
// //             <span>{link.label}</span>
// //           </a>
// //         ))}
// //       </div>

// //       {/* Caption Section */}
// //       <div className="mt-12 text-center">
// //         <p className="text-white mt-4 text-lg">PolluxChain - Connect with Us!</p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SocialLinksPage;


// import React from "react";
// import GlowingLogo from "@/app/components/GlowingLogo";
// import { FaTelegramPlane, FaGlobe, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
// import Image from "next/image";

// // Social links with just icons
// const socialLinks = [
//   { href: "https://x.com/Polluxchain", icon: BsTwitterX },
//   { href: "https://t.me/polluxchainDAO", icon: FaTelegramPlane },
//   { href: "https://polluxchain.com", icon: FaGlobe },
//   { href: "https://www.linkedin.com/company/polluxchain/", icon: FaLinkedin },
//   { href: "https://www.instagram.com/polluxchainofficial/", icon: FaInstagram },
//   { href: "mailto:priyanshu@poxscan.io", icon: FaEnvelope },
// ];

// // Product links with logos
// const productLinks = [
//   { href: "https://product1.com", label: "Product 1", logo: "/logo.png" },
//   { href: "https://product2.com", label: "Product 2", logo: "/logo.png" },
//   { href: "https://product3.com", label: "Product 3", logo: "/logo.png" },
//   { href: "https://product4.com", label: "Product 4", logo: "/logo.png" },
//   { href: "https://product5.com", label: "Product 5", logo: "/logo.png" },
// ];

// const SocialLinksPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-black">
//       {/* Glowing Logo Section */}
//       <GlowingLogo />

//       {/* Social Links Section (Horizontal icons only) */}
//       <div className="mt-8 flex space-x-2 justify-center flex-wrap gap-4 sm:gap-6">
//         {socialLinks.map((link) => (
//           <a
//             key={link.href}
//             href={link.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center h-12 w-12 rounded-full border border-white p-2 hover:scale-110 transition-transform duration-300"
//           >
//             <link.icon className="text-white h-8 w-8" />
//           </a>
//         ))}
//       </div>

//       {/* Product Buttons Section */}
//       <div className="mt-8 space-y-4 w-full sm:w-auto">
//         {productLinks.map((link) => (
//           <a
//             key={link.href}
//             href={link.href}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-start space-x-4 w-full sm:w-64 h-12 border border-white rounded-full bg-transparent text-white font-semibold hover:bg-green-500 transition duration-300"
//           >
//             {/* Logo Image on the left */}
//             <div className="relative h-8 w-8 p-1 border border-transparent rounded-full">
//               <Image
//                 src={link.logo}
//                 alt={`${link.label} logo`}
//                 width={32}
//                 height={32}
//                 objectFit="contain"
//                 className="rounded-full"
//               />
//             </div>

//             {/* Product label text */}
//             <span className="text-sm sm:text-base">{link.label}</span>
//           </a>
//         ))}
//       </div>

//       {/* Caption Section */}
//       <div className="mt-12 text-center">
//         <p className="text-white mt-4 text-lg">PolluxChain - Connect with Us!</p>
//       </div>
//     </div>
//   );
// };

// export default SocialLinksPage;

import React from "react";
import GlowingLogo from "@/app/components/GlowingLogo";
import { FaTelegramPlane, FaGlobe, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";

// Social links with just icons
const socialLinks = [
  { href: "https://x.com/Polluxchain", icon: BsTwitterX },
  { href: "https://t.me/polluxchainDAO", icon: FaTelegramPlane },
  { href: "https://polluxchain.com", icon: FaGlobe },
  { href: "https://www.linkedin.com/company/polluxchain/", icon: FaLinkedin },
  { href: "https://www.instagram.com/polluxchainofficial/", icon: FaInstagram },
  { href: "mailto:priyanshu@poxscan.io", icon: FaEnvelope },
];

// Product links with logos
const productLinks = [
  { href: "https://product1.com", label: "Produfdfdct 1", logo: "/logo.png" },
  { href: "https://product2.com", label: "Proddfgdfguct 2", logo: "/logo.png" },
  { href: "https://product3.com", label: "Prodfgfduct 3", logo: "/logo.png" },
  { href: "https://product4.com", label: "Produdfgct 4", logo: "/logo.png" },
  { href: "https://product5.com", label: "Producfgfdt 5", logo: "/logo.png" },
];

const SocialLinksPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-black">
      {/* Glowing Logo Section */}
      <GlowingLogo />

      {/* Social Links Section (Horizontal icons only) */}
      <div className="mt-8 flex space-x-6 justify-center flex-wrap gap-4 sm:gap-6">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-12 w-12 rounded-full border border-white p-2 hover:scale-110 transition-transform duration-300"
          >
            <link.icon className="text-white h-8 w-8" />
          </a>
        ))}
      </div>

      {/* Product Buttons Section */}
      <div className="mt-8 space-y-6 w-full sm:w-auto">
        {productLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-start space-x-6 w-full sm:w-64 h-12 border border-white rounded-full bg-transparent text-white font-semibold hover:bg-green-500 transition duration-300 hover:scale-105"
          >
            {/* Logo Image on the left with left padding */}
            <div className="relative h-8 w-8 p- border border-transparent rounded-full pl-2">
              <Image
                src={link.logo}
                alt={`${link.label} logo`}
                width={32}
                height={32}
                objectFit="contain"
                className="rounded-full"
              />
            </div>

            {/* Product label text */}
            <span className="text-sm sm:text-base">{link.label}</span>
          </a>
        ))}
      </div>

      {/* Caption Section */}
      <div className="mt-12 text-center">
        <p className="text-white mt-4 text-lg">PolluxChain - Connect with Us!</p>
      </div>
    </div>
  );
};

export default SocialLinksPage;
