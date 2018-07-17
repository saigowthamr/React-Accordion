import React from "react";
import { Accordion, Text, Heading } from "../Accordion";

import "./App.css";

class Accordions extends React.Component {
  getIcon = icon => <div className={`icon ${icon && "open"}`}>➡️</div>;

  render() {
    return (
      <div>
        <div className="app">
          <h1 style={{ margin: "1rem" }}>Frequently Asked Questions</h1>
          <Accordion>
            <Heading render={icon => this.getIcon(icon)}>
              <div className="heading-box">
                <h1 className="heading">Q: What is the spin-off?</h1>
              </div>
            </Heading>
            <Text>
              <p className="text">
                A: On October 29, 2014, the Board of Directors of FCA announced
                its intention to separate the Ferrari business from FCA. The
                separation began with a restructuring that established Ferrari
                N.V. (“Predecessor Ferrari”) as the new holding company of the
                Ferrari group and the subsequent sale by FCA of 10% of the
                outstanding share capital of Predecessor Ferrari in an initial
                public offering (“IPO”) and concurrent listing.
              </p>
            </Text>

            <Heading render={icon => this.getIcon(icon)}>
              <div className="heading-box">
                <h1 className="heading">Q: When is the spin-off date?</h1>
              </div>
            </Heading>
            <Text>
              <p className="text">
                A: The spin-off was completed on January 3, 2016.
              </p>
            </Text>

            <Heading render={icon => this.getIcon(icon)}>
              <div className="heading-box">
                <h1 className="heading">Q: What is “when issued” trading?</h1>
              </div>
            </Heading>
            <Text>
              <p className="text">
                A: “When issued” trades are trades conditional on the allocation
                of the underlying shares to the shareholder selling in the
                trade.
              </p>
            </Text>

            <Heading render={icon => this.getIcon(icon)}>
              <div className="heading-box">
                <h1 className="heading">
                  Q: How will fractional shares be treated in this spin-off?
                </h1>
              </div>
            </Heading>
            <Text>
              <p className="text">
                A: No fractional shares will be delivered in connection with the
                spin-off. FCA has been advised by Computershare, the
                distribution agent for the spin-off, that any entitlements to a
                fraction of a Ferrari common share will be aggregated and sold
                in the open market by intermediaries on behalf of shareholders
                or by the transfer agent for Ferrari shares, with the net
                proceeds paid pro rata in cash to FCA shareholders or MCSs
                holders that would otherwise have a fractional share
                entitlement.
              </p>
            </Text>
          </Accordion>
        </div>


      </div>
    );
  }
}

export default Accordions;
