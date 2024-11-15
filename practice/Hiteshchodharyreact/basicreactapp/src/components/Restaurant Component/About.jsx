import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>Namasthe React web Series</h2>
      <User name = {"Nikhitha (function)"}/>
      <UserClass name = {"Nikhitha (class)"} />
    </div>
  );
};

export default About;
