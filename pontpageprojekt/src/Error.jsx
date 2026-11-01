import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";

export default function Error() {
  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Az oldal nem található</p>
      <Link to="/" className="back-home">Vissza a főoldalra</Link>
    </div>
  );
}
