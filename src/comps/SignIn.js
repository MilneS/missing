import classes from './authForms.module.css'

const SignIn=()=>{

  const formHandler = (e) => {
    e.preventDefault();
  };

    return(
         <div className={classes.formdiv}>
      <form onSubmit={formHandler} className={classes.addForm}>
        <div>
          <p className={classes.formtitle}>
            Sign in
          </p>
        </div>
        <div>
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
            </div>
          {/* EMAIL */}
          <div>
            <label htmlFor="email" />
            <input
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
              <button type="submit" className={classes.btn}>Submit
              </button>
            </div>
          </div>
          
        </div>
      </form>
    </div>
    )
}

export default SignIn;