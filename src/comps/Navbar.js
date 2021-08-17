import classes from "./Navbar.module.css";
import { useState } from "react";

const Navbar = (props) => {
  const [show, setShow] = useState(false);

  const homecliques = () => {
    setShow(true);
  };

  const modalOpenFunc = (e) => {
    props.showModal(true);
    props.clickedButton(e.target.id);
    setShow(false);
  };

  return (
    <>
      <div className={classes.containernav}>
        <div onClick={homecliques} className={classes.homecont}>
         <div className={classes.home}><p>Home</p></div> 
        </div>
        <div className={classes.addlogincont}>
          <ul className={classes.addloginul}>
            <li className={classes.addlogin}>Add</li>
            <li className={classes.addlogin}>Login</li>
          </ul>
        </div>
      </div>
      <div className={classes.aboutcontactcont}>
        {show && (
          <div
            id="about"
            onClick={(e) => modalOpenFunc(e)}
            className={classes.aboutcontact}
          >
            About Us
          </div>
        )}
        {show && (
          <div
            id="contact"
            onClick={(e) => modalOpenFunc(e)}
            className={classes.aboutcontact}
          >
            Contact
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
