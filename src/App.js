import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/annamaria-bara/"
            target="_blank"
            rel="noopener noreferrel"
          >
            Annamaria Bara
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/yesthis1please/shecodes_react_project_weatherapp"
            target="_blank"
            rel="noopener noreferrel"
          >
            open sourced on GitHub
          </a>
          <br />
          Shout out to{" "}
          <a
            href="https://www.flaticon.com/free-animated-icons/sun"
            title="sun animated icons"
            rel="noopener noreferrel"
          >
            Freepik
          </a>{" "}
          for the icons!
        </footer>
      </div>
    </div>
  );
}
