import iconMessage from "./footerImages/message.svg";
import mapIcon from "./footerImages/map.svg";
import youtube from "./footerImages/youtube.png";
import instagram from "./footerImages/instagram.png";
import telegram from "./footerImages/telegram.png";

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
    { text: "Branches" },
    { text: "Opportunities" },
    { text: "Why CIC School?" },
    { text: "Student Portfolio" },
    { text: "Partners" },
  ],
  items2: [
    { text: "Home" },
    { text: "About us" },
    { text: "Contact us" },
    { text: "Apply now" },
  ],
  items3: [{ icon: youtube }, { icon: telegram }, { icon: instagram }],
};
