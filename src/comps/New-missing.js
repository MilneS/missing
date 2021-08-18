import classes from "./New-missing.module.css";

const NewMissing = () => {
  const formHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.formdiv}>
      <form onSubmit={formHandler} className={classes.addForm}>
        {/* FIRST NAME */}
        <div className={classes.itemdiv}>
          <div className={classes.labels}>
            <label htmlFor="first_name"> First Name </label>
          </div>
          <div className={classes.inputs}>
            <input id="first_name" />
          </div>
        </div>
        {/* LAST NAME */}
        <div className={classes.itemdiv}>
          <div className={classes.labels}>
            <label htmlFor="last_name">Last Name </label>
          </div>
          <div className={classes.inputs}>
            <input id="last_name" />
          </div>
        </div>
        {/* AGE */}
        <div className={classes.itemdiv}>
          <div className={classes.labels}>
            <label htmlFor="age">Age</label>
          </div>
          <div className={classes.inputs}>
            <input id="age" />
          </div>
        </div>
        {/* CITY */}
        <div className={classes.itemdiv}>
          <div className={classes.labels}>
            <label htmlFor="city">City</label>
          </div>
          <div className={classes.inputs}>
            <input id="city" />
          </div>
        </div>
        {/* CIRCUMSTANCE */}
        <div className={classes.itemdiv}>
          <div className={classes.labels}>
            <label htmlFor="circumstance">Circumstance</label>
          </div>
          <div className={classes.inputs}>
            <textarea id="circumstance" />
          </div>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default NewMissing;
