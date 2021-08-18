const NewMissing = () => {
  return (
    <div>
      <form>
        <label htmlFor="first_name">
          <input id="first_name">First Name: </input>
        </label>
        <label htmlFor="last_name">
          <input id="last_name">Last Name: </input>
        </label>
        <label htmlFor="age">
          <input id="age">Age: </input>
        </label>
        <label htmlFor="city">
          <input id="city">City: </input>
        </label>
        <label htmlFor="circumstance">
          <input id="circumstance">Circumstance: </input>
        </label>
      </form>
    </div>
  );
};

export default NewMissing;
