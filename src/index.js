import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyList from './MyList';
import * as serviceWorker from './serviceWorker';

const todos = ["Buy some cookies and cream ice cream", 'Buy more ice cream', 'Eat all ice cream', 'Go to the gym'];

ReactDOM.render(
  <React.StrictMode>
    <MyList theList={todos}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
