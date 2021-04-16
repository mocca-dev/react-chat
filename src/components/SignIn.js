import React from "react";
import { googleProvider } from "../firebase";

const signInWithGoogle = (auth) => {
  auth.signInWithPopup(googleProvider);
};

const SignIn = ({ auth }) => {
  return (
    <button className="sign-in" onClick={() => signInWithGoogle(auth)}>
      Sign In with Google
    </button>
  );
};

export default SignIn;
