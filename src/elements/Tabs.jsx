import React from 'react';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { List } from './List';
export function ControlledTabs() {
  const [key, setKey] = React.useState('home');

  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="sound" title="Sound">
        Sound
        <List />
      </Tab>
      <Tab eventKey="graphics" title="Graphics">
        Graphics
        <List />
      </Tab>
      <Tab eventKey="writing" title="Writing">
        Writing
        <List />
      </Tab>
      <Tab eventKey="mastering" title="Mastering">
        Mastering
        <List />
      </Tab>
      <Tab eventKey="marketing" title="Marketing">
        Marketing
        <List />
      </Tab>
    </Tabs>
  );
}
