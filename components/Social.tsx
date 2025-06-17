import { ReceiptEuro } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaFacebook, FaTiktok } from "react-icons/fa";

interface SocialProps{
    containerStyles: string,
    iconStyles: string
}

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/ThanhThn",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/thanh-l%C3%AA-ho%C3%A0ng-qu%E1%BB%91c-ba8b88244/",
  },
  {
    icon: <FaTiktok />,
    path: "https://www.tiktok.com/@thann1809",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/lehoangquocthan",
  },
];

function Social({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;
