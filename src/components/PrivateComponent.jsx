import React from "react";
import PrivateRoute from "./PrivateRoute";

function PrivateComponent({ Component }) {
  return <PrivateRoute>{Component}</PrivateRoute>;
}

export default PrivateComponent;
