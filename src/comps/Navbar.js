import classes from "./Navbar.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
const homeIcon = <FontAwesomeIcon icon={faCompass} />;

const Navbar = (props) => {
  const [show, setShow] = useState(false);
  const homecliques = () => {
    setShow(!show);
    props.showAdd(false)
  };
  const showAddFunc=()=>{
    props.showAdd(true)
  }
  // const showAddFunc=()=>{
  //   props.showAdd(false)
  // }

  // const modalOpenFunc = (e) => {
  //   props.showModal(true);
  //   props.clickedButton(e.target.id);
  //   setShow(!show);
  // };


  return (
    <>
      <div className={classes.containernav}>
        <div className={classes.homecont}>
          <div className={classes.infobtn}>
            <p className={classes.home} onClick={homecliques}>{homeIcon}</p>
            <p className={classes.info} onClick={homecliques}>
              Info
            </p>
          </div>
        </div>
        <div className={classes.addlogincont}>
          <ul className={classes.addloginul}>
            <li onClick={showAddFunc} className={classes.addlogin}>Add</li>
            <li className={classes.addlogin}>Login</li>
          </ul>
        </div>
      </div>
      <div className={classes.aboutcontactcont}>
        {/* {show && (
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
        )} */}
      </div>
    </>
  );
};

export default Navbar;
