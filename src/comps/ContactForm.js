import classes from "./ContactForm.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [formSubmited, setFormSubmitted] = useState(false);
  const formFunc = (e) => {
    e.preventDefault();
    setFormSubmitted(!formSubmited);
  };

  return (
    <div>
      {!formSubmited && (
        <form onSubmit={formFunc}>
          <div>
            <div className={classes.formcontainer}>
              <div className={classes.divcontainer}>
                <div className={classes.subtitle}>
                  Send us a message.
                </div>

                <label htmlFor="name" />
                <input
                  id="name"
                  className={classes.inputdiv}
                  placeholder="Name"
                  type="text"
                  required
                />
                <label htmlFor="email" />
                <input
                  id="email"
                  className={classes.inputdiv}
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="textarea" />
                <textarea
                  id="textarea"
                  className={classes.textareadiv}
                  placeholder="Message"
                  type="text"
                  required
                />
              </div>
              <div className={classes.btncontainer}>
                <button type="submit" className={classes.btn}>
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
      {formSubmited && (
        <div className={classes.sentmsg}> Your message was sent.</div>
      )}
    </div>
  );
};

export default ContactForm;