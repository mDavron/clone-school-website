import React from "react";
import styles from "./ContactUs.module.scss";
import hero from "./images/hero1.jpg";
import call from "./images/call.svg";
import marker from "./images/map3.svg";
import message from "./images/message.svg";
import MyMapComponent from "../../components/map/MapComponent";

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
                <MyMapComponent
                  center={[41.323462, 69.248894]}
                  geometry={[41.323462, 69.248894]}
                />
              </div>
            </div>

            <div className={styles.cardWrap}>
              <h3>Ibn Sino Branch</h3>
              <div className={styles.card}>
                <MyMapComponent
                  center={[41.342676, 69.167617]}
                  geometry={[41.342676, 69.167617]}
                />
              </div>
            </div>

            <div className={styles.cardWrap}>
              <h3>Samarkand Branch</h3>
              <div className={styles.card}>
                <MyMapComponent
                  center={[39.660315, 66.93228]}
                  geometry={[39.660315, 66.93228]}
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
