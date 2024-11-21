import React from "react";

interface SocialLinkButtonProps {
  href: string;
  icon: string; // Path to icon
  label: string;
}

const SocialLinkButton: React.FC<SocialLinkButtonProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-2 mb-4"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white bg-black relative overflow-hidden">
        <div className="absolute inset-0 border-[1px] border-green-500 animate-pulse"></div>
        <img src={icon} alt={`${label} icon`} className="h-5 w-5" />
      </div>
      <div className="flex h-10 items-center rounded-md bg-gray-100 px-4 font-medium text-black">
        {label}
      </div>
    </a>
  );
};

export default SocialLinkButton;
