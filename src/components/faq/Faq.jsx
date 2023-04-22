import React, { useState } from "react";
import bg from "../../assets/images/faq/bg.svg";
import "./Faq.scss";
import Button from "../button/Button";

const Faq = () => {
  const [select, setSelect] = useState(null);

  const toggle = (i) => {
    if (select == i) {
      setSelect(null);
    } else {
      setSelect(i);
    }
  };
  return (
    <div
      className="accordion"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="container">
        <h3>5 Reasons Why You Should Choose CIC School</h3>
        <div className="flex">
          <div className="left">
            {data.map((item, i) => {
              const { title, text } = item;
              return (
                <div key={i} className="item">
                  <p className={`title ${select == i ? "active" : ""} `}>
                    {title}
                    <span className="toggle" onClick={() => toggle(i)}>
                      {select === i ? "-" : "+"}
                    </span>
                  </p>
                  {select === i ? <p className="text">{text}</p> : null}
                </div>
              );
            })}
          </div>
          <div className="right">
            <div className="contents">
              <h4>
                Admission is Open Now Admission is open for
                <span> grades 1-11 now.</span>
              </h4>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    title: "Teaching Staf",
    text: "The best quality and interactive lessons led by the most qualified IELTS and SAT teachers",
  },
  {
    title: "Khan Academy",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
  },
  {
    title: "Progression Opportunities",
    text: "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    title: "Scholarships",
    text: "normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable",
  },
  {
    title: "Information Texnologies",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
  },
];

export default Faq;
