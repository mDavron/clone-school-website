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
        <input type="text" name="fullName" placeholder="Full Name" required />

        <input type="text" name="lastName" placeholder="Last Name" required />
        <input type="phone" name="phone" placeholder="mobile" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input
          type="date"
          name="date"
          placeholder="Date of birth (DD/MM/YYYY)"
          required
        />
        <select name="Applying" id="cars">
          <option value="Applying School Grade" disabled selected>
            Applying School Grade
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
          <option value="advanced">advanced</option>
        </select>
        <select name="branch" id="branch">
          <option value="Select Branch" disabled selected>
            Select Branch
          </option>
          <option value="Navoiy Branch">Navoiy Branch</option>
          <option value="Ibn-Sino Branch">Ibn Sino Branch</option>
          <option value="Samarqand Branch">Samarqand Branch</option>
        </select>
        <input type="text" name="Region" placeholder="Region" required />
        <input type="text" name="Adress" placeholder="Adress" required />
        <input
          type="text"
          name="Parents Full Name"
          placeholder="Parents' Full Name"
          required
        />
        <input
          type="tel"
          name="Parents Mobile"
          placeholder="Parents Mobile"
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
