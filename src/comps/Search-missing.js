import classes from "./Search-missing.module.css";

const Search = () => {
  const searchHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
    <div className={classes.formcontainer}>
      <form onSubmit={searchHandler}>
          <select className={classes.formselect}>
            <option>City</option>
            <option>County</option>
            <option>Name</option>
            <option>Age</option>
          </select>
          <label htmlFor="search" />
          <input id="search" className={classes.inputstyle} />
          <button className={classes.formbutton}>SEARCH</button>
      </form>
    </div>
    <div className={classes.titlecontainer}>Find a missing person.</div>
    </>
  );
};

export default Search;
