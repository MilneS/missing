import classes from "./Navbar.module.css";
import { useState } from "react";

const Navbar = (props) => {
  const [selectedBtn, setSelectedBtn] = useState("search");
  const loggedIn = props.userLoggedin;

  const selectedBtnFunc = (e) => {
    setSelectedBtn(e.target.id);
    props.selectedBtnNav(e.target.id);
  };
  const selectedBtnLogoutFunc = (e) => {
    props.userLoggedinFunc(false);
    props.selectedBtnNav(e.target.id);
  };

  return (
    <>
      <div className={classes.containernav}>
        <div className={classes.homecont}>
          <div className={classes.infobtn}>
            <p
              id="search"
              className={`${classes.home} ${
                selectedBtn === "search" && classes.active
              }`}
              onClick={selectedBtnFunc}
            >
              Home
            </p>
            {loggedIn && (
              <p
                id="add"
                onClick={selectedBtnFunc}
                className={`${classes.addlogin} ${
                  selectedBtn === "add" && classes.active
                }`}
              >
                Add
              </p>
            )}
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
            {!loggedIn && (
              <li
                id="login"
                onClick={selectedBtnFunc}
                className={`${classes.addlogin} ${
                  selectedBtn === "login" && classes.active
                }`}
              >
                Login
              </li>
            )}
            {loggedIn && (
              <li
                id="logout"
                onClick={selectedBtnLogoutFunc}
                className={`${classes.addlogin} ${
                  selectedBtn === "logout" && classes.active
                }`}
              >
                Logout
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className={classes.aboutcontactcont}></div>
    </>
  );
};

export default Navbar;