import React from "react";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { List } from "./List";
export function ControlledTabs() {
  const [key, setKey] = React.useState("audio");

  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="audio" title="Audio">
        <List />
      </Tab>
      <Tab eventKey="graphic" title="Graphic">
        <List />
      </Tab>
      <Tab eventKey="writing" title="Motion">
        <List />
      </Tab>
      <Tab eventKey="mastering" title="Mastering">
        <List />
      </Tab>
      <Tab eventKey="marketing" title="Marketing">
        <List />
      </Tab>
    </Tabs>
  );
}
