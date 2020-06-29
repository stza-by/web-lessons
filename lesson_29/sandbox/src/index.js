import pic from './photo.jpg';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const App =() => (
  <React.Fragment>
    <h1>Hello world</h1>
    <img src={pic}/>
  </React.Fragment>
)

ReactDOM.render(<App/>, document.getElementById('root'));