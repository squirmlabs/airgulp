import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ControlledTabs } from './elements/Tabs';

function App() {
  return (
    <div className="App">
      <header></header>
      <ControlledTabs />
    </div>
  );
}

export default App;
