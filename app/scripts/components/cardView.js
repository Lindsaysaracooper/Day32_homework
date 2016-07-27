import React from 'react';
import {Link}from 'react-router';
import store from './store';

const CardView = React.createClass({

  // let singleCard = this.props.params.id;
  //
  render: function(){
    let theCard = store.cards.filter((card, i, arr)=> {
      if (card.title === this.props.params.id) {
        return true
      }
    })
    return(
      <div>
      <h1> {theCard[0].title} </h1>
      <img src = {theCard[0].img}/>
      <p> {theCard[0].meaning} </p>
      <p> {theCard[0].past} </p>
      <p> {theCard[0].present} </p>
      <p> {theCard[0].future} </p>
      <Link to="/cards" > Card Collection </Link>
      </div>
  //     <Link to = {"/cardView/singleCard"}>{this.store.title}</Link>
    )
  //
  }
});



export default CardView;
