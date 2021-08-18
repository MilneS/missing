import classes from "./Missing-card.module.css";

const Card = (props) => {
  const person = props.person;
  return (
    <div className={classes.card}>
      <div className={classes.name}>
        {person.first_name} {person.last_name}
      </div>
      <div className={classes.age}>
        Age: <span>{person.age}</span>
      </div>
      <div>
        Location: <span>{person.city}</span>
      </div>
      <div className={classes.circontainer}>
        <p className={classes.para}>Circumstance: </p>
        <div className={classes.circumstance}>{person.circumstance}</div>
      </div>
    </div>
  );
};
export default Card;
