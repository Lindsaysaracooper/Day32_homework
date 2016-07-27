import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/nav';
import {Router, Route, hashHistory} from 'react-router';
import Cards from "./components/cards";
import NewCard from "./components/newCard";
import Login from "./components/Login";
import singleCard from "./components/singleCard"
import CardView from "./components/CardView";
const CardRouter =(
  <Router history = {hashHistory}>
  <Route path="/" component = {Nav}/>
  <Route path="/cards" component ={Cards}/>
  <Route path="/newCard" component={NewCard}/>
  <Route path="/login" component = {Login}/>
  <Route path="/cardView/:id" component = {CardView}/>
  </Router>
)

ReactDOM.render(CardRouter, document.getElementById('container'))
