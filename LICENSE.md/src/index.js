import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

console.log(`rendering page`);
ReactDOM.render(<App />, document.getElementById('root'));
console.log(`page rendered`);
registerServiceWorker();
