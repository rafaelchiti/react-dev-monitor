import React from 'react';
import demoData from './demo_data';
import {Monitor} from 'react-dev-monitor';

import 'react-json-inspector/json-inspector.css';

let monitor = (
  <Monitor data={demoData} />
)

React.render(monitor, document.getElementById('reactMountPoint'));