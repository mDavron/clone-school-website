import React from "react";
import styles from "./ContactUs.module.scss";
import hero from "./images/hero1.jpg";
import call from "./images/call.svg";
import marker from "./images/map3.svg";
import message from "./images/message.svg";
// import MyMapComponent from "../../components/map/MapComponent";

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
      <section className={styles.mapWrapper}>
        <div className={styles.mapContainer}>
          <div className={styles.mapInner}>
            <div className={styles.cardWrap}>
              <h3>A. Navoi Branch</h3>
              <div className={styles.card}>
                <iframe
                  title="myFrame"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.355597924382!2d69.24616107599188!3d41.3228802713082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b836036bc91%3A0x255be3914708e1e5!2sCambridge%20International%20College%20(CIC%20School)%20-%20Main%20Campus!5e0!3m2!1suz!2s!4v1682436904978!5m2!1suz!2s"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className={styles.cardWrap}>
              <h3>Ibn Sino Branch</h3>
              <div className={styles.card}>
                <iframe
                  title="myFram"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.460775108307!2d69.16481567599281!3d41.34233747130568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8fff2d0e050b%3A0xfab516e979fb6055!2sCambridge%20CIC%20School%20Ibn%20Sino%20Branch!5e0!3m2!1suz!2s!4v1682437376507!5m2!1suz!2s"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className={styles.cardWrap}>
              <h3>Samarkand Branch</h3>
              <div className={styles.card}>
                <iframe
                  title="myFra"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.512622991405!2d66.94449307590769!3d39.66068187157122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d1997bb37c931%3A0xa398b011c923c3f2!2sSAMARKAND%20Cambridge%20CIC%20School!5e0!3m2!1suz!2s!4v1682437562226!5m2!1suz!2s"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
