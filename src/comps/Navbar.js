import classes from "./Navbar.module.css";
import { useEffect, useState } from "react";

const Navbar = (props) => {
  const [selectedBtn, setSelectedBtn] = useState("search");

  const selectedBtnFunc = (e) => {
    setSelectedBtn(e.target.id);
    console.log(e.target.id);
  };
  useEffect(()=>{  props.selectedBtnNav(selectedBtn);},[selectedBtn, props])


  return (
    <>
      <div className={classes.containernav}>
        <div className={classes.homecont}>
          <div className={classes.infobtn}>

            <p id="search" className={`${classes.home} ${
                selectedBtn === "search" && classes.active
              }`} onClick={selectedBtnFunc}>
              Home
            </p>
            <p
              id="add"
              onClick={selectedBtnFunc}
              className={`${classes.addlogin} ${
                selectedBtn === "add" && classes.active
              }`}
            >
              Add
            </p>
          </div>
        </div>

        <div className={classes.addlogincont}>
          <ul className={classes.addloginul}>
            <li
              id="info"
              onClick={selectedBtnFunc}
              className={`${classes.info} ${
                selectedBtn === "info" && classes.active
              }`}
            >
              Info
            </li>

            <li
              id="login"
              onClick={selectedBtnFunc}
              className={`${classes.addlogin} ${
                selectedBtn === "login" && classes.active
              }`}
            >
              Login
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.aboutcontactcont}></div>
    </>
  );
};

export default Navbar;
