import React from "react";

import { Accordion, Text, Heading } from "../Accordion";
import "./sidebarCollapse.css";

class SideBar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <Accordion>
          <Heading>
            <div className="javascript">JavaScript</div>
          </Heading>

          <Text enter={{ active: "m open", normal: "m" }}>
            <div className="javascript">
             December 4, 1995; 22 years ago.

            </div>
          </Text>
          <Heading>
            <div className="reactjs">Reactjs</div>
          </Heading>

          <Text enter={{ active: "p open", normal: "p" }}>
                    <div className="reactjs">March 2013; 5 years ago</div>
          </Text>

          <Heading>
            <div className="angular">Angular</div>
          </Heading>

          <Text enter={{ active: "k open", normal: "k" }}>
                    <div className="angular">September 2016; 21 months ago</div>
          </Text>
        </Accordion>
      </div>
    );
  }
}

export default SideBar;
