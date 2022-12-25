import React from "react";

export const Footer = ({ title }) => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {title}
        </a>
      </div>
    </nav>
  );
};
