import React from 'react'; /* Object: React, Module: 'react'. */
import ReactDOM from 'react-dom'; /* Object: ReactDOM, Module: 'react-dom'. */

const element = <h1>Hello World</h1>; /* Compiles down to 'React.createElement'; */
ReactDOM.render(element, document.getElementById('root')); 
/* Root is the container of our react app as seen in 'public/imdex.html' */
/* Calling ReactDom.render(element, target); Will place our element inside of the target, we need to use vanila JavaScript to get that target location. */
