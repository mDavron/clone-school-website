import React from "react";
import styles from "./Form.module.scss";

const Form = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.form_wrapper}>
      <h1>Apply Now</h1>
      <form className={styles.form}>
        <h3>Admission Form</h3>
        <input type="text" name="fullName" placeholder="fullName" />
        <input type="text" name="lastName" placeholder="LastName" />
        <input type="phone" name="phone" placeholder="mobile" />
        <input type="email" name="email" placeholder="Your Email" />
        <input
          type="date"
          name="date"
          placeholder="Date of birth (DD/MM/YYYY)"
        />

        <select name="Applying" id="cars">
          <option value="Applying School Garde" disabled selected>
            Applying School Garde
          </option>
          <option value="Navoiy Branch">Navoiy Branch</option>
          <option value="Ibn Sino Branch">Ibn Sino Branch</option>
          <option value="Samarqand Branch">Samarqand Branch</option>
        </select>

        <select name="level" id="level">
          <option value="English Level" disabled selected>
            English Level
          </option>
          <option value="starter">starter</option>
          <option value="beginner">beginner</option>
          <option value="intermediate">intermediate</option>
          <option value="intermediate">master</option>
        </select>

        <select name="branch" id="branch">
          <option value="Select Branch" disabled selected>
            Select Branch
          </option>
          <option value="Navoiy Branch">Navoiy Branch</option>
          <option value="Ibn-Sino Branch">Ibn Sino Branch</option>
          <option value="Samarqand Branch">Samarqand Branch</option>
        </select>
        <input type="text" name="Region" placeholder="Region" />
        <input type="text" name="Adress" placeholder="Adress" />
        <input
          type="text"
          name="Parents Full Name"
          placeholder="Parents Full Name"
        />
        <input type="tel" name="Parents Mobile" placeholder="Parents Mobile" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
