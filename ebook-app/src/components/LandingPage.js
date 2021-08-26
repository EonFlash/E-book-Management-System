import React from "react";
//REACT_ROUTER_DOM
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div>
      <h1>I am the landing page</h1>
      <Link to="/login"> LOgin </Link>
    </div>
  );
};
