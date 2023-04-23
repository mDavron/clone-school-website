import React from "react";
import styles from "./ContactUs.module.scss";
import hero from "./images/hero1.jpg";
import call from "./images/call.svg";
import marker from "./images/map3.svg";
import message from "./images/message.svg";

const details = [
  { icon: call, title: "Call", text: "+998 71 200 0308" },
  { icon: message, title: "Email", text: "cicschool@cambridge.uz" },
  {
    icon: marker,
    title: "Adress",
    text: "Kh. Rakhmatullaev \n st.3  Shayhontohur, Tashkent",
  },
];
const ContactUs = () => {
  return (
    <div className={styles.contacts}>
      <img src={hero} alt="" />
      <div className={styles.contact_us}>
        <div className="container">
          <div className={styles.items}>
            {details.map((value, i) => {
              return (
                <div key={i} className={styles.item}>
                  <div className={styles.bgIcon}>
                    <img
                      className={styles.item_icon}
                      src={value.icon}
                      alt="kk"
                    />
                  </div>
                  <div className={styles.item_details}>
                    <h4 className={styles.details_title}>{value.title}</h4>
                    <p>{value.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
