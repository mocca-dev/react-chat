import React from "react";

const SignOut = ({ auth }) => {
  return auth
    ? auth.currentUser && (
        <button className="sign-out" onClick={() => auth.signOut()}>
          Sign Out
        </button>
      )
    : "";
};

export default SignOut;
