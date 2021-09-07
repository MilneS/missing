import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const selectedBtn = props.selectedBtn;

  const selectedBtnFunc = (e) => {
    props.selectedBtnNav(e.target.id);
  };

  return (
    <>
      <div className={classes.containernav}>
        <p
          id="search"
          className={`${classes.home} ${
            selectedBtn === "search" && classes.active
          }`}
          onClick={selectedBtnFunc}
        >
          Home
        </p>
        <p
          id="add"
          onClick={selectedBtnFunc}
          className={`${classes.add} ${
            selectedBtn === "add" && classes.active
          }`}
        >
          Add a missing person
        </p>
      </div>
    </>
  );
};

export default Navbar;
