import React from 'react';
import {Link}from 'react-router';
import {Router, Route, hashHistory} from 'react-router';


const NewCard = React.createClass({
  addFunction: function(e){
    e.preventDefault();
    let cardTitle = this.refs.cardTitle.value;
    let cardMeaning =this.refs.cardMeaning.value;
    let cardPast =this.refs.cardPast.value;
    let cardPresent =this.refs.cardPresent.value;
    let cardFuture =this.refs.cardFuture.value;
    let data={
      cardTitle: cardTitle,
      cardMeaning: cardMeaning,
      cardPast: cardPast,
      cardPresent: cardPresent,
      cardFuture: cardFuture,
    };
        hashHistory.push('/cards');
  },
  render: function (){
    return(
      <div>
      <h1> Add a Tarot Card </h1>
      <form onSubmit= {this.addFunction}>
      <input type="text" placeholder="Card's Title" ref="cardTitle"/>
      <input type="text" placeholder="Card's Meaning" ref="cardMeaning"/>
      <input type="text" placeholder="Card's Past Details" ref="cardPast"/>
      <input type="text" placeholder="Card's Present Details" ref="cardPresent"/>
      <input type="text" placeholder="Card's Future Details" ref="cardFuture"/>
      <input type="submit" value="Add"/>
      </form>
        <Link to="/" > BACK TO HOME </Link>
      </div>
    )

  }
});

export default NewCard;
