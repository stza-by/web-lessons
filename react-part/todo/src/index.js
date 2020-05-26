import React from 'react';
import ReactDOM from 'react-dom';

const str = 'World';

const helloWorld = (
  <div> Пример </div>
);

const alternative =  React.createElement('div', null, 'Hello world');

console.log(helloWorld);

ReactDOM.render(alternative, document.getElementById('root'));
