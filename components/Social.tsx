import { ReceiptEuro } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaFacebook } from "react-icons/fa";

interface SocialProps{
    containerStyles: string,
    iconStyles: string
}

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedinIn />,
    path: "",
  },
  {
    icon: <FaYoutube />,
    path: "",
  },
  {
    icon: <FaFacebook />,
    path: "",
  },
];

function Social({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;
