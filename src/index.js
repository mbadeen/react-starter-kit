import React from 'react';
import { render } from 'react-dom';
import App from './App.js';

// Allows for module loading instead of reloading the page.
module.hot.accept();

render(<App />, document.getElementById('app'));
