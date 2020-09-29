import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Home />
      <Rooms />
      <Room />
      <Error />
    </>
  );
}

export default App;
