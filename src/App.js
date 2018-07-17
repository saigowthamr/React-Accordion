import React from "react";

import Accordions from './examples/Accordions'

import SideBar from "./examples/sidebarcollapse";
import BeatsAccordion from './examples/beatsAccordion';
import SimpleAccordion from './examples/SimpleAccordion';

class App extends React.Component{
  render() {
    return (
      <React.Fragment>
        <Accordions/>
        <SideBar />
        <BeatsAccordion />
        <SimpleAccordion/>
      </React.Fragment>
    )
  }
}

export default App;
