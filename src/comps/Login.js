import classes from './Login.module.css'


const Login=()=>{

    const formHandler = (e) => {
        e.preventDefault();
      };
      
    return(
        <div className={classes.formdiv}>
        <form onSubmit={formHandler} className={classes.addForm}>
          <div>
            <p className={classes.formtitle}>
              Login
            </p>
          </div>
          <div>
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
  
                <p className={classes.createAcc}>Create an account</p>
              <div className={classes.btncontainer}>
                <button type="submit" className={classes.btn}>Connect
                </button>
              </div>
            </div>
            
          </div>
        </form>
      </div>
    )
}
export default Login;
