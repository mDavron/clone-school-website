import iconMessage from "../../assets/images/footerIcons/message.svg";
import mapIcon from "../../assets/images/footerIcons/map.svg";
import youtube from "../../assets/images/footerIcons/youtube.png";
import instagram from "../../assets/images/footerIcons/instagram.png";
import telegram from "../../assets/images/footerIcons/telegram.png";

export const footerData = {
  items: [
    { icon: iconMessage, text: "cicschool@cambridge.uz" },
    { icon: mapIcon, text: "20-uy, Beltepa, Shayhontohur tumani" },
    { icon: mapIcon, text: "2-uy, Bozorova ko’chasi, Samarqand shahri" },
    {
      icon: mapIcon,
      text: "26 A, Alisher Navoi  ko’chasi, Shayhontohur Tumani",
    },
  ],
  items1: [
    { text: "Branches", href: "branches" },
    { text: "Opportunities", href: "opportunities" },
    { text: "Why CIC School?", href: "school" },
    { text: "Student Portfolio", href: "portfolio" },
    { text: "Partners", href: "partners" },
  ],
  items2: [
    { text: "Home", url: "/" },
    { text: "About us", url: "/about" },
    { text: "Contact us", url: "/contacts" },
    { text: "Apply now", url: "/form" },
  ],
  items3: [{ icon: youtube }, { icon: telegram }, { icon: instagram }],
};
