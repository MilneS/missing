import classes from "./Missing-card.module.css";

const Card = () => {
  return (
    <div className={classes.cardcontainer}>
      <div className={classes.cardphoto}></div>
      <div className={classes.cardname}></div>
      <div className={classes.cardplace}></div>
    </div>
  );
};
export default Card;
