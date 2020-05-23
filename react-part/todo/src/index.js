import React from 'react';
import ReactDOM from 'react-dom';

// // JSX React Element
// const simpleReactElement = <h1>Hello WORLD</h1>;

// const alternative = React.createElement('h1', null, 'Hello world');

// console.log(simpleReactElement);
// console.log(alternative);

// JSX React Component 
 const HelloWorldComponent = () => {
   return <h1>Hello world</h1>
 }

 console.log(HelloWorldComponent);
 console.log(<HelloWorldComponent/>);

//ReactDOM.render(simpleReactElement, document.getElementById('root'));
ReactDOM.render(<HelloWorldComponent />, document.getElementById('root'));