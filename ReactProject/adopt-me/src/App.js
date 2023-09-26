import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router } from "@reach/router";
import Details from "./Details";

function App() {
  return (
    <div>
      <h1>
        {" "}
        <a href="/">Adopt Me!</a>{" "}
      </h1>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
}
render(<App />, document.getElementById("root"));
