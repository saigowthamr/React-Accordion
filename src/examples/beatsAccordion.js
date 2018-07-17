import React from "react";

import { Accordion, Heading, Text } from "../Accordion";
import "./beats.css";

class BeatsAcoordion extends React.Component {
  render() {
    return (
      <div className="beats">
        <h2
          style={{
            textAlign: "center",
            marginBottom: ".4rem",
            padding: ".3rem"
          }}
        >
          Popular Topics
        </h2>
        <Accordion>
                <Heading enter={{ active: 'head active' }}>
            <h2 className="head">Bluetooth pairing</h2>
          </Heading>
                <Text enter={{ active: 'me open', normal: 'me' }}>
            <ul className="items">
              <li>CONNECT DEVICES TO BLUETOOTH</li>
              <li>PAIR WITH MAC</li>
            </ul>
          </Text>

                <Heading enter={{active:'head active'}}>
            <h2 className="head">Sound help</h2>
          </Heading>
                <Text enter={{active:'me open',normal:'me'}}>
            <ul className="items">
                        <li>HEADPHONES AND EARPHONES </li>
                        <li>SPEAKERS </li>
            </ul>
          </Text>
        </Accordion>
      </div>
    );
  }
}

export default BeatsAcoordion;
