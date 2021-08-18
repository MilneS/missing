import classes from "./Search-missing.module.css";
import { useState } from "react";

const Search = (props) => {
  const persons = props.persons;

  // store select value
  const [optionSelected, setOptionSelected] = useState();
  const selectHandler = (e) => {
    setOptionSelected(e.target.value);
  };
// store input value
  const [inputValue, setInputValue] = useState();
  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };
  // compare api at select value with input value
  const searchHandler = (e) => {
    e.preventDefault();
    persons.map((item, index) => {
      if (item[optionSelected] === inputValue) {
        console.log(item)
        return item;
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div className={classes.formcontainer}>
        <form onSubmit={searchHandler}>
          <select onChange={selectHandler} className={classes.formselect}>
            <option value="first_name">First name</option>
            <option value="last_name">Last name</option>
            <option value="city">City</option>
            <option value="state">State</option>
          </select>
          <label htmlFor="search" />
          <input
            onChange={inputHandler}
            id="search"
            className={classes.inputstyle}
          />
          <button className={classes.formbutton}>SEARCH</button>
        </form>
      </div>
      <div className={classes.titlecontainer}>Find a missing person.</div>
    </>
  );
};

export default Search;
