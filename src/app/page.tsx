import Image from "next/image";
import GlowingLogo from "@/app/components/GlowingLogo"; // Adjust based on your file structure
import SocialLinkButton from "@/app/components/SocialLinkButton"; // Adjust based on your file structure

const socialLinks = [
  { href: "https://twitter.com", label: "Twitter", icon: "/icons/twitter.svg" },
  { href: "https://t.me", label: "Telegram", icon: "/icons/telegram.svg" },
  { href: "https://polluxchain.com", label: "Website", icon: "/icons/website.svg" },
  { href: "https://linkedin.com", label: "LinkedIn", icon: "/icons/linkedin.svg" },
  { href: "https://instagram.com", label: "Instagram", icon: "/icons/instagram.svg" },
  { href: "mailto:contact@polluxchain.com", label: "Contact", icon: "/icons/contact.svg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
      {/* Glowing Logo Section */}
      <GlowingLogo />

      {/* Social Links Section */}
      <div className="mt-8">
        {socialLinks.map((link) => (
          <SocialLinkButton
            key={link.label}
            href={link.href}
            icon={link.icon}
            label={link.label}
          />
        ))}
      </div>
      
      {/* Example usage of Next.js Image */}
      <div className="mt-12">
        <Image
          src="/pollux-logo.png" // Path to your image in the public folder
          alt="Pollux Logo"
          width={100}
          height={100}
          className="rounded-full"
        />
        <p className="text-white mt-4">PolluxChain - Connect with Us!</p>
      </div>
    </div>
  );
}
