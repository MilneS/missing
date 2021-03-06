import classes from "./Search-missing.module.css";
import { useState } from "react";
import Card from "./Missing-card";

const Search = (props) => {
  const people = props.people;
  const [optionSelected, setOptionSelected] = useState();
  const [inputValue, setInputValue] = useState("");
  const [hideTitle, setHideTitle] = useState(false);
  const [cardData, setCardData] = useState([]);

  // select value
  const selectHandler = (e) => {
    setOptionSelected(e.target.value);
  };

  // input value
  const inputHandler = (e) => {
    let valeur =
      e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setInputValue(valeur);
  };

  // filter comparing api at select value with input value
  const searchHandler = (e) => {
    e.preventDefault();
    const foundPeople = people.filter((person) => {
      return person[optionSelected] === inputValue;
    });
    setCardData(foundPeople);
    setHideTitle(true);
    setInputValue("");
  };

  return (
    <>
      <div className={classes.formcontainer}>
        <form onSubmit={searchHandler}>
          <select
            defaultValue=""
            onChange={selectHandler}
            className={classes.formselect}
            required
          >
            <option value="" disabled hidden>
              Select
            </option>
            <option value="first_name">First name</option>
            <option value="last_name">Last name</option>
          </select>
          <label htmlFor="search" />
          <input
            onChange={inputHandler}
            id="search"
            className={classes.inputstyle}
            value={inputValue}
            required
          />
          <button className={classes.formbutton}>SEARCH</button>
        </form>
      </div>
      {!hideTitle && (
        <div className={classes.titlecontainer}>
          Find a missing person in California, <br />
          or login to add a missing person.
        </div>
      )}
      {hideTitle && (
        <div className={`${classes.divcardarea}`}>
          <div className={`${classes.cardarea}`}>
            {/* map through arr, return Card component */}
            {cardData &&
              cardData.map((person, index) => {
                return (
                  <div key={index} className={classes.card}>
                    <Card person={person} />
                  </div>
                );
              })}
            {cardData.length === 0 && (
              <div className={classes.notfoundmessage}>
                No registered missing person under this name.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
