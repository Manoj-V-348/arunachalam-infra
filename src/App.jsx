import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Architecture from "./components/Architecture";
import Construction from "./components/Construction";
import Interior from "./components/Interior";
import Additional from "./components/Additional";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  const [architecture, setArchitecture] = useState(false);
  const [construction, setConstruction] = useState(false);
  const [interior, setInterior] = useState(false);
  const [additional, setAdditional] = useState(false);
  const [contactus, setContactUs] = useState(false);

  const handleToggle = (category, value) => {
    switch (category) {
      case "architecture":
        setArchitecture(value);
        setConstruction(false);
        setInterior(false);
        setAdditional(false);
        setContactUs(false);
        break;
      case "construction":
        setConstruction(value);
        setArchitecture(false);
        setInterior(false);
        setAdditional(false);
        setContactUs(false);
        break;
      case "interior":
        setInterior(value);
        setArchitecture(false);
        setConstruction(false);
        setAdditional(false);
        setContactUs(false);
        break;
      case "additional":
        setAdditional(value);
        setArchitecture(false);
        setConstruction(false);
        setInterior(false);
        setContactUs(false);
        break;
      case "contact":
        setContactUs(value);
        setAdditional(false);
        setArchitecture(false);
        setConstruction(false);
        setInterior(false);
      default:
        break;
    }
  };

  return (
    <>
      <main>
        <Navbar onToggle={handleToggle} />
        {architecture ? <Architecture /> : null}
        {construction ? <Construction /> : null}
        {interior ? <Interior /> : null}
        {additional ? <Additional /> : null}
        {contactus ? <Contact /> : null}
        {!architecture &&
        !construction &&
        !interior &&
        !additional &&
        !contactus ? (
          <Homepage />
        ) : null}
      </main>
    </>
  );
}

export default App;
