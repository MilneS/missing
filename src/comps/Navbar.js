import classes from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
const homeIcon = <FontAwesomeIcon icon={faCompass} />;

const Navbar = (props) => {
  const showAddFunc = () => {
    props.showAdd(true);
    props.showInfo(false);
  };
  const showInfoFunc = () => {
    props.showInfo(true);
    props.showAdd(false);
  };
  const showSearchFunc = () => {
    props.showAdd(false);
    props.showInfo(false);
  };

  return (
    <>
      <div className={classes.containernav}>
        <div className={classes.homecont}>
          <div className={classes.infobtn}>
            <p className={classes.home} onClick={showSearchFunc}>{homeIcon}</p>
            <p onClick={showAddFunc} className={classes.addlogin}>
              Add
            </p>
          </div>
        </div>
        <div className={classes.addlogincont}>
          <ul className={classes.addloginul}>
            <li className={classes.info} onClick={showInfoFunc}>
              Info
            </li>
            <li className={classes.addlogin}>Login</li>
          </ul>
        </div>
      </div>
      <div className={classes.aboutcontactcont}></div>
    </>
  );
};

export default Navbar;
