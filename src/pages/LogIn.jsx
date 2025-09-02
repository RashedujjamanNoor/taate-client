import React from "react";

const LogIn = () => {
  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Enter Your Email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" placeholder="Enter Your Password" />
      </div>
    </div>
  );
};

export default LogIn;
