import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/articles">Articles</Link>
    </div>
  );
}
