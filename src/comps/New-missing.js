import classes from "./New-missing.module.css";
import { useState } from "react";

const NewMissing = (props) => {
  const [formData, setFormData] = useState({});

  const formDataFunc = (e) => {
    setFormData({
      ...formData,
      [e.target.id]:
        e.target.value.trim().charAt(0).toUpperCase() + e.target.value.slice(1),
    });
  };

  const formHandler = (e) => {
    e.preventDefault();
    props.addPeopleFunc(formData);
    props.selectedBtn("search");
  };

  return (
    <div className={classes.formdiv}>
      <form onSubmit={formHandler} className={classes.addForm}>
        <div>
          <p className={classes.formtitle}>Add a missing person.</p>
        </div>
        <div>
          <div>
            <label htmlFor="first_name" />
            <input
              onChange={formDataFunc}
              className={classes.inputs}
              type="text"
              placeholder="First name"
              id="first_name"
              required
            />
          </div>
          <div>
            <label htmlFor="last_name" />
            <input
              onChange={formDataFunc}
              className={classes.inputs}
              type="text"
              placeholder="Last name"
              id="last_name"
              required
            />
          </div>
          <div>
            <label htmlFor="age" />
            <input
              onChange={formDataFunc}
              className={classes.inputs}
              type="number"
              placeholder="Age"
              id="age"
              required
            />
          </div>
          <div>
            <label htmlFor="city" />
            <input
              onChange={formDataFunc}
              className={classes.inputs}
              type="text"
              placeholder="City"
              id="city"
              required
            />
          </div>
          <div>
            <label htmlFor="circumstance" />
            <textarea
              onChange={formDataFunc}
              placeholder="Circumstance"
              type="text"
              className={classes.textarea}
              id="circumstance"
              required
            />
          </div>
          <div className={classes.btncontainer}>
            <button type="submit" className={classes.btn}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewMissing;
