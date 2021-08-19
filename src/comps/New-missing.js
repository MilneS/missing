import classes from "./New-missing.module.css";

const NewMissing = () => {
  const formHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.formdiv}>
      <form onSubmit={formHandler} className={classes.addForm}>
      <div ><p className={classes.formtitle}>Add a missing person.</p></div>
        <div>
          {/* FIRST NAME */}
          <div>
            <label htmlFor="first_name" />
            <input
              className={classes.inputs}
              type="text"
              placeholder="First name"
              id="first_name"
              required
            />
          </div>
          {/* LAST NAME */}
          <div>
            <label htmlFor="last_name" />
            <input
              className={classes.inputs}
              type="text"
              placeholder="Last name"
              id="last_name"
              required
            />
          </div>
          {/* AGE */}
          <div>
            <label htmlFor="age" />
            <input
              className={classes.inputs}
              type="number"
              placeholder="Age"
              id="age"
              required
            />
          </div>
          {/* CITY */}
          <div>
            <label htmlFor="city" />
            <input
              className={classes.inputs}
              type="text"
              placeholder="City"
              id="city"
              required
            />
          </div>
          {/* CIRCUMSTANCE */}
          <div>
            <label htmlFor="circumstance" />
            <textarea
              placeholder="Circumstance"
              type="text"
              className={classes.textarea}
              id="circumstance"
              required
            />
          </div>
          {/* BUTTON */}
          <div className={classes.btncontainer}>
            <button type="submit" className={classes.btn}>
              SUBMIT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewMissing;
