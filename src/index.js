import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <Button variant="contained" color="primary">
      Test
    </Button>
  </div>
);

render(<App />, document.getElementById("root"));
