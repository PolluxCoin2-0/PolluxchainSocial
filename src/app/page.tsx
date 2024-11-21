

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
  { href: "https://www.lbank.com/trade/pox_usdt", label: "POX | LBANK", logo: "/lbank.png" },
  { href: "https://www.coinstore.com/#/spot/poxusdt", label: "POX | COINSTORE", logo: "/coinstore.png" },
  { href: "https://coinmarketcap.com/exchanges/koinbx/", label: "POX | KOINBX", logo: "/koinbx.png" },
  { href: "http://uviswap.org/", label: "UVISWAP", logo: "/uvi.png" },
  { href: "https://www.crowd1.club/", label: "CROWD 1", logo: "/crowd1.svg" },
  { href: "https://t.me/PoxMineBot", label: "POXMINE", logo: "/poxtoken.png" },
  { href: "http://uvi.network/", label: "UVIMINE", logo: "/uvitoken.png" },
  { href: "https://onelink.to/dpsz29", label: "POLINK", logo: "/polink.png" },
];

const SocialLinksPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-black">
      {/* Glowing Logo Section */}
      <GlowingLogo />

      {/* Social Links Section (Horizontal icons only) */}
      <div className="mt-8 flex space-x justify-center flex-wrap gap-4 sm:gap-6">
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
            <div className="relative h- w-10 p- border border-transparent rounded-full pl-2">
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
