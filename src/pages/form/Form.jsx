import React from "react";
import styles from "./Form.module.scss";

const Form = () => {
  return (
    <div className={styles.form_wrapper}>
      <h1>Apply Now</h1>
      <form className={styles.form}>
        <h3>Admission Form</h3>
        <input type="text" name="firstName" placeholder="Name" />
        <input type="text" name="lastName" placeholder="LastName" />
        <input type="phone" name="phone" placeholder="mobile" />
        <input type="email" name="email" placeholder="Your Email" />
        <input type="date" placeholder="Date of birth (DD/MM/YYYY)" />

        <select name="Applying School Garde" id="cars">
          <option value="volvo" disabled selected>
            Applying School Garde
          </option>
          <option value="volvo">Navoiy Branch</option>
          <option value="saab">Ibn Sino Branch</option>
          <option value="mercedes">Samarqand Branch</option>
        </select>

        <select name="level" id="cars">
          <option value="volvo" disabled selected>
            English Level
          </option>
          <option value="starter">starter</option>
          <option value="beginner">beginner</option>
          <option value="intermediate">intermediate</option>
          <option value="intermediate">master</option>
        </select>

        <select name="branch" id="cars">
          <option value="volvo" disabled selected>
            Select Branch
          </option>
          <option value="Navoiy">Navoiy Branch</option>
          <option value="Ibn-Sino">Ibn Sino Branch</option>
          <option value="Samarqand">Samarqand Branch</option>
        </select>
        <input type="text" placeholder="Region" />
        <input type="text" placeholder="Adress" />
        <input type="text" placeholder="Parents Full Name" />
        <input type="tel" placeholder="Parents Mobile" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
