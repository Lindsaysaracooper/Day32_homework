import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../components/nav';


const CardRouter =(
  <Router history = {hashHistory}>
  <Route path ="/" component = {Nav}/>
  </Router>
)

ReactDOM.render(CardRouter, document.getElementById('container'))
