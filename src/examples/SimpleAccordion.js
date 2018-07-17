import React from "react";

import { Accordion, Text, Heading } from "../Accordion";

const SimpleAcoordion = () => (
    <div className="app">
        <h2 style={{ margin: '1rem' }}>Simple accordion without styles</h2>
        <Accordion>
            <Heading>Hit me</Heading>
            <Text>
                Sometime we can feel a bit dull in the
                   morning and we need to
                   produce our own sunshine energy.
             </Text>

            <Heading >Click me</Heading>
            <Text >
                <p style={{ background: 'red', padding: '1rem' }}>Either way, I think we can all do with a bit more spark to help us
        perform miracles and live in joy.</p>
            </Text>
        </Accordion>
    </div>
);

export default SimpleAcoordion;
