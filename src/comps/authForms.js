import { useState } from "react";
import Login from './Login';
import SignIn from './SignIn';

const AuthForms = () => {
  const [hasAccount, setHasAccount] = useState(true);


  return (
      <>
      {hasAccount && <Login/>}
      {!hasAccount && <SignIn/>}
      </>
  );
};

export default AuthForms;
