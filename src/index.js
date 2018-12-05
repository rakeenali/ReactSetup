import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

ReactDOM.render(
  <div>
    <h1>React Setup</h1>
  </div>,
  document.querySelector('#app')
);

module.hot.accept();