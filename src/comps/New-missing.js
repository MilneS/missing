import classes from "./New-missing.module.css";
import { useEffect, useState } from "react";

const NewMissing = (props) => {

  const [formData, setFormData] = useState({});
  useEffect(()=>{
    console.log(formData)
},[formData])

  const formDataFunc = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const formHandler = (e) => {
    e.preventDefault();
    props.addPeopleFunc(formData)
  };

  return (
    <div className={classes.formdiv}>
      <form onSubmit={formHandler} className={classes.addForm}>
        <div>
          <p className={classes.formtitle}>Add a missing person.</p>
        </div>
        <div>
          {/* FIRST NAME */}
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
          {/* LAST NAME */}
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
          {/* AGE */}
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
          {/* CITY */}
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
          {/* CIRCUMSTANCE */}
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
          {/* BUTTON */}
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
