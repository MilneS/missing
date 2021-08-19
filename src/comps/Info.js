import classes from "./Info.module.css";
import { useState } from "react";

const Info = () => {
  // DATA OBJECT
  const aboutUs = {
    title: "About Us",
    message:
      "Each year, people are reported as missing after running away, being forced out from homes, or being abducted for sexual, political or criminal purposes. Our website provides tools to report missing persons and comment on profiles to bring any valuable information that could help in the search for our loved ones.",
  };
  const contact = {
    title: "Contact",
    message: "b",
  };

  const [clickedBtn, setClickedBtn] = useState(aboutUs);
  const aboutFunc = (e) => {
    setClickedBtn(aboutUs);
  };

  const contactFunc = (e) => {
    setClickedBtn(contact);
  };

  return (
    <div className={classes.cardcontainer}>
      <div className={classes.infocard}>
        <div className={classes.titlecontainer}>
          <div onClick={aboutFunc} className={classes.title} value="about">
            <p >About Us</p>
          </div>
          <div onClick={contactFunc} className={classes.title} value="contact">
            <p >Contact</p>
          </div>
        </div>
        <div className={classes.pickedtitle}>{clickedBtn.title}</div>
        <div className={classes.infotextcontainer}>
          <div className={classes.infotext}>{clickedBtn.message}</div>
        </div>
      </div>
    </div>
  );
};

export default Info;
