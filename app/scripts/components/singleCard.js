import React from 'react';
import {Link}from 'react-router';


const SingleCard = React.createClass({
  render: function(){
    // console.log(this.props);
      return(
        <li className = "eachCard">
          <Link to = {`/cardView/${this.props.card.title}`}><h1> {this.props.card.title} </h1> </Link>
          <img src = {this.props.card.img}/>
          <p> {this.props.card.meaning}</p>
          <p> {this.props.card.past}</p>
          <p> {this.props.card.present}</p>
          <p> {this.props.card.future}</p>
        </li>
      )
  }

});

export default SingleCard;
