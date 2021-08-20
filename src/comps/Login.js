import classes from "./Login.module.css";
import { useState, useEffect } from "react";

const Login = (props) => {
  const defaultdata = {
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(defaultdata);

  // fetch
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(process.env.REACT_APP_API2);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const responseData = await response.json();
      const loadeduser = {
        email: responseData.email,
        password: responseData.password,
      };
      setUserData(loadeduser);
    };
    fetchUser().catch((error) => {});
  }, []);

  const [enteredData, setEnteredData] = useState();
  const enteredDataFunc = (e) => {
    setEnteredData({ ...enteredData, [e.target.id]: e.target.value.trim() });
  };

  // const [userLoggedin, setUserLoggedin] = useState(false);
  const formHandler = (e) => {
    e.preventDefault();
    if (
      enteredData.email === userData.email &&
      enteredData.password === userData.password
    ) {
      // setUserLoggedin(true);
      props.loggedinData(true);
      props.selectedBtn("search");
    }
  };

  return (
    <div className={classes.formdiv}>
      <form onSubmit={formHandler} className={classes.addForm}>
        <div>
          <p className={classes.formtitle}>Login</p>
        </div>
        <div>
          {/* EMAIL */}
          <div>
            <label htmlFor="email" />
            <input
              onChange={enteredDataFunc}
              className={classes.inputs}
              type="email"
              placeholder="Email"
              id="email"
              required
            />
          </div>
          {/* PASSWORD */}
          <div>
            <label htmlFor="password" />
            <input
              onChange={enteredDataFunc}
              className={classes.inputs}
              type="password"
              placeholder="Password"
              id="password"
              required
            />
          </div>
          {/* BUTTON */}
          <div className={classes.endcontainer}>
            <div className={classes.btncont}>
              <button type="submit" className={classes.btn}>
                Connect
              </button>
            </div>
          </div>
          <p className={classes.credentials}>
            test@test.com <br />
            test
          </p>
        </div>
      </form>
    </div>
  );
};
export default Login;