import classes from "./Navbar.module.css";
import { useState } from "react";

const Navbar = (props) => {
  const [show, setShow] = useState(false);

  const homecliques = () => {
    setShow(!show);
  };

  const modalOpenFunc = (e) => {
    props.showModal(true);
    props.clickedButton(e.target.id);
    setShow(!show);
  };

  return (
    <>
      <div className={classes.containernav}>
        <div  className={classes.homecont}>
         <div className={classes.home} onClick={homecliques}><p>Home</p></div> 
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
