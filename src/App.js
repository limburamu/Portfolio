// import React, { useState } from "react";
import "./index.css";

// import NatureImg from "./assets/nature.jpg";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Routing from "./routes/Routing";

function App() {
  return (
    <div className="page-container">
      <Navbar />
      <Routing />
      {/* <img src={NatureImg} alt="NatureImg" /> */}
      <Footer />
    </div>
  )
}

export default App;
